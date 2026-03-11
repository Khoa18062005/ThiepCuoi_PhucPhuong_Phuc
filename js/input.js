document.addEventListener('DOMContentLoaded', function () {

    // 1. Hiệu ứng cánh hoa đào rơi
    function createSakura() {
        const container = document.getElementById('sakura-container');
        const sakuraCount = 35; // Số lượng hoa rơi

        for (let i = 0; i < sakuraCount; i++) {
            const sakura = document.createElement('div');
            sakura.className = 'sakura';

            // Kích thước ngẫu nhiên
            const size = Math.random() * 15 + 10;
            sakura.style.width = size + 'px';
            sakura.style.height = size + 'px';

            // Vị trí ngang ngẫu nhiên
            sakura.style.left = Math.random() * 100 + '%';

            // Thời gian rơi và độ trễ ngẫu nhiên giúp hoa rơi tự nhiên hơn
            const duration = Math.random() * 6 + 4;
            sakura.style.animation = `fall ${duration}s linear infinite`;
            sakura.style.animationDelay = Math.random() * 5 + 's';
            sakura.style.transform = `rotate(${Math.random() * 360}deg)`;

            container.appendChild(sakura);
        }
    }
    createSakura();

    // Biến xử lý âm thanh
    const bgMusic = document.getElementById('bg-music');
    const musicControl = document.getElementById('music-control');

    // 2. Xử lý nút "MỞ THIỆP" từ trang chào (Welcome Screen)
    const openBtn = document.getElementById('open-invitation');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');

    if (openBtn) {
        openBtn.addEventListener('click', function () {
            welcomeScreen.classList.add('fade-out');

            // === CODE MỚI THÊM VÀO: Kích hoạt phát nhạc khi nhấn Mở Thiệp ===
            if (bgMusic) {
                bgMusic.play().catch(err => console.log("Trình duyệt chặn autoplay:", err));
            }

            setTimeout(() => {
                welcomeScreen.style.display = 'none';
                mainContent.classList.remove('d-none');
                mainContent.style.animation = 'gentleFloat 1s ease-out';
            }, 1000); // Khớp với thời gian transition trong CSS
        });
    }

    // === CODE MỚI THÊM VÀO: Xử lý khi khách bấm vào nút nhạc ở góc màn hình ===
    if (musicControl) {
        musicControl.addEventListener('click', function () {
            if (bgMusic.paused) {
                bgMusic.play();
                musicControl.classList.remove('paused'); // Xoay lại
            } else {
                bgMusic.pause();
                musicControl.classList.add('paused'); // Dừng xoay
            }
        });
    }

    // 3. Xử lý mở phong bì thư mượt mà
    const envelopeContainer = document.getElementById('envelope-container');
    const openEnvelopeBtn = document.getElementById('open-envelope-btn');

    function toggleEnvelope() {
        if (!envelopeContainer) return;
        envelopeContainer.classList.toggle('is-open');

        // Thêm/bớt class để chữ Happy Wedding bay lên
        if (envelopeContainer.classList.contains('is-open')) {
            mainContent.classList.add('is-open-active');
        } else {
            mainContent.classList.remove('is-open-active');
        }
    }

    if (openEnvelopeBtn) {
        openEnvelopeBtn.addEventListener('click', toggleEnvelope);
    }

    if (envelopeContainer) {
        envelopeContainer.addEventListener('click', function (e) {
            // Ngăn việc click vào trái tim bị tính là 2 lần click (gây lỗi kẹt thư)
            if (!e.target.closest('.envelope-seal')) {
                toggleEnvelope();
            }
        });
    }

    // 4. Xử lý Loading Ảnh (Khắc phục lỗi mất ảnh)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function () {
                this.classList.add('loaded');
            });
        }
    });

    // 5. Hiệu ứng cuộn trang (Scroll Animation) cho các section
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Ngừng theo dõi sau khi đã hiện lên để tối ưu hiệu suất
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(section);
    });

    // 6. Hiệu ứng di chuột (Hover) cho thẻ Profile (Cô dâu/Chú rể)
    const profileCards = document.querySelectorAll('.profile-card');
    profileCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 7. Responsive: Căn chỉnh Timeline (Chương trình lễ) khi thu nhỏ màn hình
    function adjustTimeline() {
        const timelineContainer = document.querySelector('.timeline-container');
        if (!timelineContainer) return;

        if (window.innerWidth <= 768) {
            timelineContainer.style.flexDirection = 'column';
            timelineContainer.style.alignItems = 'center';
        } else {
            timelineContainer.style.flexDirection = 'row';
        }
    }

    adjustTimeline();
    window.addEventListener('resize', adjustTimeline);

    // 8. SỔ LƯU BÚT: KẾT NỐI FIREBASE REALTIME DATABASE
    const firebaseConfig = {
        apiKey: "AIzaSyB0dy5AGucsj9jN2JtJ_b8Xg7Q9YQNaqVo",
        authDomain: "thiepcuoiphucphuong-43bde.firebaseapp.com",
        databaseURL: "https://thiepcuoiphucphuong-43bde-default-rtdb.firebaseio.com",
        projectId: "thiepcuoiphucphuong-43bde",
        storageBucket: "thiepcuoiphucphuong-43bde.firebasestorage.app",
        messagingSenderId: "597636301305",
        appId: "1:597636301305:web:dcd10d63a808288df1bd28",
        measurementId: "G-0MEXQVYR49"
    };


    // Khởi tạo Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();
    const wishesRef = database.ref('wishes');

    // Các thành phần giao diện
    const btnSendWish = document.getElementById('btn-send-wish');
    const guestName = document.getElementById('guestName');
    const guestMessage = document.getElementById('guestMessage');
    const wishList = document.getElementById('wishList');

    // 1. LẤY DỮ LIỆU THỜI GIAN THỰC (Lắng nghe liên tục)
    wishesRef.on('value', (snapshot) => {
        if (!wishList) return;
        wishList.innerHTML = ''; // Xóa sạch danh sách cũ

        const data = snapshot.val();

        if (!data) {
            wishList.innerHTML = '<p class="text-center text-muted">Chưa có lời chúc nào. Hãy là người đầu tiên! 🌸</p>';
            return;
        }

        // Biến Object thành Mảng và đảo ngược để lời chúc mới nhất nổi lên đầu
        const wishesArray = Object.values(data).reverse();

        wishesArray.forEach(item => {
            const wishHTML = `
                <div class="wish-item text-start">
                    <div class="wish-header d-flex justify-content-between">
                        <span class="wish-name">${item.name}</span>
                        <span class="wish-time">${item.time}</span>
                    </div>
                    <p class="wish-content">${item.message}</p>
                </div>
            `;
            wishList.innerHTML += wishHTML;
        });
    });

    // 2. GỬI LỜI CHÚC LÊN DATABASE
    if (btnSendWish) {
        btnSendWish.addEventListener('click', function () {
            const nameVal = guestName.value.trim();
            const msgVal = guestMessage.value.trim();

            if (nameVal === '' || msgVal === '') {
                alert('Vui lòng nhập đầy đủ tên và lời chúc nhé!');
                return;
            }

            // Đổi trạng thái nút
            const originalBtnText = btnSendWish.innerHTML;
            btnSendWish.innerHTML = 'ĐANG GỬI... ⏳';
            btnSendWish.disabled = true;

            // Lấy thời gian hiện tại
            const now = new Date();
            const timeString = now.toLocaleTimeString('vi-VN', { hour12: false });
            const dateString = now.toLocaleDateString('vi-VN');
            const fullDateTime = `${timeString} ${dateString}`;

            // Đẩy dữ liệu lên Firebase
            wishesRef.push({
                name: nameVal,
                message: msgVal,
                time: fullDateTime,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            }).then(() => {
                // Thành công
                guestName.value = '';
                guestMessage.value = '';
                alert('Cảm ơn bạn đã gửi lời chúc tốt đẹp!');
            }).catch((error) => {
                // Thất bại
                alert('Có lỗi xảy ra: ' + error.message);
            }).finally(() => {
                // Trả lại trạng thái nút
                btnSendWish.innerHTML = originalBtnText;
                btnSendWish.disabled = false;
            });
        });
    }
    // 9. Xử lý mở/đóng Popup Lì Xì
    const openBankModalBtn = document.getElementById('open-bank-modal');
    const closeBankModalBtn = document.getElementById('close-bank-modal');
    const bankModalOverlay = document.getElementById('bank-modal');

    if (openBankModalBtn && bankModalOverlay && closeBankModalBtn) {
        // Mở popup
        openBankModalBtn.addEventListener('click', function () {
            bankModalOverlay.classList.add('show');
        });

        // Đóng popup khi bấm nút X
        closeBankModalBtn.addEventListener('click', function () {
            bankModalOverlay.classList.remove('show');
        });

        // Đóng popup khi click ra ngoài vùng xám
        bankModalOverlay.addEventListener('click', function (e) {
            if (e.target === bankModalOverlay) {
                bankModalOverlay.classList.remove('show');
            }
        });
    }

    // Hàm copy số tài khoản
    window.copySTK = function () {
        const stk = document.getElementById('stk').innerText;
        navigator.clipboard.writeText(stk).then(() => {
            alert("Đã sao chép số tài khoản: " + stk + "\nCảm ơn tấm lòng của bạn! ❤️");
        }).catch(err => {
            console.error('Không thể sao chép', err);
        });
    }
});