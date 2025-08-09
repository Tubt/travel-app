import React from "react";

// Components
import { BannerSlider, Sidebar, TravelMenu } from "../components";

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
          <div className="page-content">
            <div className="page-header">
              <h1>🌟 Giới Thiệu</h1>
              <p>Về DULICHMETOO - Đơn vị tổ chức tour chuyên nghiệp</p>
            </div>

            <div className="about-content">
              <div className="about-section">
                <h2>📖 Câu chuyện của chúng tôi</h2>
                <p>
                  DULICHMETOO được thành lập với sứ mệnh mang đến những trải
                  nghiệm du lịch tuyệt vời nhất cho mọi khách hàng. Với hơn 10
                  năm kinh nghiệm trong ngành du lịch, chúng tôi tự hào là đối
                  tác tin cậy của hàng nghìn du khách.
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
                <div className="achievements">
                  <div className="achievement-item">
                    <h3>10,000+</h3>
                    <p>Khách hàng hài lòng</p>
                  </div>
                  <div className="achievement-item">
                    <h3>500+</h3>
                    <p>Tour được tổ chức</p>
                  </div>
                  <div className="achievement-item">
                    <h3>50+</h3>
                    <p>Điểm đến trong nước</p>
                  </div>
                  <div className="achievement-item">
                    <h3>15+</h3>
                    <p>Quốc gia đối tác</p>
                  </div>
                </div>
              </div>

              <div className="about-section">
                <h2>📞 Liên hệ</h2>
                <div className="contact-info">
                  <p>
                    <strong>📍 Địa chỉ:</strong> 78 CMT8, P.Võ Thị Sáu, Q.3,
                    TP.HCM
                  </p>
                  <p>
                    <strong>📞 Hotline:</strong> 1800 8989
                  </p>
                  <p>
                    <strong>📧 Email:</strong> info@metootravel.com
                  </p>
                  <p>
                    <strong>🌐 Website:</strong> www.dulichmetoo.com.vn
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
