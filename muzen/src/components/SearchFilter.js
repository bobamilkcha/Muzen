'use client';

import { events } from '@/components/FeaturedEvents';
import EventCard from './EventCard';
import { useState } from 'react';

export default function SearchFilter() {
  const [selectedLocation, setLocation] = useState('');
  const [selectedDate, setDate] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false); // For optional no-results message

  const handleSearch = () => {
    const filtered = events.filter((event) => {
      const matchesLocation =
        selectedLocation === '' ||
        event.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesDate =
        selectedDate === '' || event.date === selectedDate;

      return matchesLocation && matchesDate;
    });

    setFilteredResults(filtered);
    setHasSearched(true);
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center p-6 bg-white">
      {/* Search Controls */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="Location"
          value={selectedLocation}
          onChange={(e) => setLocation(e.target.value)}
          className="text-gray-500 px-4 py-2 border border-gray-300 rounded-md w-52 focus:outline-none focus:ring-2 focus:ring-red-900"
        />

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setDate(e.target.value)}
          className="text-gray-500 px-4 py-2 border border-gray-300 rounded-md w-52 focus:outline-none focus:ring-2 focus:ring-red-900"
        />

        <button
          onClick={handleSearch}
          className="bg-red-800 hover:bg-red-900 text-white px-4 py-2 rounded-md"
        >
          🔍
        </button>
      </div>

      {/* Filtered Events */}
      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {filteredResults.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      ) : (
        hasSearched && (
          <p className="text-gray-500 mt-4">No events found matching your criteria.</p>
        )
      )}
    </div>
  );
}
