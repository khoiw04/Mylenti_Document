# 🎨 Donate & YouTube LiveStream Overlay

Tùy chỉnh giao diện donate theo phong cách riêng của bạn!

---

## ✨ Truy cập Overlay

Bạn có thể truy cập đường link overlay của mình tại:  
 - Donate Overlay: `https://{user_name}.mylenti.khoiw04.com/`
 - LiveStream Overlay: `https://{user_name}.mylenti.khoiw04.com/`
 
→ Đây là nơi hiển thị donate, bình luận, avatar,...

---

## 🎨 Tùy chỉnh bằng CSS

Bạn có thể chỉnh sửa giao diện bằng cách:

1. Vào OBS → **Browser Source**  
2. Dán đường link overlay của bạn  
3. Mở phần **Custom CSS** (hoặc gọi là CSS Tùy chỉnh)  
4. Copy & paste đoạn CSS bạn muốn chỉnh

> 💡 Ví dụ: thay đổi màu chữ, ẩn avatar, đổi font, thêm hiệu ứng...

---

## 🛠️ Gợi ý CSS nhanh

```css
/* Ẩn avatar */
.avatar { display: none; }

/* Đổi màu chữ donate */
.donate-text { color: #FFD700; }

/* Làm chữ lớn hơn */
.comment { font-size: 20px; }

/* Thêm hiệu ứng mờ dần */
.fade-in { animation: fadeIn 2s ease-in-out; }
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

💡 Bạn có thể sáng tạo thêm bằng cách thử nghiệm trực tiếp trong OBS  
🎉 Biến overlay thành dấu ấn riêng của bạn!