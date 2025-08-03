import React from 'react';
import type { Destination } from '../constants/destinations';

interface DestinationModalProps {
  isOpen: boolean;
  destination: Destination | null;
  onClose: () => void;
}

const DestinationModal: React.FC<DestinationModalProps> = ({ isOpen, destination, onClose }) => {
  if (!isOpen || !destination) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{destination.name}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p className="modal-desc">{destination.description}</p>
          
          <div className="modal-gallery">
            <h3 className="gallery-title">Hình ảnh nổi bật</h3>
            <div className="gallery-grid">
              {destination.gallery.map((item, index) => (
                <div key={index} className="gallery-item">
                  <img src={item.image} alt={item.caption} className="gallery-img" />
                  <p className="gallery-caption">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-video">
            <h3 className="video-title">Video giới thiệu</h3>
            <iframe
              width="100%"
              height="315"
              src={destination.video}
              title={destination.name}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal; 