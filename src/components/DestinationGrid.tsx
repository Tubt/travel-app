import React from "react";
import { destinations } from "../constants/destinations";
import type { Destination } from "../constants/destinations";

interface DestinationGridProps {
  likes: Record<number, number>;
  onLike: (id: number) => void;
  onOpenModal: (destination: Destination) => void;
}

/**
 * DestinationGrid component displays travel destinations in a card layout
 *
 * Features:
 * - Interactive destination cards with images and videos
 * - Like functionality for user engagement
 * - Modal trigger for detailed destination information
 * - Responsive grid layout
 * - Dynamic like counters
 */
const DestinationGrid: React.FC<DestinationGridProps> = ({
  likes,
  onLike,
  onOpenModal,
}) => {
  return (
    <div className="grid" data-testid="destinations-grid">
      {destinations.map((dest) => (
        <div
          key={dest.id}
          className="card"
          data-testid={`destination-card-${dest.id}`}
        >
          <div
            className="card-content"
            data-testid={`destination-content-${dest.id}`}
          >
            <h2
              className="card-title"
              data-testid={`destination-title-${dest.id}`}
            >
              {dest.name}
            </h2>
            <img
              src={dest.image}
              alt={dest.name}
              className="card-img"
              data-testid={`destination-image-${dest.id}`}
            />
            <p
              className="card-desc"
              data-testid={`destination-description-${dest.id}`}
            >
              {dest.shortDescription}
            </p>
            <div
              className="card-video"
              data-testid={`destination-video-${dest.id}`}
            >
              <iframe
                width="100%"
                height="100%"
                src={dest.video}
                title={dest.name}
                allowFullScreen
                data-testid={`destination-video-iframe-${dest.id}`}
              ></iframe>
            </div>
            <div
              className="card-actions"
              data-testid={`destination-actions-${dest.id}`}
            >
              <button
                onClick={() => onLike(dest.id)}
                className="like-btn"
                data-testid={`destination-like-btn-${dest.id}`}
              >
                ❤️ Like ({likes[dest.id] || 0})
              </button>
              <button
                onClick={() => onOpenModal(dest)}
                className="details-btn"
                data-testid={`destination-details-btn-${dest.id}`}
              >
                Xem thêm
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationGrid;
