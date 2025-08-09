import React from "react";

// Components
import { BannerSlider, Sidebar, TravelMenu } from "../components";

/**
 * SoTayDuLichPage component - Travel handbook and tips page
 *
 * Features:
 * - Comprehensive travel tips and guides
 * - Categorized travel advice (packing, budget, photography, etc.)
 * - Professional travel information
 * - Interactive tip cards with detailed content
 * - Essential travel knowledge base
 */
const SoTayDuLichPage: React.FC = () => {
  return (
    <>
      {/* Main Layout with Sidebars */}
      <div className="main-layout" data-testid="handbook-page-layout">
        <Sidebar position="left" title="Hà Giang" subtitle="Ruộng bậc thang" />

        <div className="main-content" data-testid="handbook-page-content">
          <BannerSlider />

          {/* Travel Menu Navigation */}
          <TravelMenu />

          {/* Page Content */}
          <div className="page-content" data-testid="handbook-main-content">
            <div className="page-header" data-testid="handbook-page-header">
              <h1 data-testid="handbook-page-title">📖 Sổ Tay Du Lịch</h1>
              <p data-testid="handbook-page-subtitle">
                Kinh nghiệm và bí quyết cho chuyến đi hoàn hảo
              </p>
            </div>

            <div className="travel-tips-grid" data-testid="handbook-tips-grid">
              <div className="tip-category">
                <h2>🎒 Chuẩn bị hành lý</h2>
                <div className="tip-cards">
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=101"
                        alt="Hành lý du lịch"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>📋 Checklist đồ cần mang</h3>
                      <p>
                        <span className="tip-icon">📄</span>
                        <strong>Giấy tờ:</strong> CMND/Căn cước, passport, visa,
                        vé máy bay
                        <br />
                        <span className="tip-icon">👕</span>
                        <strong>Quần áo:</strong> Theo thời tiết, đồ mưa, áo
                        khoác, giày thoải mái
                        <br />
                        <span className="tip-icon">💊</span>
                        <strong>Thuốc men:</strong> Thuốc cảm, đau bụng, băng
                        gạc, kem chống nắng
                        <br />
                        <span className="tip-icon">📱</span>
                        <strong>Điện tử:</strong> Điện thoại, sạc dự phòng,
                        camera, adapter
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=102"
                        alt="Xếp hành lý"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🎯 Cách xếp đồ thông minh</h3>
                      <p>
                        <span className="tip-icon">🌀</span>
                        <strong>Cuộn quần áo:</strong> Tiết kiệm 30% không gian
                        thay vì gấp
                        <br />
                        <span className="tip-icon">📦</span>
                        <strong>Túi zip:</strong> Phân loại đồ đạc theo từng túi
                        riêng biệt
                        <br />
                        <span className="tip-icon">⚖️</span>
                        <strong>Đồ nặng ở dưới:</strong> Giày, mỹ phẩm ở đáy
                        vali để cân bằng
                        <br />
                        <span className="tip-icon">🛡️</span>
                        <strong>Đồ dễ vỡ:</strong> Bọc trong quần áo để bảo vệ
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=106"
                        alt="Hành lý xách tay"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>✈️ Hành lý xách tay</h3>
                      <p>
                        <span className="tip-icon">🎯</span>
                        <strong>Không thể thiếu:</strong> Giấy tờ tùy thân, tiền
                        mặt, thẻ ATM, thuốc quan trọng
                        <br />
                        <span className="tip-icon">🎵</span>
                        <strong>Giải trí:</strong> Tai nghe, sách, máy tính bảng
                        cho chuyến bay dài
                        <br />
                        <span className="tip-icon">💧</span>
                        <strong>Chăm sóc:</strong> Kem dưỡng ẩm, son dưỡng môi
                        (máy bay làm khô da)
                        <br />
                        <span className="tip-icon">⚠️</span>
                        <strong>Lưu ý:</strong> Chất lỏng ≤100ml, pin dự phòng
                        ≤20,000mAh
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=107"
                        alt="Hành lý theo mùa"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🌦️ Hành lý theo mùa</h3>
                      <p>
                        <span className="tip-icon">☀️</span>
                        <strong>Mùa hè:</strong> Quần áo mỏng, mũ nón, kính râm,
                        kem chống nắng SPF50+
                        <br />
                        <span className="tip-icon">❄️</span>
                        <strong>Mùa đông:</strong> Áo ấm, găng tay, khăn quàng,
                        giày cao cổ chống trượt
                        <br />
                        <span className="tip-icon">🌧️</span>
                        <strong>Mùa mưa:</strong> Áo mưa, ô dù, túi chống nước
                        cho điện thoại
                        <br />
                        <span className="tip-icon">🏖️</span>
                        <strong>Biển/núi:</strong> Đồ bơi/đồ trekking, giày
                        chuyên dụng
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tip-category">
                <h2>💰 Ngân sách du lịch</h2>
                <div className="tip-cards">
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=103"
                        alt="Ngân sách du lịch"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>💰 Lập kế hoạch chi tiêu</h3>
                      <div className="budget-breakdown">
                        <div className="budget-item">
                          <span className="budget-icon">✈️</span>
                          <span className="budget-label">Di chuyển</span>
                          <span className="budget-percent">30-40%</span>
                        </div>
                        <div className="budget-item">
                          <span className="budget-icon">🏨</span>
                          <span className="budget-label">Lưu trú</span>
                          <span className="budget-percent">25-35%</span>
                        </div>
                        <div className="budget-item">
                          <span className="budget-icon">🍜</span>
                          <span className="budget-label">Ăn uống</span>
                          <span className="budget-percent">20-25%</span>
                        </div>
                        <div className="budget-item">
                          <span className="budget-icon">🎪</span>
                          <span className="budget-label">Tham quan</span>
                          <span className="budget-percent">10-15%</span>
                        </div>
                        <div className="budget-item">
                          <span className="budget-icon">🆘</span>
                          <span className="budget-label">Dự phòng</span>
                          <span className="budget-percent">5-10%</span>
                        </div>
                      </div>
                      <div className="tip-note">
                        💡 <strong>Mẹo:</strong> Ghi chép chi tiêu hàng ngày để
                        kiểm soát ngân sách
                      </div>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=108"
                        alt="Tiết kiệm chi phí"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>💸 Tiết kiệm chi phí</h3>
                      <p>
                        <span className="tip-icon">✈️</span>
                        <strong>Vé máy bay:</strong> Book sớm 2-3 tháng, bay
                        giữa tuần, dùng tích điểm
                        <br />
                        <span className="tip-icon">🏠</span>
                        <strong>Lưu trú:</strong> Hostel, homestay, Airbnb; book
                        direct với khách sạn
                        <br />
                        <span className="tip-icon">🍜</span>
                        <strong>Ăn uống:</strong> Street food, chợ địa phương,
                        tự nấu (nếu có bếp)
                        <br />
                        <span className="tip-icon">🚌</span>
                        <strong>Di chuyển:</strong> Xe bus, grab, thuê xe máy
                        dài hạn thay taxi
                        <br />
                        <span className="tip-icon">🎪</span>
                        <strong>Tham quan:</strong> Free walking tours, công
                        viên công cộng
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=109"
                        alt="Quản lý tiền bạc"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>💳 Quản lý tiền bạc</h3>
                      <div className="money-tips">
                        <div className="money-item">
                          <span className="money-icon">💳</span>
                          <strong>Mang tiền:</strong> 70% thẻ ATM/credit + 30%
                          tiền mặt
                        </div>
                        <div className="money-item">
                          <span className="money-icon">🏦</span>
                          <strong>Đổi tiền:</strong> Tại ngân hàng hoặc gold
                          shop uy tín
                        </div>
                        <div className="money-item">
                          <span className="money-icon">📦</span>
                          <strong>Chia nhỏ:</strong> Cất tiền ở nhiều nơi khác
                          nhau
                        </div>
                        <div className="money-item">
                          <span className="money-icon">📱</span>
                          <strong>App hữu ích:</strong> Banking app, currency
                          converter
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=110"
                        alt="Budget levels"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🎯 Du lịch budget vs luxury</h3>
                      <div className="budget-levels">
                        <div className="level-item budget">
                          <span className="level-icon">🎒</span>
                          <div>
                            <strong>Budget (1-2tr/tuần):</strong>
                            <br />
                            Hostel/homestay, street food, xe bus
                          </div>
                        </div>
                        <div className="level-item midrange">
                          <span className="level-icon">🏨</span>
                          <div>
                            <strong>Mid-range (3-5tr/tuần):</strong>
                            <br />
                            Khách sạn 3*, nhà hàng vừa, taxi/grab
                          </div>
                        </div>
                        <div className="level-item luxury">
                          <span className="level-icon">👑</span>
                          <div>
                            <strong>Luxury (6tr+/tuần):</strong>
                            <br />
                            Resort 4-5*, fine dining, private car
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tip-category">
                <h2>📸 Chụp ảnh du lịch</h2>
                <div className="tip-cards">
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=104"
                        alt="Chụp ảnh du lịch"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>📸 Góc chụp đẹp</h3>
                      <p>
                        <span className="tip-icon">🌅</span>
                        <strong>Golden hour:</strong> 30 phút sau bình
                        minh/trước hoàng hôn
                        <br />
                        <span className="tip-icon">📐</span>
                        <strong>Rule of thirds:</strong> Đặt chủ thể ở 1/3 khung
                        hình
                        <br />
                        <span className="tip-icon">➡️</span>
                        <strong>Leading lines:</strong> Dùng đường, cầu dẫn mắt
                        đến chủ thể
                        <br />
                        <span className="tip-icon">🌳</span>
                        <strong>Foreground:</strong> Thêm cây, đá tạo chiều sâu
                        <br />
                        <span className="tip-icon">📐</span>
                        <strong>Unique angle:</strong> Chụp từ trên cao, góc
                        thấp
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=111"
                        alt="Chụp ảnh điện thoại"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>📱 Chụp ảnh với điện thoại</h3>
                      <p>
                        <span className="tip-icon">⚙️</span>
                        <strong>Cài đặt:</strong> Bật HDR, chụp RAW nếu có, tắt
                        flash
                        <br />
                        <span className="tip-icon">🤲</span>
                        <strong>Ổn định:</strong> 2 tay cầm máy, hít thở đều,
                        dựa vào gì đó
                        <br />
                        <span className="tip-icon">🎯</span>
                        <strong>Focus:</strong> Tap để focus, exposure
                        compensation nếu cần
                        <br />
                        <span className="tip-icon">👤</span>
                        <strong>Portrait mode:</strong> Cho ảnh người, đứng cách
                        1-2m
                        <br />
                        <span className="tip-icon">📐</span>
                        <strong>Wide angle:</strong> Cho phong cảnh, kiến trúc
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=123"
                        alt="Chụp ảnh theo chủ đề"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🎨 Chụp ảnh theo chủ đề</h3>
                      <p>
                        <span className="tip-icon">🏞️</span>
                        <strong>Phong cảnh:</strong> Dùng wide angle, include
                        foreground, check weather
                        <br />
                        <span className="tip-icon">🚶</span>
                        <strong>Street photography:</strong> Candid shots, chụp
                        từ xa với telephoto
                        <br />
                        <span className="tip-icon">🍜</span>
                        <strong>Food:</strong> Ánh sáng tự nhiên, góc 45°,
                        garnish đẹp mắt
                        <br />
                        <span className="tip-icon">🏛️</span>
                        <strong>Architecture:</strong> Symmetry, leading lines,
                        different perspectives
                        <br />
                        <span className="tip-icon">🌅</span>
                        <strong>Sunset/sunrise:</strong> Đến sớm 30 phút, check
                        sunrise/sunset time
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=124"
                        alt="Edit và chia sẻ ảnh"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>✨ Edit và chia sẻ</h3>
                      <p>
                        <span className="tip-icon">📱</span>
                        <strong>Apps tốt:</strong> VSCO, Lightroom Mobile,
                        Snapseed (free)
                        <br />
                        <span className="tip-icon">🎨</span>
                        <strong>Edit cơ bản:</strong> Exposure,
                        highlights/shadows, vibrance, clarity
                        <br />
                        <span className="tip-icon">⚡</span>
                        <strong>Không overdo:</strong> Giữ màu sắc tự nhiên,
                        tránh quá filter
                        <br />
                        <span className="tip-icon">☁️</span>
                        <strong>Backup:</strong> Google Photos, iCloud tự động
                        backup
                        <br />
                        <span className="tip-icon">📲</span>
                        <strong>Social media:</strong> Resize cho từng platform,
                        dùng hashtag phù hợp
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tip-category">
                <h2>🍜 Ẩm thực địa phương</h2>
                <div className="tip-cards">
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=105"
                        alt="Món ăn Miền Bắc"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🍜 Món ăn đặc sản Miền Bắc</h3>
                      <div className="food-locations">
                        <div className="food-item">
                          <span className="location-icon">🏙️</span>
                          <strong>Hà Nội:</strong> Phở, bún chả, chả cá Lã Vọng
                        </div>
                        <div className="food-item">
                          <span className="location-icon">🏔️</span>
                          <strong>Sapa:</strong> Thắng cố, cá tầm nướng, rượu
                          cần
                        </div>
                        <div className="food-item">
                          <span className="location-icon">🚢</span>
                          <strong>Hạ Long:</strong> Chả mực, bánh gai, ốc len
                          xào
                        </div>
                        <div className="food-item">
                          <span className="location-icon">⛰️</span>
                          <strong>Ninh Bình:</strong> Cơm cháy, dê núi, bánh
                          khúc
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=112"
                        alt="Món ăn Miền Trung"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🏛️ Món ăn đặc sản Miền Trung</h3>
                      <div className="food-locations">
                        <div className="food-item">
                          <span className="location-icon">👑</span>
                          <strong>Huế:</strong> Bún bò Huế, bánh khoái, chè Huế
                        </div>
                        <div className="food-item">
                          <span className="location-icon">🏮</span>
                          <strong>Hội An:</strong> Cao lầu, white rose, bánh mì
                          Phượng
                        </div>
                        <div className="food-item">
                          <span className="location-icon">🌉</span>
                          <strong>Đà Nẵng:</strong> Mì quảng, bánh xèo, bánh
                          tráng cuốn
                        </div>
                        <div className="food-item">
                          <span className="location-icon">🏖️</span>
                          <strong>Nha Trang:</strong> Bún chả cá, bánh căn, nem
                          nướng
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=113"
                        alt="Món ăn Miền Nam"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🌴 Món ăn đặc sản Miền Nam</h3>
                      <div className="food-locations">
                        <div className="food-item">
                          <span className="location-icon">🏙️</span>
                          <strong>TP.HCM:</strong> Bánh mì, hủ tiếu, cơm tấm,
                          chè thập cẩm
                        </div>
                        <div className="food-item">
                          <span className="location-icon">🌸</span>
                          <strong>Đà Lạt:</strong> Bánh tráng nướng, nem nướng,
                          bánh căn
                        </div>
                        <div className="food-item">
                          <span className="location-icon">🛶</span>
                          <strong>Cần Thơ:</strong> Bánh xèo, lẩu mắm, cơm dẻo
                        </div>
                        <div className="food-item">
                          <span className="location-icon">🏝️</span>
                          <strong>Phú Quốc:</strong> Cua sốt me, bánh kẹp, rượu
                          sim
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=114"
                        alt="An toàn ăn uống"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🛡️ Tips ăn uống an toàn</h3>
                      <p>
                        <span className="tip-icon">✅</span>
                        <strong>Chọn quán:</strong> Đông khách local, đồ ăn
                        nóng, luân chuyển nhanh
                        <br />
                        <span className="tip-icon">❌</span>
                        <strong>Tránh:</strong> Đá lạnh, rau sống, trái cây đã
                        gọt sẵn
                        <br />
                        <span className="tip-icon">💧</span>
                        <strong>Nước:</strong> Uống nước đóng chai, trà nóng,
                        nước sôi
                        <br />
                        <span className="tip-icon">👀</span>
                        <strong>Street food:</strong> Quan sát quá trình chế
                        biến, hỏi giá trước
                        <br />
                        <span className="tip-icon">💊</span>
                        <strong>Dạ dày nhạy cảm:</strong> Mang thuốc tiêu hóa,
                        ăn từ từ thích nghi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tip-category">
                <h2>🚗 Di chuyển thông minh</h2>
                <div className="tip-cards">
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=115"
                        alt="Di chuyển trong thành phố"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🏙️ Phương tiện trong thành phố</h3>
                      <p>
                        <span className="tip-icon">📱</span>
                        <strong>Grab/Be:</strong> Tiện lợi, có giá cước, không
                        cần trả tiền lẻ
                        <br />
                        <span className="tip-icon">🚌</span>
                        <strong>Xe bus:</strong> Rẻ nhất, download app bus map,
                        chuẩn bị tiền lẻ
                        <br />
                        <span className="tip-icon">🏍️</span>
                        <strong>Xe máy:</strong> Linh hoạt nhưng cần bằng lái,
                        mũ bảo hiểm
                        <br />
                        <span className="tip-icon">🚕</span>
                        <strong>Taxi truyền thống:</strong> Chọn hãng uy tín
                        (Mai Linh, Vinasun)
                        <br />
                        <span className="tip-icon">🚲</span>
                        <strong>Xe đạp:</strong> Khám phá phố cổ, thuê theo ngày
                        rẻ hơn
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=116"
                        alt="Di chuyển liên tỉnh"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🌏 Di chuyển liên tỉnh</h3>
                      <p>
                        <span className="tip-icon">✈️</span>
                        <strong>Máy bay:</strong> Nhanh nhất, book sớm để có giá
                        tốt
                        <br />
                        <span className="tip-icon">🚂</span>
                        <strong>Tàu hỏa:</strong> Thoải mái, ngắm cảnh, có toa
                        giường nằm
                        <br />
                        <span className="tip-icon">🚌</span>
                        <strong>Xe khách:</strong> Phổ biến, nhiều chuyến, giá
                        hợp lý
                        <br />
                        <span className="tip-icon">🚐</span>
                        <strong>Xe limousine:</strong> Thoải mái hơn xe khách,
                        đắt hơn chút
                        <br />
                        <span className="tip-icon">🚗</span>
                        <strong>Thuê xe tự lái:</strong> Tự do lịch trình, cần
                        bằng lái ô tô
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=117"
                        alt="Apps du lịch"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>📱 Apps và công cụ hữu ích</h3>
                      <p>
                        <span className="tip-icon">🗺️</span>
                        <strong>Maps:</strong> Google Maps offline, Maps.me
                        không cần internet
                        <br />
                        <span className="tip-icon">🔤</span>
                        <strong>Translate:</strong> Google Translate có camera
                        translate
                        <br />
                        <span className="tip-icon">🏨</span>
                        <strong>Booking:</strong> Booking.com, Agoda cho khách
                        sạn
                        <br />
                        <span className="tip-icon">🚌</span>
                        <strong>Transportation:</strong> Vexere (xe khách),
                        Ahamove (giao hàng)
                        <br />
                        <span className="tip-icon">🍜</span>
                        <strong>Food:</strong> Foody, Now, Baemin để xem review
                        quán ăn
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=118"
                        alt="An toàn di chuyển"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🛡️ An toàn khi di chuyển</h3>
                      <p>
                        <span className="tip-icon">⛑️</span>
                        <strong>Xe máy:</strong> Luôn đội mũ bảo hiểm, không
                        chạy quá tốc độ
                        <br />
                        <span className="tip-icon">🌙</span>
                        <strong>Đêm muộn:</strong> Tránh đi một mình, sử dụng
                        Grab thay vì xe ôm
                        <br />
                        <span className="tip-icon">👜</span>
                        <strong>Giữ đồ:</strong> Túi xách đeo trước ngực, không
                        để lỏng lẻo
                        <br />
                        <span className="tip-icon">📍</span>
                        <strong>GPS:</strong> Share location với gia đình khi đi
                        xa
                        <br />
                        <span className="tip-icon">🆘</span>
                        <strong>Emergency:</strong> Lưu số 113 (cảnh sát), 114
                        (cứu hỏa), 115 (cấp cứu)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tip-category">
                <h2>🏨 Lưu trú thông minh</h2>
                <div className="tip-cards">
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=119"
                        alt="Chọn nơi ở"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>🏠 Chọn nơi ở phù hợp</h3>
                      <div className="accommodation-types">
                        <div className="accommodation-item">
                          <span className="acc-icon">🎒</span>
                          <strong>Hostel:</strong> Rẻ nhất, gặp gỡ backpackers,
                          du lịch bụi
                        </div>
                        <div className="accommodation-item">
                          <span className="acc-icon">🏡</span>
                          <strong>Homestay:</strong> Trải nghiệm văn hóa địa
                          phương, ấm cúng
                        </div>
                        <div className="accommodation-item">
                          <span className="acc-icon">🏨</span>
                          <strong>Khách sạn:</strong> Chuyên nghiệp, đầy đủ tiện
                          nghi
                        </div>
                        <div className="accommodation-item">
                          <span className="acc-icon">🏠</span>
                          <strong>Airbnb:</strong> Như ở nhà, có bếp nấu ăn
                        </div>
                        <div className="accommodation-item">
                          <span className="acc-icon">🏖️</span>
                          <strong>Resort:</strong> All-inclusive, thích hợp
                          honeymoon
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=120"
                        alt="Booking hotel"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>📅 Booking và check-in</h3>
                      <p>
                        <span className="tip-icon">⏰</span>
                        <strong>Book trước:</strong> 1-2 tuần để có giá tốt,
                        peak season cần sớm hơn
                        <br />
                        <span className="tip-icon">⭐</span>
                        <strong>Đọc review:</strong> Tập trung vào review gần
                        đây nhất
                        <br />
                        <span className="tip-icon">📍</span>
                        <strong>Vị trí:</strong> Gần trung tâm, giao thông thuận
                        tiện
                        <br />
                        <span className="tip-icon">🔧</span>
                        <strong>Tiện ích:</strong> WiFi, điều hòa, nước nóng,
                        bữa sáng
                        <br />
                        <span className="tip-icon">❌</span>
                        <strong>Cancellation:</strong> Chọn free cancellation để
                        linh hoạt thay đổi
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=121"
                        alt="Tiết kiệm lưu trú"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>💰 Tiết kiệm chi phí lưu trú</h3>
                      <p>
                        <span className="tip-icon">📞</span>
                        <strong>Book direct:</strong> Gọi trực tiếp khách sạn để
                        xin giá tốt
                        <br />
                        <span className="tip-icon">📅</span>
                        <strong>Weekday:</strong> Thứ 2-5 rẻ hơn cuối tuần
                        <br />
                        <span className="tip-icon">⏰</span>
                        <strong>Last-minute:</strong> HotelTonight cho booking
                        phút chót
                        <br />
                        <span className="tip-icon">🎁</span>
                        <strong>Loyalty program:</strong> Tham gia để có upgrade
                        và discount
                        <br />
                        <span className="tip-icon">👥</span>
                        <strong>Group booking:</strong> Nhóm 4+ người có thể xin
                        group rate
                      </p>
                    </div>
                  </div>
                  <div className="tip-card">
                    <div className="tip-image">
                      <img
                        src="https://picsum.photos/300/180?random=122"
                        alt="Check-in hotel"
                      />
                    </div>
                    <div className="tip-content">
                      <h3>✅ Checklist khi checkin</h3>
                      <p>
                        <span className="tip-icon">🔧</span>
                        <strong>Kiểm tra phòng:</strong> Điều hòa, nước nóng,
                        WiFi, tủ lạnh
                        <br />
                        <span className="tip-icon">🔒</span>
                        <strong>Tài sản:</strong> Dùng két sắt cho giấy tờ, tiền
                        quan trọng
                        <br />
                        <span className="tip-icon">📋</span>
                        <strong>Quy định:</strong> Check-out time, breakfast
                        time, laundry service
                        <br />
                        <span className="tip-icon">🆘</span>
                        <strong>Emergency:</strong> Hỏi số reception, exit
                        route, hospital gần nhất
                        <br />
                        <span className="tip-icon">💡</span>
                        <strong>Local tips:</strong> Nhân viên hotel often give
                        best recommendations
                      </p>
                    </div>
                  </div>
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

export default SoTayDuLichPage;
