'use client';

import { useState } from 'react';

export default function SearchFilter() {
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = () => {
    // Placeholder for actual search/filter logic
    console.log('Searching for:', { location, date });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center p-6 bg-white">
      {/* Location Input */}
      <input
        type="text"
        placeholder="Locations"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="text-gray-500 px-4 py-2 border border-gray-300 rounded-md w-52 focus:outline-none focus:ring-2 focus:ring-red-900"
      />

      {/* Date Input */}
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="text-gray-500 px-4 py-2 border border-gray-300 rounded-md w-52 focus:outline-none focus:ring-2 focus:ring-red-900"
      />

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-md"
      >
        🔍
      </button>
    </div>
  );
}
