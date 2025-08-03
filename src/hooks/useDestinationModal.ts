import { useState } from "react";
import type { Destination } from "../constants/destinations";

export const useDestinationModal = () => {
  const [likes, setLikes] = useState<Record<number, number>>({});
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const openModal = (destination: Destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDestination(null);
  };

  return {
    likes,
    selectedDestination,
    isModalOpen,
    handleLike,
    openModal,
    closeModal,
  };
};
