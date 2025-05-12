export default function FeatureCard({ title, description, image }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto px-4">
        <img src={image} alt={title} className="w-full h-40 object-contain mx-auto" />
        <div className="p-4">
          <h3 className="text-black text-xl font-semibold">{title}</h3>
          <p className="text-gray-500 mt-2">{description}</p>
        </div>
      </div>
    )
  }