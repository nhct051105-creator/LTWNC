# TIẾP THEO: DB VÀ FE CHO 3 NGƯỜI

## Mục tiêu
- Chốt nhanh phần database và frontend để 3 người làm song song.
- Tránh đụng nhau ở schema, API và giao diện.
- Có dữ liệu mẫu để test ngay trong quá trình làm.

## 1) Chốt database trước khi code

### 1.1 Bảng tối thiểu cần có
- `users`
- `roles`
- `categories`
- `products`
- `addresses`
- `carts`
- `cart_items`
- `orders`
- `order_items`
- `audit_logs`

### 1.2 Quy tắc chung của DB
- Dùng PostgreSQL.
- Mọi thay đổi schema phải đi qua migration.
- Không tạo bảng thủ công trong database.
- Có `created_at` và `updated_at` cho các bảng chính.
- Có cột trạng thái cho các bảng cần quản lý nghiệp vụ.

### 1.3 Dữ liệu seed tối thiểu
- 1 tài khoản `ADMIN`.
- 1 đến 2 tài khoản `USER`.
- 4 đến 5 danh mục sản phẩm.
- 10 đến 20 sản phẩm mẫu.
- 2 đến 3 địa chỉ giao hàng mẫu.

### 1.4 Quy ước migration
- Mỗi migration chỉ làm một việc rõ ràng.
- Đặt tên dễ hiểu, ví dụ: `init_schema`, `add_products_table`.
- Không sửa migration cũ sau khi đã dùng chung.

## 2) Chốt frontend trước khi code

### 2.1 Các trang cần có
- Trang chủ.
- Trang danh sách sản phẩm.
- Trang chi tiết sản phẩm.
- Trang giỏ hàng.
- Trang checkout.
- Trang đăng nhập / đăng ký.
- Trang profile người dùng.
- Trang admin cơ bản.

### 2.2 Quy tắc frontend
- React + Vite.
- Mỗi trang tách rõ component.
- Gọi API qua một file service chung.
- Không hardcode URL backend, dùng biến môi trường.
- Ưu tiên giao diện dễ dùng, rõ ràng, chạy tốt trên màn hình phổ thông.

### 2.3 Dữ liệu FE cần test
- Danh sách sản phẩm.
- Chi tiết sản phẩm.
- Giỏ hàng có thêm / xóa / sửa số lượng.
- Đăng nhập bằng tài khoản seed.
- Hiển thị được lịch sử đơn hàng sau này.

## 3) Chia nhiệm vụ rõ cho 3 người

### Người 1: Database + Migration + Seed
- Thiết kế schema DB.
- Viết migration đầu tiên.
- Tạo seed dữ liệu mẫu.
- Kiểm tra Prisma Studio hoặc công cụ xem DB.

### Người 2: Backend API nền tảng
- Làm auth, user, phân quyền.
- Tạo chuẩn response và chuẩn lỗi.
- Viết route health, route test và middleware dùng chung.
- Kết nối backend với PostgreSQL.

### Người 3: Frontend + Giao diện khung
- Dựng layout React + Vite.
- Tạo các trang cơ bản.
- Kết nối API danh sách sản phẩm và đăng nhập.
- Chuẩn bị giao diện cho giỏ hàng, checkout và profile.

## 4) Cách làm việc để không bị chồng chéo
- Chốt API trước khi code FE.
- Chốt schema DB trước khi code backend nghiệp vụ.
- Mỗi ngày cập nhật tiến độ ngắn cho cả nhóm.
- Có thay đổi gì ở API hoặc DB thì báo ngay.
- Mỗi người giữ đúng phần việc của mình, hạn chế sửa chéo.

## 5) Thứ tự nên làm tiếp
1. Chốt schema DB v1.
2. Tạo migration đầu tiên.
3. Tạo seed dữ liệu mẫu.
4. Dựng backend skeleton.
5. Dựng frontend skeleton.
6. Nối FE với API đọc dữ liệu đầu tiên.

## 6) Kết quả cần đạt
- DB chạy được và có dữ liệu mẫu.
- Backend kết nối DB ổn định.
- Frontend mở được các trang cơ bản.
- 3 người có việc rõ ràng, không làm trùng nhau.
- Có thể chuyển sang giai đoạn làm chức năng chi tiết ngay sau đó.