'use client';
import { useEffect, useState } from 'react';
import CreateEvent from '../../components/CreateEvents';
import { getStoredEvents, saveEvents } from '../utils/localStorageEvents';

export default function CreateEventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const stored = getStoredEvents();
    setEvents(stored);
  }, []);

  const handleAddEvent = (event) => {
    const updated = [...events, event];
    setEvents(updated);
    saveEvents(updated); // Save to localStorage
  };

  return <CreateEvent onAddEvent={handleAddEvent} />;
}

