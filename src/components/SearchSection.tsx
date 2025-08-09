import React, { useState } from "react";
import {
  searchToursByLocation,
  filterToursByType,
  filterToursByDeparture,
  filterToursByDestination,
  type Tour,
} from "../constants";
import SearchResults from "./SearchResults";

/**
 * SearchSection component for tour search functionality
 *
 * Features:
 * - Location-based tour search with real results
 * - Departure point filtering
 * - Tour type categorization
 * - Destination selection
 * - Advanced search filters
 * - Real-time search results display
 */
const SearchSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tourType, setTourType] = useState("Loại tour...");
  const [departure, setDeparture] = useState("Khởi hành...");
  const [destination, setDestination] = useState("Điểm đến...");
  const [searchResults, setSearchResults] = useState<Tour[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleDestinationSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      alert("Vui lòng nhập tên thành phố hoặc địa điểm!");
      return;
    }

    setIsSearching(true);

    // Simulate search delay for better UX
    setTimeout(() => {
      const results = searchToursByLocation(searchQuery);
      setSearchResults(results);
      setShowResults(true);
      setIsSearching(false);

      // Log search activity
      console.log(
        `🔍 Search performed: "${searchQuery}" - Found ${results.length} tours`
      );
    }, 500);
  };

  const handleAdvancedSearch = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSearching(true);

    // Simulate search delay
    setTimeout(() => {
      // Start with all tours, then apply filters
      let results = searchToursByLocation(""); // Get all tours

      // Apply filters
      results = filterToursByType(results, tourType);
      results = filterToursByDeparture(results, departure);
      results = filterToursByDestination(results, destination);

      setSearchResults(results);
      setShowResults(true);
      setIsSearching(false);

      // Log advanced search
      console.log(
        `🔍 Advanced search: Type=${tourType}, Departure=${departure}, Destination=${destination} - Found ${results.length} tours`
      );
    }, 500);
  };

  const closeSearchResults = () => {
    setShowResults(false);
    setSearchResults([]);
  };
  return (
    <>
      <div className="search-section" data-testid="search-section">
        <div className="search-container" data-testid="search-container">
          <div className="search-box" data-testid="search-box-destination">
            <h3 data-testid="search-destination-title">
              TÌM TOUR HOT THEO ĐỊA DANH, ĐIỂM ĐẾN
            </h3>
            <form
              onSubmit={handleDestinationSearch}
              data-testid="search-destination-form"
            >
              <div
                className="search-input-group"
                data-testid="search-destination-group"
              >
                <input
                  type="text"
                  placeholder="Nhập thành phố / khu vực (VD: Đà Nẵng, Sapa, Phú Quốc...)"
                  className="search-input"
                  data-testid="search-destination-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  disabled={isSearching}
                />
                <button
                  type="submit"
                  className="search-btn"
                  data-testid="search-destination-btn"
                  disabled={isSearching}
                >
                  {isSearching ? "⏳" : "🔍"}
                </button>
              </div>
            </form>
          </div>

          <div className="search-box" data-testid="search-box-departure">
            <h3 data-testid="search-departure-title">
              TÌM TOUR THEO ĐIỂM KHỞI HÀNH
            </h3>
            <form
              onSubmit={handleAdvancedSearch}
              data-testid="search-advanced-form"
            >
              <div className="search-filters" data-testid="search-filters">
                <select
                  className="filter-select"
                  data-testid="search-filter-tourtype"
                  value={tourType}
                  onChange={(e) => setTourType(e.target.value)}
                  disabled={isSearching}
                >
                  <option>Loại tour...</option>
                  <option>Tour trong nước</option>
                  <option>Tour nước ngoài</option>
                  <option>Tour 1 ngày</option>
                </select>
                <select
                  className="filter-select"
                  data-testid="search-filter-departure"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  disabled={isSearching}
                >
                  <option>Khởi hành...</option>
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Nha Trang</option>
                  <option>Phú Quốc</option>
                </select>
                <select
                  className="filter-select"
                  data-testid="search-filter-destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  disabled={isSearching}
                >
                  <option>Điểm đến...</option>
                  <option>Miền Bắc</option>
                  <option>Miền Trung</option>
                  <option>Miền Nam</option>
                </select>
                <button
                  type="submit"
                  className="search-btn-main"
                  data-testid="search-main-btn"
                  disabled={isSearching}
                >
                  {isSearching ? "⏳ Đang tìm..." : "TÌM TOUR"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <SearchResults
        tours={searchResults}
        searchQuery={searchQuery || "Tìm kiếm nâng cao"}
        isVisible={showResults}
        onClose={closeSearchResults}
      />
    </>
  );
};

export default SearchSection;
