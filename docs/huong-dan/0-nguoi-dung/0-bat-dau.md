# 🚀 Bắt Đầu Donate với Mylenti

Hướng dẫn thiết lập donate qua Discord, Sepay và OBS!

---

## 🔗 Định Nghĩa

### Đường Link Cá Nhân

- Mỗi tài khoản Discord có link riêng:  
  `https://{user_name}.mylenti.khoiw04.com/`  
  Ví dụ: `https://khoiwn04.mylenti.khoiw04.com`  
  ![](/assets/images/guide/0-nguoi-dung/0-bat-dau/DISCORD_USER_NAME.jpg)

- Các link liên quan:  
  - Webhook: `.../webhook/sepay`  
  - Donations: `.../data/{user_name}/donations`  
  - User: `.../data/{user_name}`  
  - Health: `.../health`

### 🔐 API_KEY

- Là chìa khóa kết nối Sepay ↔ Mylenti  
- Bạn tự tạo, tự giữ, tự dùng!

---

## 🧰 Đăng Ký Sepay <Badge type="warning" text="Mới" />

### 1️⃣ Đăng ký tại [Sepay.vn](https://sepay.vn/)

### 2️⃣ Kết nối ngân hàng  
👉 [Hướng dẫn chi tiết](https://docs.sepay.vn/them-tai-khoan-ngan-hang.html)

### 3️⃣ Cấu hình mã thanh toán  
- Vào: **Cấu Hình Công Ty > Cấu Hình Chung**  
  ![](/assets/images/guide/0-nguoi-dung/0-bat-dau/SEPAY_Cau_hinh_Chung.jpg)

> ⚠️ Nhập đúng:  
> - Nhận diện: Bật  
> - Tiền tố: DN  
> - Hậu tố: 3–10 ký tự số  
> - Lưu lại!

![](/assets/images/guide/0-nguoi-dung/0-bat-dau/SEPAY_Cau_truc_Thanh_Toan.jpg)

### 4️⃣ Nhập Webhook  
- Vào: **Tích hợp & Thông báo > WebHooks**  
  ![](/assets/images/guide/0-nguoi-dung/0-bat-dau/SEPAY_Vao_Webhook.png)  
  → Bấm **Thêm Webhooks**  
  ![](/assets/images/guide/0-nguoi-dung/0-bat-dau/SEPAY_Them_Webhook.png)

> ⚠️ Nhập như sau:  
> - Bỏ qua nếu không có code: ✅  
> - Gọi đến URL: [xem lại link ở trên](#đường-link)  
> - Xác thực: Đúng  
> - Gọi lại khi lỗi HTTP  
> - Chứng thực: API KEY  
> - Content type: `application/json`  
> - API Key: viết liền, không cách

![](/assets/images/guide/0-nguoi-dung/0-bat-dau/SEPAY_Nhap_Webhook.png)

---

## 💬 Đăng Nhập Discord <Badge type="warning" text="Mới" />

> Nếu lỗi đăng nhập → **CTRL + R** để reload

### 1️⃣ Vào Lý Lịch  
![](/assets/images/guide/0-nguoi-dung/0-bat-dau/MYLENTI_Ly_lich.png)

### 2️⃣ Đăng nhập Discord  
![](/assets/images/guide/0-nguoi-dung/0-bat-dau/MYLENTI_Dang_Nhap_Discord.jpg)

### 3️⃣ Vào Ngân hàng  
![](/assets/images/guide/0-nguoi-dung/0-bat-dau/MYLENTI_Ngan_hang.png)

### 4️⃣ Nhập nơi nhận chuyển khoản  
![](/assets/images/guide/0-nguoi-dung/0-bat-dau/MYLENTI_Nhap_Ngan_Hang.jpg)

> ⚠️ Nhập đúng thông tin đã dùng bên Sepay!

---

## 📺 Hiện Donate trên OBS <Badge type="warning" text="Mới" />

### 1️⃣ Đăng nhập YouTube  
![](/assets/images/guide/0-nguoi-dung/0-bat-dau/MYLENTI_Dang_Nhap_YouTube.png)

### 2️⃣ Lấy Link Donate  
![](/assets/images/guide/0-nguoi-dung/0-bat-dau/MYLENTI_Link_Donate.png)

### 3️⃣ Nhập vào OBS  
![](/assets/images/guide/0-nguoi-dung/0-bat-dau/OBS_Donate_Browser.png)

### 4️⃣ Chỉnh Settings  
![](/assets/images/guide/0-nguoi-dung/0-bat-dau/OBS_Donate_Settings.png)

---

🎉 Hoàn tất! Bạn đã sẵn sàng nhận Donate  
💡 Nên thử chuyển khoản trước khi livestream nhé!