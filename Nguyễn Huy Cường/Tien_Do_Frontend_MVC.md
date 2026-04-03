# Tiến Độ Làm Frontend Theo Từng Ngày - Nguyễn Huy Cường

## Tổng quan

- Dự án: LTWNC Shop Frontend
- Công nghệ: React + Vite
- Cách làm: Từng ngày tập trung vào một phần giao diện, cuối cùng mới thêm API
- Thời gian: Chia theo từng ngày

## Ngày 1: Layout và Home (Hoàn thành)

### Hoàn thành:

- Xóa toàn bộ giao diện cũ và API services
- Tạo Layout.jsx: Header với logo và navigation, main content, footer
- Tạo Layout.css: CSS responsive cho layout
- Tạo HomePage.jsx: Trang chủ đơn giản với thông tin cơ bản
- Cập nhật App.jsx với React Router và nested routes
- Ghi đè App.css với CSS tối giản
- Chạy Vite thành công trên localhost:5173

### Ghi chú:

- Giao diện ngày 1 hoàn thành, đơn giản, không có API
- Layout khung sẵn sàng cho các trang khác
- Navigation cơ bản với các link

## Ngày 2: Products và ProductDetail (Chưa làm)

### Kế hoạch:

- Tạo ProductsPage.jsx: Danh sách sản phẩm với dữ liệu mẫu
- Tạo ProductDetailPage.jsx: Chi tiết sản phẩm theo ID
- Thêm CSS cho product grid và card
- Cập nhật routing

### Ghi chú:

- Sẽ thêm dữ liệu mẫu, không gọi API

## Ngày 3: Cart và Checkout (Chưa làm)

### Kế hoạch:

- Tạo CartPage.jsx: Giỏ hàng cơ bản
- Tạo CheckoutPage.jsx: Trang thanh toán
- Thêm logic đơn giản cho cart (local state)

### Ghi chú:

- Chưa có persistence, chỉ UI

## Ngày 4: Login và Register (Chưa làm)

### Kế hoạch:

- Tạo LoginPage.jsx: Form đăng nhập
- Tạo RegisterPage.jsx: Form đăng ký
- Thêm validation cơ bản

### Ghi chú:

- Chưa có auth logic, chỉ UI

## Ngày 5: Profile và Admin (Chưa làm)

### Kế hoạch:

- Tạo ProfilePage.jsx: Thông tin user
- Tạo AdminPage.jsx: Trang admin cơ bản
- Thêm navigation cho protected routes

### Ghi chú:

- UI mẫu, chưa có data

## Ngày 6: Thêm API và Kết nối (Chưa làm)

### Kế hoạch:

- Tạo services/apiService.js: Axios config
- Tạo authService.js, productService.js
- Kết nối API cho tất cả pages
- Thêm error handling và loading states
- Test với backend

### Ghi chú:

- Cuối cùng mới thêm API để tránh lỗi khi backend chưa sẵn sàng
- Auth flow cơ bản hoàn thành
- Chưa có logout UI và protected routes

## Ngày 5: Hoàn thiện các trang còn lại

### Hoàn thành:

- CartPage.jsx: Placeholder cho giỏ hàng
- CheckoutPage.jsx: Placeholder cho thanh toán
- ProfilePage.jsx: Placeholder cho profile
- RegisterPage.jsx: Placeholder cho đăng ký
- AdminPage.jsx: Placeholder cho admin
- Chạy dev server thành công trên localhost:5174

### Ghi chú:

- Tất cả trang cơ bản đã có placeholder
- Sẵn sàng phát triển thêm khi backend hoàn thành
- Giao diện responsive cơ bản

## Tổng kết

- Frontend skeleton hoàn thành theo MVC
- Kết nối API danh sách sản phẩm và đăng nhập
- Chuẩn bị giao diện cho giỏ hàng, checkout, profile
- Có thể mở rộng thêm tính năng theo yêu cầu
