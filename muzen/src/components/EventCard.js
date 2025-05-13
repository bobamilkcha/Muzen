export default function EventCard({ title, date, time, location, description, image }) {
  function formatTime(time24) {
    const [hoursStr, minutes] = time24.split(':');
    let hours = parseInt(hoursStr, 10);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${String(hours).padStart(2, '0')}:${minutes} ${ampm}`;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-black font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{date} • {formatTime(time)} • {location}</p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}


  