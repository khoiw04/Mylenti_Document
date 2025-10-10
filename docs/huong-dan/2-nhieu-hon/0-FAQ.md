# ❓ FAQ — Giải Đáp Thắc Mắc

---

## 💾 Tại sao phần mềm nặng vậy?

Phần mềm tích hợp AI → chiếm hơn **90% dung lượng**!  
Thêm giọng nói AI bên ngoài → tốn chi phí hàng tháng 💸

Ngoài ra, hệ thống phải chạy **3 server cùng lúc**:

- 🧠 **Python (AI)**  
  → Nhận lời nhắn donate, xử lý giọng nói

- ⚙️ **Rust (Mylenti)**  
  → Gửi dữ liệu người chuyển khoản  
  → Nhận thông báo từ Sepay  
  → Đồng bộ lên website

- 🔌 **NodeJS (Mylenti)**  
  → Kết nối OBS  
  → Kết nối Discord

---

## 🔐 Tại sao cần API Key?

API Key là “chìa khóa” để xác thực giữa Sepay ↔ Mylenti  
Giúp bảo mật, chống spam, và đảm bảo đúng người nhận!

---

## 🧠 AI hoạt động ra sao?

- Khi có donate → AI nhận lời nhắn  
- Phân tích nội dung → Chuyển thành giọng
- Hiển thị trên OBS → Kèm avatar, bình luận, hiệu ứng

---

## 🔄 Tại sao cần reload Discord?

Đôi khi Discord bị treo hoặc token hết hạn  
→ Chỉ cần **CTRL + R** để làm mới ứng dụng là xong!

---

## 📉 Tại sao không nhận được thông báo?

- Chưa cấu hình đúng mã thanh toán trong Sepay  
- Webhook sai URL hoặc thiếu API Key  
- OBS chưa nhập đúng link overlay

> Kiểm tra lại từng bước, hoặc thử donate test để xác nhận!

---

## 🧩 Discord không đăng nhập?

- Token hết hạn hoặc ứng dụng bị treo

🛠️ Giải pháp:  
→ Nhấn **CTRL + R** để reload  
→ Đăng nhập lại từ phần “Lý Lịch”

---

## 📺 Overlay không hoạt động?

- Phần Mềm chưa gửi dữ liệu cài đặt lên OBS  
- Link overlay sai hoặc chưa nhập  
- OBS chưa bật Browser Source  
- CSS bị lỗi hoặc ẩn phần tử

🔧 Giải pháp:  
→ Nhấn "Làm mới Cache trang Hiện Tại" → Nhấn **CTRL + R** để Phần Mềm gửi lại dữ liệu
→ Kiểm tra link overlay

---

## 💸 Donate không hiển thị?

- Người dùng đã chuyển khoản nhưng không thấy hiển thị trên OBS  
- Phần mềm chưa nhận được dữ liệu từ Sepay  
- Overlay chưa được cập nhật đúng

🧰 Giải pháp:
→ Nhấn "Làm mới Cache trang Hiện Tại" → Nhấn **CTRL + R** để phần mềm gửi lại Settings
→ Kiểm tra Bình luận phần Giao Dịch
→ Kiểm tra lại cấu hình Webhook trong Sepay  
→ Đảm bảo mã thanh toán đúng định dạng (tiền tố, hậu tố)
→ Kiểm tra link overlay trong OBS

---

## 💬 Bình luận không hiện lên?

- Người donate không để lại lời nhắn  
- Phần mềm chưa xử lý xong giọng nói AI  
- CSS đang ẩn phần hiển thị bình luận

🧠 Giải pháp:  
→ Kiểm tra lại phần “OBS Cài Đặt” → bật hiển thị bình luận
→ Thử donate test có lời nhắn để kiểm tra  
→ Đảm bảo server Python đang hoạt động thông qua ```http://localhost:4545/health```

---

## 💡 Mẹo Tối Ưu

- Dùng **Mediafire** để lấy link Direct dễ dàng
- Ưu Tiên dùng **Google Drive** để lấy Link Direct Âm Thanh
- Tạo CSS riêng để cá nhân hóa giao diện  
- Test donate trước khi livestream  
- Gắn link mạng xã hội trong “Lý Lịch” để tăng tương tác  
- Dùng chế độ tối nếu stream ban đêm 🌙