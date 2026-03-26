# KHOI TAO DU AN

## Muc tieu
- Khoi tao cau truc monorepo gom backend, frontend, va ha tang Docker.
- Chay duoc PostgreSQL bang Docker Compose.
- Chay duoc frontend React + Vite va backend o moi truong local.

## 1) Tao cau truc thu muc goc

```powershell
mkdir ltwnc-shop
cd ltwnc-shop
mkdir backend,frontend,infra,docs
```

Ket qua mong muon:
- Co 4 thu muc: backend, frontend, infra, docs.

## 2) Khoi tao frontend (React + Vite)

```powershell
npm create vite@latest frontend -- --template react
cd frontend
npm install
npm run dev
```

Ket qua mong muon:
- Frontend chay duoc o moi truong dev.

## 3) Khoi tao backend (Node.js + Express + TypeScript)

```powershell
cd ..\backend
npm init -y
npm install express cors dotenv pg jsonwebtoken bcrypt
npm install -D typescript ts-node-dev @types/node @types/express
npx tsc --init
```

Goi y cau truc backend theo MVC:
- src/controllers
- src/services
- src/repositories
- src/models
- src/dtos
- src/middlewares
- src/routes

Ket qua mong muon:
- Backend co bo khung phu thuoc co ban de phat trien API.

## 4) Cau hinh PostgreSQL bang Docker Compose

Muc tieu cua buoc nay:
- Co PostgreSQL chay trong container.
- Du lieu duoc luu ben vung qua volume.
- Backend co the ket noi qua localhost:5432.

4.1) Kiem tra Docker da san sang

Chay cac lenh sau tren PowerShell:

~~~powershell
docker --version
docker compose version
docker info
~~~

Neu docker info bao loi ket noi daemon:
- Mo Docker Desktop.
- Cho den khi trang thai la Running.
- Neu dung WSL2 thi bat WSL integration trong Docker Desktop.

4.2) Tao file cau hinh docker-compose

Di chuyen vao thu muc infra (neu chua co thi tao moi):

~~~powershell
cd ..\infra
~~~

Tao file docker-compose.yml voi noi dung sau:

~~~yaml
version: "3.9"
services:
  postgres:
    image: postgres:16
    container_name: ltnwc_postgres
    restart: unless-stopped
    environment:
      POSTGRES_DB: shopdb
      POSTGRES_USER: shopuser
      POSTGRES_PASSWORD: shoppass
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U shopuser -d shopdb"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  pgdata:
~~~

Giai thich nhanh:
- ports 5432:5432: app local ket noi DB qua localhost:5432.
- volume pgdata: giu du lieu, khong mat khi container restart.
- healthcheck: cho biet DB da san sang nhan ket noi chua.

4.3) Khoi dong PostgreSQL

~~~powershell (nho khoi dong docker desktop)
docker compose up -d
~~~

Kiem tra container dang chay:

~~~powershell
docker compose ps
~~~

Ky vong:
- service postgres co State la running (hoac healthy sau vai giay).

4.4) Kiem tra log neu can

~~~powershell
docker compose logs -f postgres
~~~

Khi thay dong tuong tu database system is ready to accept connections la DB da ok.
Nhan Ctrl + C de dung theo doi log (khong dung container).

4.5) Test ket noi truc tiep vao DB

~~~powershell
docker exec -it ltnwc_postgres psql -U shopuser -d shopdb -c "\l"
~~~

Neu lenh tra ve danh sach database la ket noi thanh cong.

4.6) Cac lenh quan ly thuong dung

Tam dung container:

~~~powershell
docker compose stop
~~~

Chay lai container:

~~~powershell
docker compose start
~~~

Dung va xoa container (giu volume du lieu):

~~~powershell
docker compose down
~~~

Dung va xoa ca volume (mat du lieu):

~~~powershell
docker compose down -v
~~~

4.7) Loi thuong gap va cach xu ly

- Loi port 5432 da duoc su dung:
  - Kiem tra app/DB khac dang chiem cong 5432.
  - Doi mapping thanh 5433:5432 roi cap nhat DB_PORT=5433 trong backend.
- Loi authentication failed:
  - Kiem tra dung POSTGRES_USER, POSTGRES_PASSWORD trong compose va .env.
  - Neu da doi password sau khi tao volume cu, can down -v de tao lai data sach.
- Loi khong tim thay docker compose:
  - Dung lenh docker compose (co dau cach), khong dung docker-compose neu may chua cai ban cu.

Ket qua mong muon:
- PostgreSQL chay on dinh qua Docker.
- Kiem tra duoc container, log, va ket noi psql thanh cong.
- San sang cho backend ket noi bang bien moi truong DB_HOST=localhost va DB_PORT=5432.

## 5) Cau hinh bien moi truong cho backend

Tao file .env trong backend:

```env
PORT=8080
DB_HOST=localhost
DB_PORT=5432
DB_NAME=shopdb
DB_USER=shopuser
DB_PASSWORD=shoppass
JWT_SECRET=your_secret_key
```

