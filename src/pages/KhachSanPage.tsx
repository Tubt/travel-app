import React from "react";

// Components
import { BannerSlider, Sidebar, TravelMenu } from "../components";

const KhachSanPage: React.FC = () => {
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
              <h1>🏨 Khách Sạn</h1>
              <p>Tìm khách sạn phù hợp cho chuyến đi của bạn</p>
            </div>

            <div className="hotel-search">
              <div className="search-filters">
                <input
                  type="text"
                  placeholder="Điểm đến hoặc tên khách sạn"
                  className="search-input"
                />
                <select className="filter-select">
                  <option>Số sao</option>
                  <option>5 sao</option>
                  <option>4 sao</option>
                  <option>3 sao</option>
                </select>
                <select className="filter-select">
                  <option>Giá phòng</option>
                  <option>Dưới 1 triệu</option>
                  <option>1-2 triệu</option>
                  <option>Trên 2 triệu</option>
                </select>
                <button className="search-btn-main">Tìm kiếm</button>
              </div>
            </div>

            <div className="hotels-grid">
              <div className="hotel-card">
                <h3>🏨 Khách sạn Lotte Hà Nội</h3>
                <p>⭐⭐⭐⭐⭐ • Ba Đình, Hà Nội</p>
                <div className="price">2.500.000 VNĐ/đêm</div>
                <div className="amenities">WiFi • Spa • Hồ bơi • Gym</div>
              </div>

              <div className="hotel-card">
                <h3>🏨 Hotel de l'Opera Hanoi</h3>
                <p>⭐⭐⭐⭐⭐ • Hoàn Kiếm, Hà Nội</p>
                <div className="price">1.800.000 VNĐ/đêm</div>
                <div className="amenities">WiFi • Spa • Nhà hàng • Bar</div>
              </div>

              <div className="hotel-card">
                <h3>🏨 InterContinental Đà Nẵng</h3>
                <p>⭐⭐⭐⭐⭐ • Sơn Trà, Đà Nẵng</p>
                <div className="price">3.200.000 VNĐ/đêm</div>
                <div className="amenities">
                  WiFi • Spa • Hồ bơi • Bãi biển riêng
                </div>
              </div>

              <div className="hotel-card">
                <h3>🏨 Rex Hotel Sài Gòn</h3>
                <p>⭐⭐⭐⭐ • Quận 1, TP.HCM</p>
                <div className="price">1.600.000 VNĐ/đêm</div>
                <div className="amenities">WiFi • Hồ bơi • Gym • Nhà hàng</div>
              </div>
            </div>
          </div>
        </div>

        <Sidebar position="right" title="Sapa" subtitle="Thị trấn trong mây" />
      </div>
    </>
  );
};

export default KhachSanPage;
