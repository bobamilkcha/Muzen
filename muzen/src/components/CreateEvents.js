'use client'
import { useState } from 'react'

export default function CreateEvent({ onAddEvent }) {
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    time: '',
    location: '',
    description: '',
    file: ''
  })

  const [message, setMessage] = useState('')

  const handleChange = async (e) => {
    const { name, value, files } = e.target

    if (name === 'file' && files.length > 0) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, file: reader.result })) // base64
      }
      reader.readAsDataURL(files[0])
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newEvent = {
      title: formData.eventName,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      description: formData.description,
      image: formData.file
    }

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem('events') || '[]')
    const updated = [newEvent, ...existing]
    localStorage.setItem('events', JSON.stringify(updated))

    if (onAddEvent) onAddEvent(newEvent)

    setMessage('Event created successfully!')
    setFormData({
      eventName: '',
      date: '',
      time: '',
      location: '',
      description: '',
      file: ''
    })
  }

  return (
    <section className="min-h-screen px-4 py-8 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Create an Event</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 bg-gray-50 p-6 rounded-lg shadow">
        <input name="eventName" type="text" placeholder="Event Name" value={formData.eventName} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="date" type="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="time" type="time" value={formData.time} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="location" type="text" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Event Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded h-32" required />
        <input name="file" type="file" accept="image/*" onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="border bg-red-900 text-white py-2 px-4 rounded hover:bg-white hover:text-red-900 hover:border-red-900">Submit Event</button>
        {message && <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">{message}</div>}
      </form>
    </section>
  )
}