Ket qua mong muon:
- Backend doc duoc cau hinh ket noi DB tu bien moi truong.

## 6) Migration va seed du lieu

Muc tieu cua buoc nay:
- Tao schema database bang migration (khong tao bang thu cong).
- Co du lieu mau de test ngay API va giao dien.

Huong dan chi tiet (khuyen nghi dung Prisma):

6.1) Cai Prisma trong backend

~~~powershell
cd ..\backend
npm install prisma @prisma/client
npx prisma init
~~~

Sau lenh tren, backend co:
- thu muc prisma
- file prisma/schema.prisma

6.2) Khai bao ket noi DB trong .env

Them bien sau vao backend/.env (neu chua co):

~~~env
DATABASE_URL="postgresql://shopuser:shoppass@localhost:5432/shopdb?schema=public"
~~~

6.3) Dinh nghia schema toi thieu cho MVP

Trong prisma/schema.prisma, tao cac model uu tien:
- User, Role
- Category, Product
- Address
- Cart, CartItem
- Order, OrderItem
- AuditLog

Ghi chu:
- User va Role phuc vu auth + phan quyen.
- Product/Category phuc vu trang danh sach va chi tiet.
- Order/OrderItem phuc vu checkout va lich su don.

6.4) Tao migration dau tien

~~~powershell
npx prisma migrate dev --name init_schema
~~~

Ky vong:
- Prisma tao migration trong prisma/migrations.
- Database shopdb co cac bang theo schema.

6.5) Tao seed du lieu mau

Tao file prisma/seed.js (hoac seed.ts) voi du lieu:
- 1 tai khoan ADMIN
- 1 tai khoan USER
- Vai category (nam, nu, giay, phu kien)
- Vai product mau

Them script vao package.json:

~~~json
{
  "prisma": {
    "seed": "node prisma/seed.js"
  }
}
~~~

Chay seed:

~~~powershell
npx prisma db seed
~~~

6.6) Kiem tra schema va du lieu

Mo Prisma Studio de xem du lieu:

~~~powershell
npx prisma studio
~~~

Ky vong:
- Nhin thay bang User, Product, Category co du lieu.

Loi thuong gap:
- Loi P1001 (khong ket noi DB): kiem tra Docker Postgres da chay chua.
- Loi auth DB: doi chieu DATABASE_URL voi POSTGRES_USER/POSTGRES_PASSWORD.
- Loi migration bi conflict: dung npx prisma migrate reset (chi dung khi dev local).

Ket qua mong muon:
- Tao duoc schema va du lieu mau de test luong nghiep vu.
- Co migration ro rang de quan ly thay doi DB.

## 7) Chay dong thoi backend va frontend

Muc tieu cua buoc nay:
- Chay cung luc backend + frontend.
- Frontend goi duoc API backend va hien thi du lieu.

7.1) Cau hinh script chay backend

Trong backend/package.json, dam bao co script dev:

~~~json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
  }
}
~~~

Trong src/index.ts can:
- goi dotenv.config()
- app.listen(PORT)
- co route test /health tra ve 200

7.2) Chay backend (Terminal 1)

~~~powershell
cd ..\backend
npm run dev
~~~

Test nhanh backend:

~~~powershell
curl http://localhost:8080/health
~~~

Ky vong:
- Tra ve status 200 va message OK (hoac tuong duong).

7.3) Cau hinh frontend goi dung API

Trong frontend tao file .env:

~~~env
VITE_API_URL=http://localhost:8080
~~~

Khi goi API trong React, dung import.meta.env.VITE_API_URL.

7.4) Chay frontend (Terminal 2)

~~~powershell
cd ..\frontend
npm run dev
~~~

Ky vong:
- Frontend chay tai URL Vite (thuong la http://localhost:5173).
- Trang san pham/trang chu lay duoc du lieu tu backend.

7.5) Kiem tra ket noi FE <-> BE

Checklist test nhanh:
- Mo DevTools Network tren frontend, request API khong bi CORS.
- API tra ve 200 cho cac route read (vi du: /products, /categories).
- Dang nhap/dang ky test duoc voi tai khoan seed.

Neu bi CORS:
- Them cors middleware trong backend va allow origin cua frontend (http://localhost:5173).

Neu frontend khong goi duoc backend:
- Kiem tra VITE_API_URL.
- Kiem tra backend dang chay dung cong PORT.
- Kiem tra route co prefix dung (vi du /api/v1).

Ket qua mong muon:
- He thong chay local end-to-end cho cac luong co ban.
- Frontend goi API backend thanh cong va hien thi du lieu that.

## Checklist xac nhan hoan tat khoi tao
- [ ] Hoan tat cau truc thu muc du an.
- [ ] Frontend chay duoc bang Vite.
- [ ] Backend chay duoc voi bo khung MVC.
- [ ] PostgreSQL chay bang Docker Compose.
- [ ] Ket noi backend <-> database thanh cong.
- [ ] Migration va seed chay thanh cong.
- [ ] Frontend goi API backend thanh cong.
