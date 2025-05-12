'use client';
import Link from 'next/link';

export default function Hero() {
    return (
      <section className="flex flex-col lg:flex-row">
        <div className="bg-red-900 text-white p-10 flex flex-col justify-center items-center space-y-4 w-full lg:w-1/4">
          <h2 className="text-4xl font-bold">Host it.<br />Join it.<br />Love it.<br /></h2>
          <div className="space-x-4">
            <button className="border border-white text-white hover:bg-white hover:text-red-900 font-semibold px-4 py-2 rounded"><Link href="/create-event">List an Event</Link></button>
            <button className="border border-white text-white hover:bg-white hover:text-red-900 font-semibold px-4 py-2 rounded"><Link href="/upcoming-events">Explore Events</Link></button>
          </div>
        </div>
        <div className="w-full lg:w-3/4">
          <img src="/images/hero.jpg" alt="Microphone" className="w-full h-full object-cover" />
        </div>
      </section>
    )
  }
  