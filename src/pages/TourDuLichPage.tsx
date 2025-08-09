import React, { useState } from "react";

// Components
import { BannerSlider, Sidebar, TravelMenu } from "../components";

/**
 * TourDuLichPage component - Tours listing and information page
 *
 * Features:
 * - Comprehensive tour listings by region
 * - Tour cards with pricing and highlights
 * - Regional categorization (North, Central, South)
 * - Interactive tour browsing with filters
 * - Professional tour information display
 * - Price range filtering and regional selection
 */
const TourDuLichPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const handleRegionFilter = (region: string) => {
    setSelectedRegion(region);
  };

  const handlePriceFilter = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setSelectedRegion("all");
    setSelectedPriceRange("all");
  };
  return (
    <>
      {/* Main Layout with Sidebars */}
      <div className="main-layout" data-testid="tours-page-layout">
        <Sidebar position="left" title="Hà Giang" subtitle="Ruộng bậc thang" />

        <div className="main-content" data-testid="tours-page-content">
          <BannerSlider />

          {/* Travel Menu Navigation */}
          <TravelMenu />

          {/* Page Content */}
          <div className="page-content" data-testid="tours-main-content">
            <div className="page-header" data-testid="tours-page-header">
              <h1 data-testid="tours-page-title">🎒 Tour Du Lịch</h1>
              <p data-testid="tours-page-subtitle">
                Khám phá những tour du lịch hấp dẫn nhất
              </p>

              {/* Interactive Filter Controls */}
              <div className="tour-filters" data-testid="tour-filters">
                <button
                  onClick={toggleFilters}
                  className="filter-toggle-btn"
                  data-testid="filter-toggle-btn"
                >
                  {showFilters ? "Ẩn bộ lọc" : "Hiện bộ lọc"} 🔽
                </button>

                {showFilters && (
                  <div
                    className="filter-controls"
                    data-testid="filter-controls"
                  >
                    <div
                      className="filter-group"
                      data-testid="region-filter-group"
                    >
                      <label>Vùng miền:</label>
                      <div className="filter-buttons">
                        <button
                          onClick={() => handleRegionFilter("all")}
                          className={`filter-btn ${selectedRegion === "all" ? "active" : ""}`}
                          data-testid="filter-region-all"
                        >
                          Tất cả
                        </button>
                        <button
                          onClick={() => handleRegionFilter("north")}
                          className={`filter-btn ${selectedRegion === "north" ? "active" : ""}`}
                          data-testid="filter-region-north"
                        >
                          Miền Bắc
                        </button>
                        <button
                          onClick={() => handleRegionFilter("central")}
                          className={`filter-btn ${selectedRegion === "central" ? "active" : ""}`}
                          data-testid="filter-region-central"
                        >
                          Miền Trung
                        </button>
                        <button
                          onClick={() => handleRegionFilter("south")}
                          className={`filter-btn ${selectedRegion === "south" ? "active" : ""}`}
                          data-testid="filter-region-south"
                        >
                          Miền Nam
                        </button>
                      </div>
                    </div>

                    <div
                      className="filter-group"
                      data-testid="price-filter-group"
                    >
                      <label>Giá tour:</label>
                      <div className="filter-buttons">
                        <button
                          onClick={() => handlePriceFilter("all")}
                          className={`filter-btn ${selectedPriceRange === "all" ? "active" : ""}`}
                          data-testid="filter-price-all"
                        >
                          Tất cả
                        </button>
                        <button
                          onClick={() => handlePriceFilter("budget")}
                          className={`filter-btn ${selectedPriceRange === "budget" ? "active" : ""}`}
                          data-testid="filter-price-budget"
                        >
                          Dưới 2tr
                        </button>
                        <button
                          onClick={() => handlePriceFilter("mid")}
                          className={`filter-btn ${selectedPriceRange === "mid" ? "active" : ""}`}
                          data-testid="filter-price-mid"
                        >
                          2tr - 3tr
                        </button>
                        <button
                          onClick={() => handlePriceFilter("premium")}
                          className={`filter-btn ${selectedPriceRange === "premium" ? "active" : ""}`}
                          data-testid="filter-price-premium"
                        >
                          Trên 3tr
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={resetFilters}
                      className="reset-filters-btn"
                      data-testid="reset-filters-btn"
                    >
                      Đặt lại bộ lọc
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="tours-grid" data-testid="tours-grid">
              {(selectedRegion === "all" || selectedRegion === "north") && (
                <div
                  className="tour-category"
                  data-testid="tours-north-category"
                >
                  <h2 data-testid="tours-north-title">🌄 Tour Miền Bắc</h2>
                  <div className="tour-cards">
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=1"
                          alt="Hạ Long Bay"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Hà Nội - Sapa - Hạ Long</h3>
                        <p>3 ngày 2 đêm • ⭐⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🏔️ Ruộng bậc thang • 🚢 Vịnh Hạ Long
                        </div>
                        <div className="price">2.999.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=2"
                          alt="Hà Giang"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Hà Giang - Đồng Văn</h3>
                        <p>4 ngày 3 đêm • ⭐⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🛵 Motorbike tour • 🗻 Cao nguyên đá
                        </div>
                        <div className="price">3.599.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=3"
                          alt="Ninh Bình"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Ninh Bình - Tràng An - Bái Đính</h3>
                        <p>2 ngày 1 đêm • ⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🚣 Tràng An • 🏛️ Chùa Bái Đính
                        </div>
                        <div className="price">1.599.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=4"
                          alt="Mai Châu"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Mai Châu - Mộc Châu - Sơn La</h3>
                        <p>3 ngày 2 đêm • ⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🏡 Homestay • 🌸 Mùa hoa mận
                        </div>
                        <div className="price">2.299.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=5"
                          alt="Bản Giốc"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Cao Bằng - Bản Giốc - Pác Bó</h3>
                        <p>3 ngày 2 đêm • ⭐⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          💧 Thác Bản Giốc • 🏛️ Động Ngườm Ngao
                        </div>
                        <div className="price">2.799.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=6"
                          alt="Bắc Hà"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Lào Cai - Bắc Hà - Cốc Ly</h3>
                        <p>2 ngày 1 đêm • ⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🎪 Chợ phiên • 🌾 Ruộng bậc thang
                        </div>
                        <div className="price">1.899.000 VNĐ</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {(selectedRegion === "all" || selectedRegion === "central") && (
                <div
                  className="tour-category"
                  data-testid="tours-central-category"
                >
                  <h2 data-testid="tours-central-title">🏖️ Tour Miền Trung</h2>
                  <div className="tour-cards">
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=7"
                          alt="Hội An"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Đà Nẵng - Hội An</h3>
                        <p>3 ngày 2 đêm • ⭐⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🏮 Phố cổ Hội An • 🏖️ Bãi biển Mỹ Khê
                        </div>
                        <div className="price">2.799.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=8"
                          alt="Huế"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Huế - Phong Nha</h3>
                        <p>4 ngày 3 đêm • ⭐⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🏰 Đại nội Huế • 🕳️ Động Phong Nha
                        </div>
                        <div className="price">3.299.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=9"
                          alt="Quy Nhon"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Quy Nhon - Phú Yên</h3>
                        <p>3 ngày 2 đêm • ⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🏖️ Bãi Xép • 🌊 Gành Đá Đĩa
                        </div>
                        <div className="price">2.399.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=10"
                          alt="Nha Trang"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Nha Trang - Đà Lạt</h3>
                        <p>4 ngày 3 đêm • ⭐⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🏖️ Biển Nha Trang • 🌸 Thành phố ngàn hoa
                        </div>
                        <div className="price">3.199.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=11"
                          alt="Mỹ Sơn"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Hội An - Mỹ Sơn - Bà Nà</h3>
                        <p>2 ngày 1 đêm • ⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🏛️ Thánh địa Mỹ Sơn • 🌉 Cầu Vàng
                        </div>
                        <div className="price">1.999.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=12"
                          alt="Phong Nha"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Quảng Bình - Động Thiên Đường</h3>
                        <p>3 ngày 2 đêm • ⭐⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🕳️ Động Thiên Đường • 🏞️ Vườn Quốc gia
                        </div>
                        <div className="price">2.599.000 VNĐ</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {(selectedRegion === "all" || selectedRegion === "south") && (
                <div
                  className="tour-category"
                  data-testid="tours-south-category"
                >
                  <h2 data-testid="tours-south-title">🌴 Tour Miền Nam</h2>
                  <div className="tour-cards">
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=13"
                          alt="Đà Lạt"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>TP.HCM - Đà Lạt</h3>
                        <p>3 ngày 2 đêm • ⭐⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🌸 Thành phố ngàn hoa • ☁️ Khí hậu mát mẻ
                        </div>
                        <div className="price">2.599.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=14"
                          alt="Cần Thơ"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Cần Thơ - Châu Đốc</h3>
                        <p>2 ngày 1 đêm • ⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🛶 Chợ nổi • 🌾 Miệt vườn
                        </div>
                        <div className="price">1.899.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://picsum.photos/400/250?random=15"
                          alt="Phú Quốc"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Phú Quốc - Nam Du</h3>
                        <p>3 ngày 2 đêm • ⭐⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🏝️ Đảo ngọc • 🐠 Lặn ngắm san hô
                        </div>
                        <div className="price">3.299.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=400&h=250&fit=crop&crop=center"
                          alt="Côn Đảo"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Vũng Tàu - Côn Đảo</h3>
                        <p>3 ngày 2 đêm • ⭐⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🏝️ Đảo hoang sơ • 🏛️ Di tích lịch sử
                        </div>
                        <div className="price">2.999.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=250&fit=crop&crop=center"
                          alt="Mekong Delta"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Mỹ Tho - Bến Tre - Cần Thơ</h3>
                        <p>2 ngày 1 đêm • ⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          🛶 Du thuyền sông • 🥥 Vườn dừa Bến Tre
                        </div>
                        <div className="price">1.699.000 VNĐ</div>
                      </div>
                    </div>
                    <div className="tour-card">
                      <div className="tour-image">
                        <img
                          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center"
                          alt="Tây Ninh"
                        />
                      </div>
                      <div className="tour-content">
                        <h3>Tây Ninh - Châu Đốc - Hà Tiên</h3>
                        <p>3 ngày 2 đêm • ⭐⭐⭐⭐</p>
                        <div className="tour-highlights">
                          ⛰️ Núi Bà Đen • 🏛️ Tòa Thánh Tây Ninh
                        </div>
                        <div className="price">2.199.000 VNĐ</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <Sidebar position="right" title="Sapa" subtitle="Thị trấn trong mây" />
      </div>
    </>
  );
};

export default TourDuLichPage;
