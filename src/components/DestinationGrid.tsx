import React from "react";
import type { Destination } from "../constants/destinations";

interface DestinationGridProps {
  destinations: Destination[];
  likes: Record<number, number>;
  onLike: (id: number) => void;
  onOpenModal: (destination: Destination) => void;
}

const DestinationGrid: React.FC<DestinationGridProps> = ({
  destinations,
  likes,
  onLike,
  onOpenModal,
}) => {
  return (
    <div className="grid" data-testid="destination-grid">
      {destinations.map((dest) => (
        <div
          key={dest.id}
          className="card"
          data-testid={`destination-card-${dest.id}`}
        >
          <div className="card-content" data-testid={`card-content-${dest.id}`}>
            <h2 className="card-title" data-testid={`card-title-${dest.id}`}>
              {dest.name}
            </h2>
            <img
              src={dest.image}
              alt={dest.name}
              className="card-img"
              data-testid={`card-image-${dest.id}`}
            />
            <p className="card-desc" data-testid={`card-description-${dest.id}`}>
              {dest.shortDescription}
            </p>
            <div className="card-video" data-testid={`card-video-${dest.id}`}>
              <iframe
                width="100%"
                height="100%"
                src={dest.video}
                title={dest.name}
                allowFullScreen
                data-testid={`card-iframe-${dest.id}`}
              ></iframe>
            </div>
            <div
              className="card-actions"
              data-testid={`card-actions-${dest.id}`}
            >
              <button
                onClick={() => onLike(dest.id)}
                className="like-btn"
                data-testid={`like-button-${dest.id}`}
              >
                ❤️ Like ({likes[dest.id] || 0})
              </button>
              <button
                onClick={() => onOpenModal(dest)}
                className="details-btn"
                data-testid={`details-button-${dest.id}`}
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
