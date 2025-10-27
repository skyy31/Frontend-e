import React, { ReactNode } from "react";

type DestinationCardProps = {
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  onAddToFavorites?: () => void;
  children?: ReactNode;
};

const DestinationCard = ({
  name,
  location,
  rating,
  imageUrl,
  onAddToFavorites,
  children,
}: DestinationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-row items-center gap-4 p-4">
      <img
        src={imageUrl}
        alt={name}
        className="w-40 h-32 object-cover rounded-lg"
      />

      <div className="flex-1">
        <div className="flex items-center gap-2 text-yellow-500 mb-1">
          ⭐ {rating}
        </div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-500">{location}</p>
      </div>

      <div>
        {onAddToFavorites ? (
          <button
            onClick={onAddToFavorites}
            className="px-3 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
          >
            Tambahkan ke Favorit
          </button>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default DestinationCard;