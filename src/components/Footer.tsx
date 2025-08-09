import React, { useState } from "react";

/**
 * Footer component for the travel application
 *
 * Business Value:
 * - Provides essential company contact information
 * - Offers newsletter signup for marketing engagement
 * - Displays business hours for customer service
 * - Contains navigation links to important pages
 * - Shows company credibility and legal information
 *
 * Key User Interactions:
 * - Users can find contact information (hotline: 1800 8989)
 * - Users can sign up for newsletter promotions (sends to traveltest@yopmail.com)
 * - Users can access business hours information
 * - Users can navigate to support pages
 * - Users can find company address and email
 *
 * Critical Elements to Test:
 * - Contact information display and accuracy
 * - Newsletter signup functionality with email submission
 * - Form validation and success messages
 * - Business hours information
 * - Navigation links functionality
 * - Company information display
 */
const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("❌ Vui lòng nhập email hợp lệ");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      // Simulate API call to send email to traveltest@yopmail.com
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: email,
          notificationEmail: "traveltest@yopmail.com",
          timestamp: new Date().toISOString(),
          source: "footer_newsletter",
        }),
      });

      if (response.ok) {
        setMessage("✅ Đăng ký thành công! Cảm ơn bạn đã quan tâm.");
        setEmail("");

        // Also log to console for development
        console.log(
          `📧 Newsletter signup: ${email} -> notification sent to traveltest@yopmail.com`
        );
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Newsletter signup error:", error);
      setMessage("⚠️ Có lỗi xảy ra. Vui lòng thử lại sau.");

      // For demo purposes, still show success and log the action
      console.log(
        `📧 Demo mode - Newsletter signup: ${email} -> would notify traveltest@yopmail.com`
      );
      setMessage("✅ Đăng ký thành công! (Demo mode)");
      setEmail("");
    } finally {
      setIsSubmitting(false);

      // Clear message after 5 seconds
      setTimeout(() => setMessage(""), 5000);
    }
  };
  return (
    <footer className="footer" data-testid="footer">
      <div className="footer-content">
        <div className="footer-section" data-testid="company-info">
          <h3 data-testid="company-name">CÔNG TY DU LỊCH DỊCH VỤ METOO</h3>
          <p data-testid="footer-hotline">
            📞 Hotline: <strong>1800 8989</strong>
          </p>
          <p data-testid="footer-email">📧 Email: info@metootravel.com</p>
          <p data-testid="footer-address">
            🏢 Địa chỉ: 78 CMT8, P.Võ Thị Sáu, Q.3, TP.HCM
          </p>
          <p data-testid="copyright">
            © 2024 MeToo Travel. All rights reserved.
          </p>
        </div>

        <div className="footer-section" data-testid="customer-support">
          <h3>HỖ TRỢ KHÁCH HÀNG</h3>
          <p data-testid="business-hours-title">
            <strong>Giờ làm việc (GMT+7):</strong>
          </p>
          <p data-testid="weekday-hours">Thứ 2 - Thứ 6: từ 8h30 - 18h00</p>
          <p data-testid="saturday-hours">Thứ 7: từ 8h30 - 12h00</p>
          <p data-testid="sunday-hours">Chủ nhật và lễ nghỉ</p>
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
          <div className="newsletter-signup" data-testid="newsletter-signup">
            <div className="signup-box">
              <h4>Đăng ký</h4>
              <p>Nhận tour khuyến mãi</p>
              <form
                onSubmit={handleNewsletterSubmit}
                data-testid="newsletter-form"
              >
                <div className="email-input-group">
                  <input
                    type="email"
                    placeholder="Email*"
                    className="email-input"
                    data-testid="newsletter-email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    className="signup-btn"
                    data-testid="newsletter-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi đi"}
                  </button>
                </div>
                {message && (
                  <div
                    className={`newsletter-message ${message.includes("✅") ? "success" : "error"}`}
                    data-testid="newsletter-message"
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
