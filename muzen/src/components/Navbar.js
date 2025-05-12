'use client';
import Link from 'next/link';

export default function Navbar() {
    return (
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-4xl font-bold text-gray-800"><Link href="/">Muzen</Link></h1>
        <ul className="flex space-x-6 font-semibold text-gray-700 ml-auto mr-6">
          <li className="hover:text-red-900"><Link href="/#about">About Us</Link></li>
          <li className="hover:text-red-900"><Link href="/upcoming-events">Upcoming Events</Link></li>
          <li className="hover:text-red-900"><Link href="/create-event">Create Event</Link></li>
          <li className="hover:text-red-900"><a href="/#contact">Contact Us</a></li>
        </ul>
        <div className="relative lg:block">
            <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 px-4 py-1 rounded lg:w-40 w-full"
        />
        </div>
      </nav>
    )
  }
  