import React from 'react';

const SearchSection: React.FC = () => {
  return (
    <div className="search-section">
      <div className="search-container">
        <div className="search-box">
          <h3>TÌM TOUR HOT THEO ĐỊA DANH, ĐIỂM ĐẾN</h3>
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Nhập thành phố / khu vực"
              className="search-input"
            />
            <button className="search-btn">🔍</button>
          </div>
        </div>

        <div className="search-box">
          <h3>TÌM TOUR THEO ĐIỂM KHỞI HÀNH</h3>
          <div className="search-filters">
            <select className="filter-select">
              <option>Loại tour...</option>
              <option>Tour trong nước</option>
              <option>Tour nước ngoài</option>
              <option>Tour 1 ngày</option>
            </select>
            <select className="filter-select">
              <option>Khởi hành...</option>
              <option>Hà Nội</option>
              <option>TP. Hồ Chí Minh</option>
              <option>Đà Nẵng</option>
            </select>
            <select className="filter-select">
              <option>Điểm đến...</option>
              <option>Miền Bắc</option>
              <option>Miền Trung</option>
              <option>Miền Nam</option>
            </select>
            <button className="search-btn-main">TÌM TOUR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
