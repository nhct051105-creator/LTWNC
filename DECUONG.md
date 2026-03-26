Các chức năng dự kiến:

Admin
Quản lý sản phẩm: thêm/sửa/xóa, danh sách sản phẩm
Quản lý người dùng: thêm/sửa/xóa, vai trò, trạng thái, tìm kiếm
Quản lý đơn hàng: xem danh sách, cập nhật trạng thái, hủy/xóa
Báo cáo doanh thu: tổng doanh thu, tổng đơn, giá trị trung bình, bảng doanh thu theo ngày
Phân quyền route admin (chỉ tài khoản ADMIN truy cập)

User
Trang chủ
Danh sách sản phẩm theo danh mục (nam, nữ, giày, phụ kiện, tất cả)
Tìm kiếm sản phẩm
Chi tiết sản phẩm
Giỏ hàng
Thanh toán (3 bước: giao hàng -> chọn phương thức -> xác nhận)
Quản lý đơn hàng cá nhân (lịch sử đơn) trong trang profile
Quản lý thông tin cá nhân (sửa hồ sơ)
Quản lý địa chỉ giao hàng
Đăng nhập/đăng ký/đăng xuất

Các bước dự kiến để làm bài: 

B1. Xác định kiến trúc MVC + DB + FE build
Chốt kiến trúc backend theo MVC Monolith:
Controller: nhận request, trả response.
Service: xử lý nghiệp vụ.
Repository: truy cập dữ liệu.
Entity/Model: mô hình dữ liệu.
DTO: request/response.
Security: xác thực và phân quyền USER, ADMIN.
Chốt module nghiệp vụ:
Auth và User.
Product và Category.
Cart và Checkout.
Order.
Admin.
Report doanh thu.
Audit log.
Chốt database:
PostgreSQL là database chính.
Quản lý schema bằng migration.
Có seed dữ liệu ban đầu (admin, danh mục, sản phẩm mẫu).
Chốt frontend:
Dùng React + Vite để phát triển nhanh.
Build frontend ra bản production trước khi test tổng.

Kết quả cần đạt B1:
Có tài liệu kiến trúc MVC.
Có danh sách module và API MVP.
Có quyết định công nghệ backend, database, frontend.

B2. Cài Docker và chạy PostgreSQL
Cài Docker Desktop.
Tạo cấu hình chạy PostgreSQL bằng Docker Compose.
Khai báo biến môi trường database (db name, user, password, port).
Bật volume để giữ dữ liệu bền vững.
Kiểm tra kết nối PostgreSQL từ backend.
Chạy migration khởi tạo schema.

Kết quả cần đạt B2:
PostgreSQL chạy ổn định trong Docker.
Backend kết nối thành công.
Schema được tạo thành công qua migration.

B3. Bắt đầu xây dựng các service + frontend
Xây backend theo thứ tự ưu tiên:
Auth/User: đăng ký, đăng nhập, profile, địa chỉ.
Product: danh sách, tìm kiếm, chi tiết.
Cart/Checkout: giỏ hàng, thanh toán 3 bước.
Order: tạo đơn, lịch sử đơn.
Admin: CRUD sản phẩm, người dùng, đơn hàng.
Report: tổng doanh thu, tổng đơn, giá trị trung bình, doanh thu theo ngày.
Audit: log hành động theo user, loại, entity.
Xây frontend theo luồng nghiệp vụ:
Trang chủ.
Danh sách sản phẩm theo danh mục.
Tìm kiếm sản phẩm.
Chi tiết sản phẩm.
Giỏ hàng.
Checkout 3 bước.
Profile người dùng, lịch sử đơn.
Dashboard admin.
Build frontend:
Chạy dev để phát triển.
Build production để kiểm tra bản deploy.

Kết quả cần đạt B3:
Service backend hoạt động theo module.
Frontend gọi API thành công.
Bản build production frontend thành công.

B4. Test
Test chức năng:
Auth flow.
Product flow.
Cart, checkout, order flow.
Admin CRUD và report.
Audit log filter.
Test phân quyền:
USER không vào route admin.
USER không thao tác tài nguyên của user khác.
ADMIN truy cập đầy đủ khu vực quản trị.
Test tích hợp:
Frontend kết nối backend ổn định.
Backend kết nối PostgreSQL ổn định trong Docker.
Test lỗi và an toàn:
Validate input đúng.
Trả mã lỗi phù hợp.
Không lộ thông tin nhạy cảm trong lỗi.
Hành động nhạy cảm có audit log.

Kết quả cần đạt B4:
Pass các luồng chính end-to-end.
Phân quyền hoạt động đúng.
Sẵn sàng demo và triển khai môi trường tiếp theo.

