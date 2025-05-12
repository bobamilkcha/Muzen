// pages/create-event.js
export default function CreateEvent() {
    return (
      <section className="min-h-screen px-4 py-8 bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Create an Event</h1>
  
        <form className="max-w-2xl mx-auto space-y-4 bg-gray-50 p-6 rounded-lg shadow">
          <input type="text" placeholder="Event Name" className="w-full p-2 border rounded" />
          <input type="date" className="w-full p-2 border rounded" />
          <input type="time" className="w-full p-2 border rounded" />
          <input type="text" placeholder="Location" className="w-full p-2 border rounded" />
          <textarea placeholder="Event Description" className="w-full p-2 border rounded h-32" />
          <input type="file" className="w-full p-2 border rounded" />
  
          <button type="submit" className="border bg-red-900 text-white py-2 px-4 rounded hover:bg-white hover:text-red-900 hover:border-red-900">
            Submit Event
          </button>
        </form>
      </section>
    );
  }
  