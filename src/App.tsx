import React from "react";
import "./App.css";

// Components
import {
  Header,
  BannerSlider,
  Sidebar,
  TravelMenu,
  SearchSection,
  DestinationGrid,
  DestinationModal,
  Footer
} from "./components";

// Hooks
import { useDestinationModal } from "./hooks";

function App() {
  const {
    likes,
    selectedDestination,
    isModalOpen,
    handleLike,
    openModal,
    closeModal
  } = useDestinationModal();

  return (
    <div className="app">
      {/* Header Navigation */}
      <Header />

      {/* Main Layout with Sidebars */}
      <div className="main-layout">
        <Sidebar 
          position="left" 
          title="Hà Giang" 
          subtitle="Ruộng bậc thang" 
        />
        
        <div className="main-content">
          <BannerSlider />
          
          {/* Travel Menu Navigation */}
          <TravelMenu />

          {/* Search Sections */}
          <SearchSection />

          <DestinationGrid 
            likes={likes}
            onLike={handleLike}
            onOpenModal={openModal}
          />
        </div>
        
        <Sidebar 
          position="right" 
          title="Sapa" 
          subtitle="Thị trấn trong mây" 
        />
      </div>

      {/* Modal */}
      <DestinationModal 
        isOpen={isModalOpen}
        destination={selectedDestination}
        onClose={closeModal}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
