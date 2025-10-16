import React, { useState, useMemo } from "react";

// Components
import {
  BannerSlider,
  Sidebar,
  TravelMenu,
  SearchSection,
  DestinationGrid,
  DestinationModal,
} from "../components";

// Hooks
import { useDestinationModal } from "../hooks";

// Constants
import { destinations } from "../constants/destinations";

const HomePage: React.FC = () => {
  const {
    likes,
    selectedDestination,
    isModalOpen,
    handleLike,
    openModal,
    closeModal,
  } = useDestinationModal();

  const [searchTerm, setSearchTerm] = useState("");

  // Filter destinations based on search term
  const filteredDestinations = useMemo(() => {
    if (!searchTerm.trim()) {
      return destinations;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    return destinations.filter((dest) => {
      return (
        dest.name.toLowerCase().includes(lowerSearchTerm) ||
        dest.shortDescription.toLowerCase().includes(lowerSearchTerm) ||
        dest.description.toLowerCase().includes(lowerSearchTerm)
      );
    });
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      {/* Main Layout with Sidebars */}
      <div className="main-layout">
        <Sidebar position="left" title="Hà Giang" subtitle="Ruộng bậc thang" />

        <div className="main-content">
          <BannerSlider />

          {/* Travel Menu Navigation */}
          <TravelMenu />

          {/* Search Sections */}
          <SearchSection onSearch={handleSearch} />

          {/* Search Results Info */}
          {searchTerm.trim() && (
            <div
              className="search-results-info"
              data-testid="search-results-info"
              style={{
                padding: "15px",
                margin: "20px 0",
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <p data-testid="search-results-text">
                Tìm thấy <strong>{filteredDestinations.length}</strong> kết quả
                cho "<strong>{searchTerm}</strong>"
              </p>
            </div>
          )}

          <DestinationGrid
            destinations={filteredDestinations}
            likes={likes}
            onLike={handleLike}
            onOpenModal={openModal}
          />

          {/* No Results Message */}
          {searchTerm.trim() && filteredDestinations.length === 0 && (
            <div
              className="no-results"
              data-testid="no-results-message"
              style={{
                padding: "40px",
                textAlign: "center",
                fontSize: "18px",
                color: "#666",
              }}
            >
              <p>
                Không tìm thấy kết quả nào cho "<strong>{searchTerm}</strong>"
              </p>
              <p style={{ fontSize: "14px", marginTop: "10px" }}>
                Vui lòng thử từ khóa khác
              </p>
            </div>
          )}
        </div>

        <Sidebar position="right" title="Sapa" subtitle="Thị trấn trong mây" />
      </div>

      {/* Modal */}
      <DestinationModal
        isOpen={isModalOpen}
        destination={selectedDestination}
        onClose={closeModal}
      />
    </>
  );
};

export default HomePage;
