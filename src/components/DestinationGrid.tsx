import React from 'react';
import { destinations } from '../constants/destinations';
import type { Destination } from '../constants/destinations';

interface DestinationGridProps {
  likes: Record<number, number>;
  onLike: (id: number) => void;
  onOpenModal: (destination: Destination) => void;
}

const DestinationGrid: React.FC<DestinationGridProps> = ({ likes, onLike, onOpenModal }) => {
  return (
    <div className="grid">
      {destinations.map((dest) => (
        <div key={dest.id} className="card">
          <div className="card-content">
            <h2 className="card-title">{dest.name}</h2>
            <img src={dest.image} alt={dest.name} className="card-img" />
            <p className="card-desc">{dest.shortDescription}</p>
            <div className="card-video">
              <iframe
                width="100%"
                height="100%"
                src={dest.video}
                title={dest.name}
                allowFullScreen
              ></iframe>
            </div>
            <div className="card-actions">
              <button onClick={() => onLike(dest.id)} className="like-btn">
                ❤️ Like ({likes[dest.id] || 0})
              </button>
              <button onClick={() => onOpenModal(dest)} className="details-btn">
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