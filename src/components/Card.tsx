"use client"; // حدد أن هذا مكون عميل

import React from "react";

type CardProps = {
  id: string;
  title: string;
  rooms: string;
  size: string;
  price: string;
  imageUrl: string;
  label?: string;
  labelColor?: string;
  onClick: (id: string) => void;
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  rooms,
  size,
  price,
  imageUrl,
  label,
  labelColor,
  onClick,
}) => {
  return (
    <div
      onClick={() => onClick(id)}
      className="relative bg-black rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105 transform transition-transform"
    >
      <img
        src={imageUrl}
        alt={title}
        className="h-48 w-full object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-center mb-2">{title}</h2>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>📅 {rooms}</span>
          <span>📐 {size}</span>
        </div>
        <div className="text-blue-600 font-bold text-xl mt-3 text-center">
          💰 {price}
        </div>
      </div>
      {label && (
        <div
          className={`absolute top-2 left-2 px-2 py-1 text-sm font-bold text-white rounded ${labelColor}`}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default Card;
