export default function EventCard({ title, date, time, location, description, image }) {
    return (
      <div className="bg-white shadow-md rounded overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{date} {time && `• ${time}`} {location && `• ${location}`}</p>
          <p className="text-sm mt-2">{description}</p>
        </div>
      </div>
    )
  }
  