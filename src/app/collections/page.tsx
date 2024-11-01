// src/app/collections/page.tsx
'use client';

import React, { useState } from 'react';
import CharacterCard from '@/components/CharacterCard';
import Tabs from '@/components/Tabs';
import Filters from '@/components/Filters';
import { useAppContext } from '../context/AppContext';
import Modal from '@/components/Modal'; // Будем создавать этот компонент
import Link from 'next/link';

const Collections: React.FC = () => {
  const { activeTab, setActiveTab, selectedFilter, setSelectedFilter } = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = ['Все', 'Изображения', 'Описание', 'Рейтинги'];
  const filters = ['Рейтинг > 4', 'Новые', 'Популярные'];

  const collections = [
    // Пустой массив для тестирования
    // Добавьте больше коллекций по необходимости
  ];

  const availableNFTs = [
    {
      imageUrl: '/images/nft1.jpg',
      name: 'NFT 1',
      description: 'Описание NFT 1.',
    },
    {
      imageUrl: '/images/nft2.jpg',
      name: 'NFT 2',
      description: 'Описание NFT 2.',
    },
    // Добавьте больше NFT по необходимости
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        <Filters options={filters} selectedOption={selectedFilter} onFilterChange={setSelectedFilter} />
        
        {collections.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {collections.map((collection, index) => (
              <CharacterCard
                key={index}
                imageUrl={collection.imageUrl}
                name={collection.name}
                description={collection.description}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20">
            <p className="text-lg mb-4">У вас пока нет коллекций.</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Купить новые NFT
            </button>
          </div>
        )}

        {/* Модальное окно */}
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold">Доступные NFT</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                  ✖️
                </button>
              </div>
              <div className="flex-grow p-4 overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {availableNFTs.map((nft, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                      <img src={nft.imageUrl} alt={nft.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{nft.name}</h3>
                        <p className="text-gray-600">{nft.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t">
                <Link href="https://opensea.io" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded text-center"
                  >
                    Перейти на OpenSea
                  </a>
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </main>
    </div>
  );
};

export default Collections;
