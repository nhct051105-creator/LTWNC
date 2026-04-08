| Vai trò | Họ và tên | Lớp | Mã sinh viên |
| --- | --- | --- | --- |
| Nhóm trưởng | Nguyễn Hoài Nam | D18CNPM2 | 23810310082 |
| Thành viên | Nguyễn Huy Cường | D18CNPM2 | 23810310084 |
| Thành viên | Phạm Tiến Vinh | D18CNPM2 | 23810310085 |

---

## 📊 Dự án

**Website e-commerce cho hãng thời trang**

---

## 🛠️ Công nghệ sử dụng

| Thành phần | Công nghệ | Lý do lựa chọn |
| :--- | :--- | :--- |
| **Ngôn ngữ Backend** | Node.js + TypeScript | Hiệu suất cao, hệ thống kiểu mạnh giúp detect lỗi sớm, phổ biến trong thực tế |
| **Framework Backend** | Express 5.x | Nhẹ, linh hoạt, dễ mở rộng, phù hợp cho team học tập |
| **Database** | PostgreSQL 16 | CSDL quan hệ mạnh mẽ, mã nguồn mở, truy vấn SQL chuẩn, tối ưu tốt |
| **ORM** | Prisma 4.x | Quản lý schema dễ dàng, migrations tự động, type-safe queries |
| **Authentication** | JWT + Bcrypt | Bảo mật chuẩn, không lưu session server, dễ scale horizontal |
| **Frontend** | React 19 + Vite | Framework hiện đại, hot reload nhanh, build optimization |
| **HTTP Client** | Axios | Interceptor mạnh mẽ, xử lý request/response tập trung |
| **UI Framework** | React Router + Ant Design | Navigation linh hoạt, components đầy đủ, thiết kế chuyên nghiệp |
| **Container** | Docker + docker-compose | Môi trường phát triển nhất quán, sẵn sàng production |
| **Version Control** | Git | Quản lý code, commit convention rõ ràng cho team |

---

## 📋 Nội dung chính

### 👨‍💻 Công việc đã hoàn tất

- [Nguyễn Hoài Nam - Tiến độ Backend](Nguyễn%20Hoài%20Nam/Tien_Do_Backend.md)
- [Nguyễn Huy Cường - Tiến độ Frontend](Nguyễn%20Huy%20Cường/Tien_Do_Frontend_MVC.md)

### 📏 Quy tắc chung

- [Công nghệ sử dụng](Quy_Tac_Chung/CONG_NGHE.md)
- [Quy ước đặt tên](Quy_Tac_Chung/QUY_UOC_DAT_TEN.md)
- [Quy tắc xử lý lỗi](Quy_Tac_Chung/QUY_TAC_LOI.md)
- [Lưu ý khi làm việc](Quy_Tac_Chung/LUU_Y.md)

### 📈 Báo cáo tiến độ

- [Report 03/04/2026](reports/REPORT_20260403.md)
- [Report 08/04/2026](reports/REPORT_20260408.md)

---

## 🏗️ Cấu trúc dự án

```
LTWNC/
├── ltwnc-shop/          # Dự án chính
│   ├── backend/         # Node.js + Express + TypeScript + Prisma
│   ├── frontend/        # React + Vite
│   └── infra/           # Docker & services
├── Quy_Tac_Chung/       # Quy tắc & hướng dẫn chung
├── Nguyễn Hoài Nam/     # Tiến độ backend
├── Nguyễn Huy Cường/    # Tiến độ frontend
├── reports/             # Báo cáo hàng ngày
└── README.md            # File này
```

---

## 🚀 Hướng dẫn cài đặt

### 📋 Yêu cầu hệ thống

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **Docker** & **Docker Compose** ([Download](https://www.docker.com/products/docker-desktop))
- **Git** ([Download](https://git-scm.com/))

### 1️⃣ Clone repository

```bash
git clone <repository-url>
cd LTWNC/ltwnc-shop
```

### 2️⃣ Cấu hình Database (PostgreSQL)

```bash
# Vào thư mục infra
cd infra

# Khởi động PostgreSQL container
docker-compose up -d

# Kiểm tra container đang chạy
docker ps
```

**Kết nối:** `postgresql://shopuser:shoppass@localhost:5432/shopdb`

### 3️⃣ Setup Backend

```bash
# Vào thư mục backend
cd ../backend

# Cài đặt dependencies
npm install

# Chạy migrations
npx prisma migrate deploy

# Khởi động server (dev mode)
npm run dev
```

**Backend chạy tại:** `http://localhost:8080`

### 4️⃣ Setup Frontend

```bash
# Vào thư mục frontend (terminal mới)
cd ../frontend

# Cài đặt dependencies
npm install

# Khởi động dev server
npm run dev
```

**Frontend chạy tại:** `http://localhost:5173`

### ✅ Kiểm tra setup thành công

- [ ] PostgreSQL container đang chạy: `docker ps`
- [ ] Backend API response: `curl http://localhost:8080`
- [ ] Frontend load trang chủ: `http://localhost:5173`

---

## 🔧 Các lệnh hữu ích

### Backend

```bash
# Dev mode
npm run dev

# Build production
npm run build

# Chạy Prisma Studio (GUI quản lý DB)
npx prisma studio

# Tạo migration
npx prisma migrate dev --name <migration-name>
```

### Frontend

```bash
# Dev mode
npm run dev

# Build production
npm run build

# Preview build
npm run preview

# ESLint check
npm run lint
```

### Database

```bash
# Connect PostgreSQL container
docker exec -it ltnwc_postgres psql -U shopuser -d shopdb

# Stop all containers
docker-compose down

# Reset database (delete volume)
docker-compose down -v
```

---
