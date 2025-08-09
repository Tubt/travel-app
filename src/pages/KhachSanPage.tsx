import React from "react";

// Components
import { BannerSlider, Sidebar, TravelMenu } from "../components";

/**
 * KhachSanPage component - Hotels listing and booking page
 *
 * Features:
 * - Hotel search functionality
 * - Filter by star rating and price range
 * - Hotel cards with amenities and pricing
 * - Professional hotel information display
 * - Search and booking interface
 */
const KhachSanPage: React.FC = () => {
  return (
    <>
      {/* Main Layout with Sidebars */}
      <div className="main-layout" data-testid="hotels-page-layout">
        <Sidebar position="left" title="Hà Giang" subtitle="Ruộng bậc thang" />

        <div className="main-content" data-testid="hotels-page-content">
          <BannerSlider />

          {/* Travel Menu Navigation */}
          <TravelMenu />

          {/* Page Content */}
          <div className="page-content" data-testid="hotels-main-content">
            <div className="page-header" data-testid="hotels-page-header">
              <h1 data-testid="hotels-page-title">🏨 Khách Sạn</h1>
              <p data-testid="hotels-page-subtitle">
                Tìm khách sạn phù hợp cho chuyến đi của bạn
              </p>
            </div>

            <div className="hotel-search" data-testid="hotels-search-section">
              <div
                className="search-filters"
                data-testid="hotels-search-filters"
              >
                <input
                  type="text"
                  placeholder="Điểm đến hoặc tên khách sạn"
                  className="search-input"
                  data-testid="hotels-search-input"
                />
                <select
                  className="filter-select"
                  data-testid="hotels-filter-stars"
                >
                  <option>Số sao</option>
                  <option>5 sao</option>
                  <option>4 sao</option>
                  <option>3 sao</option>
                </select>
                <select
                  className="filter-select"
                  data-testid="hotels-filter-price"
                >
                  <option>Giá phòng</option>
                  <option>Dưới 1 triệu</option>
                  <option>1-2 triệu</option>
                  <option>Trên 2 triệu</option>
                </select>
                <button
                  className="search-btn-main"
                  data-testid="hotels-search-btn"
                >
                  Tìm kiếm
                </button>
              </div>
            </div>

            <div className="hotels-grid" data-testid="hotels-grid">
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
