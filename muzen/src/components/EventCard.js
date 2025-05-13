export default function EventCard({ title, date, time, location, description, image }) {
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const dateObj = new Date();
    dateObj.setHours(hours);
    dateObj.setMinutes(minutes);

    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    return dateObj.toLocaleTimeString([], options);
  };

  return (
     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{date} • {formatTime(time)}</p>
        <p className="text-sm text-gray-600 mb-2">{location}</p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  )
}


  