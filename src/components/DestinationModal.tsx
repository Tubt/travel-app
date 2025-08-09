import React from "react";
import type { Destination } from "../constants/destinations";

interface DestinationModalProps {
  isOpen: boolean;
  destination: Destination | null;
  onClose: () => void;
}

/**
 * DestinationModal component displays detailed destination information in a modal overlay
 *
 * Features:
 * - Full destination details with description
 * - Image gallery with captions
 * - Embedded video content
 * - Close functionality with overlay click or button
 * - Responsive modal design
 * - Event propagation handling
 */
const DestinationModal: React.FC<DestinationModalProps> = ({
  isOpen,
  destination,
  onClose,
}) => {
  if (!isOpen || !destination) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      data-testid="destination-modal-overlay"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        data-testid="destination-modal-content"
      >
        <div className="modal-header" data-testid="destination-modal-header">
          <h2 data-testid="destination-modal-title">{destination.name}</h2>
          <button
            className="close-btn"
            onClick={onClose}
            data-testid="destination-modal-close-btn"
          >
            ×
          </button>
        </div>
        <div className="modal-body" data-testid="destination-modal-body">
          <p className="modal-desc" data-testid="destination-modal-description">
            {destination.description}
          </p>

          <div
            className="modal-gallery"
            data-testid="destination-modal-gallery"
          >
            <h3
              className="gallery-title"
              data-testid="destination-gallery-title"
            >
              Hình ảnh nổi bật
            </h3>
            <div
              className="gallery-grid"
              data-testid="destination-gallery-grid"
            >
              {destination.gallery.map((item, index) => (
                <div
                  key={index}
                  className="gallery-item"
                  data-testid={`destination-gallery-item-${index}`}
                >
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="gallery-img"
                    data-testid={`destination-gallery-img-${index}`}
                  />
                  <p
                    className="gallery-caption"
                    data-testid={`destination-gallery-caption-${index}`}
                  >
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="modal-video" data-testid="destination-modal-video">
            <h3 className="video-title" data-testid="destination-video-title">
              Video giới thiệu
            </h3>
            <iframe
              width="100%"
              height="315"
              src={destination.video}
              title={destination.name}
              allowFullScreen
              data-testid="destination-video-iframe"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal;
