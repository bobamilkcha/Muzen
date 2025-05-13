'use client'
import { useRef } from 'react'
import EventCard from './EventCard'

export const events = [
  {
    id: '1',
    title: "Charity Fundraising",
    date: "27-5-2025",
    time: "8:00",
    location: "Kuala Kangsar, Perak", 
    description: "All profits will be donated.",
    image: "/images/event1.jpg"
  },
  {
    id: '2',
    title: "Muzen Annual Dinner",
    date: "3-6-2025",
    time: "19:30",
    location: "Mandarin Oriental, KL", 
    description: "Get a chance to win a lucky draw for every ticket purchased!",
    image: "/images/event3.jpg"
  },
  {
    id: '3',
    title: "Colour Run",
    date: "8-6-2025",
    time: "8:00",
    location: "W.P Putrajaya", 
    description: "Run with your loved ones and colour your life.",
    image: "/images/event2.jpeg"
  },
  {
    id: '4',
    title: "Food Carnival",
    date: "10-6-2025",
    time: "12:00",
    location: "Perlis", 
    description: "Enjoy local delicacies and support local vendors.",
    image: "/images/event4.jpg"
  },
  {
    id: '5',
    title: "Music Night",
    date: "15-6-2025",
    time: "19:00",
    location: "Zepp, KL", 
    description: "Live performances from talented local artists.",
    image: "/images/event5.jpg"
  }
]

export default function FeaturedEvents() {
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
        <h2 className="text-2xl font-semibold">Featured Events</h2>
        <div className=" space-x-2">
          <button
            onClick={() => scroll('left')}
            className="text-black px-3 py-1 border border-black rounded hover:bg-gray-100"
          >
            ◀
          </button>
          <button
            onClick={() => scroll('right')}
            className="text-black px-3 py-1 border border-black rounded hover:bg-gray-100"
          >
            ▶
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {events.map((event, index) => (
          <div key={index} className="flex-shrink-0 w-full md:w-1/3 scroll-snap-align-start">
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </section>
  )
}

