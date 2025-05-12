// pages/create-event.js
'use client';
import React, { useState } from 'react'; 

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    time: '',
    location: '',
    description: '',
    file: null,
  });

  const [message, setMessage] = useState(''); // Success message state
  const [errorMessage, setErrorMessage] = useState(''); // Error message state

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.eventName || !formData.date || !formData.time || !formData.location || !formData.description) {
      setErrorMessage('All fields are required.');
      return;
    }

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await fetch('/api/events', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();

      if (res.ok) {
        setMessage(result.message);
        setErrorMessage(''); // Reset error message on success
      } else {
        setErrorMessage(result.message || 'An error occurred. Please try again.');
      }

      // Reset form state
      setFormData({
        eventName: '',
        date: '',
        time: '',
        location: '',
        description: '',
        file: null,
      });
    } catch (error) {
      setErrorMessage('Failed to submit the event. Please try again later.');
    }
  };

  return (
    <section className="min-h-screen px-4 py-8 bg-white">
      <h1 className="text-black text-2xl font-bold mb-6 text-center">Create an Event</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4 bg-gray-50 p-6 rounded-lg shadow">
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          className="text-gray-500 w-full p-2 border rounded"
          value={formData.eventName}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          className="text-gray-500 w-full p-2 border rounded"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          className="text-gray-500 w-full p-2 border rounded"
          value={formData.time}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="text-gray-500 w-full p-2 border rounded"
          value={formData.location}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Event Description"
          className="text-gray-500 w-full p-2 border rounded h-32"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="file"
          name="file"
          className="text-gray-500 w-full p-2 border rounded"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="border bg-red-900 text-white py-2 px-4 rounded hover:bg-white hover:text-red-900 hover:border-red-900"
        >
          Submit Event
        </button>

        {/* Success message display */}
        {message && (
          <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
            {message}
          </div>
        )}

        {/* Error message display */}
        {errorMessage && (
          <div className="mt-4 p-2 bg-red-100 text-red-800 rounded">
            {errorMessage}
          </div>
        )}
      </form>
    </section>
  );
}
