// src/app/components/CharacterCard/CharacterCard.tsx
'use client';

import React from 'react';

interface CharacterCardProps {
  imageUrl: string;
  name: string;
  description: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ imageUrl, name, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
