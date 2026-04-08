# TIẾN ĐỘ - NGUYỄN HOÀI NAM

## Ngày 03/04/2026
| Ngày | Chức năng phụ trách | Trạng thái | Ghi chú |
| :--- | :--- | :--- | :--- |
| 03/04 | Khởi tạo dự án (Kết nối postgresql từ docker, khởi tạo thư mục dự án bằng cấu trúc mvc) | Hoàn thành | |

## Ngày 08/04/2026
| Ngày | Chức năng phụ trách | Trạng thái | Ghi chú |
| :--- | :--- | :--- | :--- |
| 08/04 | Fix migration SQLite → PostgreSQL, tạo .env.example, cập nhật quy ước commit | Hoàn thành | Database schema đã sẵn sàng |

---

## TỔNG KẾT

### ✅ Hoàn thành
- Khởi tạo dự án từ 0
  - Cấu hình kết nối PostgreSQL qua Docker
  - Thiết kế cấu trúc thư mục theo mô hình MVC
- Migration SQLite → PostgreSQL
  - Chuyển đổi schema từ SQLite sang PostgreSQL
  - Đưa 9 models database vào production
- Tạo file .env.example
  - Template biến môi trường an toàn (không lộ credentials)
- Cập nhật quy ước commit
  - Xóa bắt buộc tạo branch
  - Thiết lập quy ước commit message tiếng Việt

### 🎯 Kế tiếp
- Validation middleware cho request
- Error handling tập trung
- Logging system
