import React from "react";

// Components
import { BannerSlider, Sidebar, TravelMenu } from "../components";

/**
 * About Us page component for the travel application
 *
 * Business Value:
 * - Builds trust with customers by showcasing company information
 * - Displays contact information for customer inquiries
 * - Shows achievements and credibility metrics
 * - Presents company values and mission
 *
 * Key User Interactions:
 * - Users can read company story and values
 * - Users can view contact information and business hours
 * - Users can see achievement statistics
 * - Users access company's mission and vision
 *
 * Critical Elements to Test:
 * - Contact information display (hotline: 1800 8989)
 * - Achievement metrics display (10,000+ customers, etc.)
 * - Company information sections visibility
 * - Navigation back to other pages
 */
const GioiThieuPage: React.FC = () => {
  return (
    <>
      {/* Main Layout with Sidebars */}
      <div className="main-layout">
        <Sidebar position="left" title="Hà Giang" subtitle="Ruộng bậc thang" />

        <div className="main-content">
          <BannerSlider />

          {/* Travel Menu Navigation */}
          <TravelMenu />

          {/* Page Content */}
          <div className="page-content" data-testid="about-page-content">
            <div className="page-header" data-testid="about-page-header">
              <h1 data-testid="about-page-title">🌟 Giới Thiệu</h1>
              <p data-testid="about-page-subtitle">
                Về DULICHVIETNAM - Đơn vị tổ chức tour chuyên nghiệp
              </p>
            </div>

            <div className="about-content">
              <div className="about-section">
                <h2>📖 Câu chuyện của chúng tôi</h2>
                <p>
                  DULICHVIETNAM được thành lập với sứ mệnh mang đến những trải
                  nghiệm du lịch tuyệt vời nhất cho mọi khách hàng. Với hơn 10
                  năm kinh nghiệm trong ngành du lịch, chúng tôi tự hào là đối
                  tác tin cậy của hàng nghìn du khách
                </p>
              </div>

              <div className="about-section">
                <h2>🎯 Tầm nhìn & Sứ mệnh</h2>
                <div className="vision-mission">
                  <div className="vision">
                    <h3>👁️ Tầm nhìn</h3>
                    <p>
                      Trở thành công ty du lịch hàng đầu Việt Nam, mang đến
                      những chuyến đi đáng nhớ và an toàn cho mọi khách hàng.
                    </p>
                  </div>
                  <div className="mission">
                    <h3>🚀 Sứ mệnh</h3>
                    <p>
                      Cung cấp dịch vụ du lịch chất lượng cao với giá cả hợp lý,
                      đồng thời quảng bá vẻ đẹp Việt Nam đến du khách trong và
                      ngoài nước.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-section">
                <h2>⭐ Giá trị cốt lõi</h2>
                <div className="core-values">
                  <div className="value-item">
                    <h3>🔒 An toàn</h3>
                    <p>
                      Đảm bảo an toàn tuyệt đối cho mọi khách hàng trong suốt
                      hành trình
                    </p>
                  </div>
                  <div className="value-item">
                    <h3>💎 Chất lượng</h3>
                    <p>
                      Cam kết cung cấp dịch vụ chất lượng cao với đội ngũ chuyên
                      nghiệp
                    </p>
                  </div>
                  <div className="value-item">
                    <h3>❤️ Tận tâm</h3>
                    <p>Phục vụ khách hàng với sự tận tâm và nhiệt huyết</p>
                  </div>
                  <div className="value-item">
                    <h3>🤝 Tin cậy</h3>
                    <p>Xây dựng mối quan hệ lâu dài dựa trên sự tin cậy</p>
                  </div>
                </div>
              </div>

              <div className="about-section">
                <h2>🏆 Thành tựu</h2>
                <div
                  className="achievements"
                  data-testid="company-achievements"
                >
                  <div
                    className="achievement-item"
                    data-testid="customers-achievement"
                  >
                    <h3 data-testid="customers-count">10,000+</h3>
                    <p>Khách hàng hài lòng</p>
                  </div>
                  <div
                    className="achievement-item"
                    data-testid="tours-achievement"
                  >
                    <h3 data-testid="tours-count">500+</h3>
                    <p>Tour được tổ chức</p>
                  </div>
                  <div
                    className="achievement-item"
                    data-testid="destinations-achievement"
                  >
                    <h3 data-testid="destinations-count">50+</h3>
                    <p>Điểm đến trong nước</p>
                  </div>
                  <div
                    className="achievement-item"
                    data-testid="countries-achievement"
                  >
                    <h3 data-testid="countries-count">15+</h3>
                    <p>Quốc gia đối tác</p>
                  </div>
                </div>
              </div>

              <div className="about-section" data-testid="contact-section">
                <h2>📞 Liên hệ</h2>
                <div className="contact-info" data-testid="contact-info">
                  <p data-testid="company-address">
                    <strong>📍 Địa chỉ:</strong> 78 CMT8, P.Võ Thị Sáu, Q.3,
                    TP.HCM
                  </p>
                  <p data-testid="company-hotline">
                    <strong>📞 Hotline:</strong> 1800 8989
                  </p>
                  <p data-testid="company-email">
                    <strong>📧 Email:</strong> info@metootravel.com
                  </p>
                  <p data-testid="company-website">
                    <strong>🌐 Website:</strong> www.DULICHVIETNAM.com.vn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Sidebar position="right" title="Sapa" subtitle="Thị trấn trong mây" />
      </div>
    </>
  );
};

export default GioiThieuPage;
