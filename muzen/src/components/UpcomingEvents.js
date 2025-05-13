'use client'
import { useEffect, useState } from 'react'
import EventCard from './EventCard'

export default function UpcomingEvents() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('events') || '[]')
    setEvents(stored)
  }, [])

  return (
    <section className="bg-white p-10">
      <h2 className="text-black text-2xl font-semibold mb-4">Upcoming Events</h2>
      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  )
}

