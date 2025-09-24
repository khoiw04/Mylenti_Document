# 🎨 Donate & YouTube LiveStream Overlay

Tùy chỉnh giao diện donate theo phong cách riêng của bạn!

---

## ✨ Truy cập Overlay

Bạn có thể truy cập đường link overlay của mình tại:
- Stackblitz: https://stackblitz.com/~/github.com/khoiw04/OBS_Mylenti_Overlay (`Lỗi: No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`)
- Gitpod: https://app.gitpod.io/projects?project=01997ad4-ee46-792f-ac8f-836455e582ac (`Tương thích với Node.js`)
- Local: https://github.com/khoiw04/OBS_Mylenti_Overlay
 
→ Đây là nơi hiển thị donate, bình luận, avatar,...

---

## 🎨 Tùy chỉnh bằng CSS

Bạn có thể chỉnh sửa giao diện bằng cách:

1. Vào Mylenti → OBS Cài Đặt → Mặc Định → **Empty**
2. Vào OBS → **Browser Source**  
3. Dán đường link overlay của bạn  
4. Mở phần **Custom CSS** (hoặc gọi là CSS Tùy chỉnh)  
5. Copy & paste đoạn CSS bạn muốn chỉnh

> 💡 Ví dụ: thay đổi màu chữ, ẩn avatar, đổi font, thêm hiệu ứng...

---

## 🛠️ Gợi ý CSS nhanh

1. YouTube Livechat
```css
#livechatContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  background: linear-gradient(to bottom right, #ffffff, #f1f1f1);
  border-radius: 12px;
  max-width: 420px;
  font-family: 'Segoe UI', Arial, sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e0e0e0;
}

#livechatInfo {
  display: flex;
  align-items: center;
  gap: 14px;
}

#livechatAvatar {
  position: relative;
  width: 24px;
  height: 24px;
}

#livechatAvatar [data-slot="avatar"] {
  background-color: #888;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 100%;
  height: 100%;
}

#livechatAvatar .absolute {
  background-color: #4caf50;
  border-radius: 50%;
}

#livechatName {
  font-size: 17px;
  font-weight: 700;
  color: #222;
  margin: 0;
}

#livechatComment {
  font-size: 15px;
  color: #444;
  margin-left: 38px;
  line-height: 1.5;
}
```

2. Donate Overlay
```css
#donateContainer {
  max-width: 32rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  background: linear-gradient(to bottom right, #fff, #f0f9ff);
  border-radius: 1.5rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  font-family: 'Segoe UI', Arial, sans-serif;
  border: 1px solid #e0f2ff;
}

#donateEmoij {
  width: 10rem;
  height: 10rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  background-color: #e3f2fd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
}

#donateName {
  font-weight: 600;
  font-size: 1.25rem;
  color: #333;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

#donateMessage {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  max-width: 28rem;
}
```

3. Superchat (YouTube Livechat)
```css
/* Superchat Container */
#superchatContainer {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background: linear-gradient(to right, #fff8e1, #ffecb3);
  border-radius: 12px;
  max-width: 420px;
  font-family: 'Segoe UI', Arial, sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  border: 1px solid #ffe082;
}

/* Info Section */
#superchatInfoContainer {
  display: flex;
  align-items: center;
  gap: 14px;
}

/* Avatar */
#superchatInfoContainer [data-slot="avatar"] {
  width: 48px;
  height: 48px;
  background-color: #ffa000;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

/* Info Text */
#superchatInfo {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Name */
#superchatInfo :first-child {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}

/* Price */
#superchatInfo :last-child {
  font-size: 15px;
  font-weight: 600;
  color: #d84315;
}

/* Comment */
#superchatComment {
  font-size: 15px;
  color: #444;
  line-height: 1.5;
  margin-left: 62px;
}
```


💡 Bạn có thể sáng tạo thêm bằng cách thử nghiệm trực tiếp trong OBS  
🎉 Biến overlay thành dấu ấn riêng của bạn!