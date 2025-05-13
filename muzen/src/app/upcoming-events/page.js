'use client';
import { useEffect, useState } from 'react';
import UpcomingEvents from '../../components/UpcomingEvents';
import { getStoredEvents } from '../utils/localStorageEvents';

export default function UpcomingEventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(getStoredEvents());
  }, []);

  return (<div className='bg-white '>
    <UpcomingEvents events={events} />;
    </div>) 
    
}

  