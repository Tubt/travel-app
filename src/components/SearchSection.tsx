import React, { useState } from "react";

interface SearchSectionProps {
  onSearch: (searchTerm: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-section" data-testid="search-section">
      <div className="search-container" data-testid="search-container">
        <div className="search-box" data-testid="destination-search-box">
          <h3 data-testid="destination-search-title">
            TÌM TOUR HOT THEO ĐỊA DANH, ĐIỂM ĐẾN
          </h3>
          <div className="search-input-group" data-testid="search-input-group">
            <input
              type="text"
              placeholder="Nhập thành phố / khu vực"
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyPress={handleKeyPress}
              data-testid="destination-search-input"
            />
            <button
              className="search-btn"
              onClick={handleSearchClick}
              data-testid="destination-search-button"
            >
              🔍
            </button>
          </div>
        </div>

        <div className="search-box" data-testid="tour-departure-search-box">
          <h3 data-testid="tour-departure-title">
            TÌM TOUR THEO ĐIỂM KHỞI HÀNH
          </h3>
          <div className="search-filters" data-testid="search-filters">
            <select
              className="filter-select"
              data-testid="tour-type-select"
            >
              <option>Loại tour...</option>
              <option>Tour trong nước</option>
              <option>Tour nước ngoài</option>
              <option>Tour 1 ngày</option>
            </select>
            <select
              className="filter-select"
              data-testid="departure-location-select"
            >
              <option>Khởi hành...</option>
              <option>Hà Nội</option>
              <option>TP. Hồ Chí Minh</option>
              <option>Đà Nẵng</option>
            </select>
            <select
              className="filter-select"
              data-testid="destination-select"
            >
              <option>Điểm đến...</option>
              <option>Miền Bắc</option>
              <option>Miền Trung</option>
              <option>Miền Nam</option>
            </select>
            <button
              className="search-btn-main"
              data-testid="tour-search-button"
            >
              TÌM TOUR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
