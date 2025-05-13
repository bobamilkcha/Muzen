// utils/localStorageEvents.js
export const getStoredEvents = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('events');
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

export const saveEvents = (events) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('events', JSON.stringify(events));
  }
};
