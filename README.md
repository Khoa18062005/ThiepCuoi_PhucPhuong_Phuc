# 🌸 Thiệp Cưới Online | Hoàng Phúc & Thanh Phương 🌸

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-563D7C?style=flat-square&logo=bootstrap&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white)

Chào mừng bạn đến với mã nguồn (source code) dự án Thiệp Cưới Online của chúng tôi. Dự án này được thiết kế theo phong cách hoa anh đào (Sakura) lộng lẫy, tinh tế, kết hợp cùng các hiệu ứng web hiện đại để mang lại trải nghiệm tuyệt vời nhất cho khách mời khi nhận thiệp.

🔗 **Link Demo Trực Tuyến:** [Sẽ cập nhật link sau khi deploy]

---

## ✨ Tính Năng Nổi Bật

### 🎨 Giao diện & Trải nghiệm (UI/UX)
- **Thiết kế lộng lẫy:** Tone màu hồng cánh sen (`--cherry-blossom-pink`) kết hợp font chữ nghệ thuật cao cấp (Dancing Script & Quicksand).
- **Màn hình chào (Welcome Screen):** Tạo sự tò mò và trang trọng trước khi khách "Mở Thiệp".
- **Hiệu ứng 3D & Animation:** - Hoạt ảnh mở phong bì thư 3D mượt mà bằng CSS nguyên bản.
  - Hiệu ứng hoa anh đào rơi toàn màn hình không giới hạn.
  - Các khối nội dung tự động nổi lên (fade-in) khi cuộn trang (Intersection Observer).
- **Tương thích hoàn hảo (Responsive):** Giao diện tự động căn chỉnh tuyệt đẹp trên mọi kích thước màn hình (Mobile, Tablet, Desktop).

### ⚙️ Chức năng cốt lõi
- **Sổ Lưu Bút Thời Gian Thực (Realtime Guestbook):** Tích hợp Firebase Realtime Database. Khách mời gửi lời chúc và hệ thống sẽ cập nhật ngay lập tức cho tất cả mọi người cùng xem mà không cần tải lại trang.
- **Nhạc Nền Thông Minh (BGM):** Tự động phát nhạc nền khi khách tương tác mở thiệp, có nút điều khiển bật/tắt xoay tròn nổi bật ở góc màn hình.
- **Tích hợp tiện ích:** - Nút mở nhanh Google Maps chỉ đường đến nơi tổ chức sự kiện.
  - Link liên kết trực tiếp đến Facebook cá nhân của Cô dâu và Chú rể từ ảnh đại diện.

---

## 🛠️ Công Nghệ & Thư Viện Sử Dụng

Dự án được xây dựng trên nền tảng Frontend tiêu chuẩn, không sử dụng framework phức tạp để đảm bảo tốc độ tải trang nhanh nhất:
- **Ngôn ngữ chính:** HTML5, CSS3, JavaScript (ES6+).
- **Framework UI:** [Bootstrap 5.3](https://getbootstrap.com/) (Sử dụng qua CDN).
- **Icon:** [Bootstrap Icons](https://icons.getbootstrap.com/).
- **Font chữ:** [Google Fonts](https://fonts.google.com/) (Dancing Script, Quicksand).
- **Cơ sở dữ liệu (BaaS):** [Firebase Realtime Database](https://firebase.google.com/) phiên bản Compat (10.8.1).

---

## 📂 Cấu Trúc Thư Mục

```text
📦 ThiepCuoiOnline
 ┣ 📂 asset/                 # Chứa toàn bộ tài nguyên đa phương tiện
 ┃ ┣ 📜 ChuRe.jpg            # Ảnh đại diện chú rể
 ┃ ┣ 📜 CoDau.jpg            # Ảnh đại diện cô dâu
 ┃ ┣ 📜 Cover.jpg            # Ảnh nền và ảnh bìa trong thư
 ┃ ┣ 📜 wedding-music.mp3    # File nhạc nền tự động phát
 ┃ ┗ ... (các ảnh album khác)
 ┣ 📂 css/                   
 ┃ ┗ 📜 main.css             # Chứa các biến màu sắc, CSS Layout và Animations
 ┣ 📂 js/                    
 ┃ ┗ 📜 input.js             # Logic hiệu ứng, trình phát nhạc và xử lý form Firebase
 ┣ 📜 index.html             # Tệp giao diện chính (Single Page)
 ┗ 📜 README.md              # Tài liệu dự án (File bạn đang đọc)