import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CÔNG TY DU LỊCH DỊCH VỤ METOO</h3>
          <p>
            📞 Hotline: <strong>0909009009</strong>
          </p>
          <p>📧 Email: info@metootravel.com</p>
          <p>🏢 Địa chỉ: 78 CMT8, P.Võ Thị Sáu, Q.3, TP.HCM</p>
          <p>© 2024 MeToo Travel. All rights reserved.</p>
        </div>

        <div className="footer-section">
          <h3>HỖ TRỢ KHÁCH HÀNG</h3>
          <p>
            <strong>Giờ làm việc (GMT+7):</strong>
          </p>
          <p>Thứ 2 - Thứ 6: từ 8h30 - 18h00</p>
          <p>Thứ 7: từ 8h30 - 12h00</p>
          <p>Chủ nhật và lễ nghỉ</p>
        </div>

        <div className="footer-section">
          <h3>THÔNG TIN CẦN BIẾT</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Hướng dẫn đặt tour</a>
            </li>
            <li>
              <a href="#">Hướng dẫn thanh toán</a>
            </li>
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>DỊCH VỤ</h3>
          <ul className="footer-links">
            <li>
              <a href="#">Tin tức du lịch</a>
            </li>
            <li>
              <a href="#">Vé máy bay</a>
            </li>
            <li>
              <a href="#">Khách sạn</a>
            </li>
            <li>
              <a href="#">Thuê xe</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>DU LỊCH THÔNG MINH</h3>
          <p>
            Đăng ký nhận tin để lên kế hoạch cho kỳ nghỉ sắp tới ngay từ bây giờ
          </p>
          <div className="newsletter-signup">
            <div className="signup-box">
              <h4>Đăng ký</h4>
              <p>Nhận tour khuyến mãi</p>
              <div className="email-input-group">
                <input
                  type="email"
                  placeholder="Email*"
                  className="email-input"
                />
                <button className="signup-btn">Gửi đi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
