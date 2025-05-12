'use client'
import { useRef } from 'react'
import EventCard from './EventCard'

const events = [
  {
    title: "Charity Fundraising",
    date: "27 May 2025",
    time: "8.00 PM",
    location: "Kuala Kangsar, Perak", 
    description: "All profits will be donated.",
    image: "/images/event1.jpg"
  },
  {
    title: "Muzen Annual Dinner",
    date: "3 June 2025",
    time: "7.30 PM",
    location: "Mandarin Oriental, KL", 
    description: "Get a chance to win a lucky draw for every ticket purchased!",
    image: "/images/event3.jpg"
  },
  {
    title: "Colour Run",
    date: "8 June 2025",
    time: "8.00 AM",
    location: "W.P Putrajaya", 
    description: "Run with your loved ones and colour your life.",
    image: "/images/event2.jpeg"
  },
  {
    title: "Food Carnival",
    date: "10 June 2025",
    time: "12.00 PM",
    location: "Perlis", 
    description: "Enjoy local delicacies and support local vendors.",
    image: "/images/event4.jpg"
  },
  {
    title: "Music Night",
    date: "15 June 2025",
    time: "7.00 PM",
    location: "Zepp, KL", 
    description: "Live performances from talented local artists.",
    image: "/images/event5.jpg"
  }
]

export default function UpcomingEvents() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    const scrollAmount = container.offsetWidth

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    })
  }

  return (
    <section className="bg-white p-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {events.map((event, index) => (
          <div key={index} className="flex-shrink-0 w-full md:min-w-1/2 scroll-snap-align-start">
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </section>
  )
}