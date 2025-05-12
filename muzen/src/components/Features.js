import FeatureCard from './FeatureCard'

const events = [
  {
    title: "Easy Registration",
    description: "Once verified, all event listing process will be streamlined.",
    image: "/images/user-friendly.png"
  },
  {
    title: "QR Ticketing",
    description: "All tickets will be in QR form for easy handling.",
    image: "/images/qr-code.png"
  },
  {
    title: "Organizer Dashboard",
    description: "Your insights and sales will all be displayed on a dashboard.",
    image: "/images/dashboard.png"
  },
  {
    title: "Email Reminders",
    description: "We will send you email reminders of your upcoming events as per requested!.",
    image: "/images/email.png"
  }
]

export default function Features() {
  return (
    <section className="bg-white p-10">
      <h2 className="text-black text-2xl font-semibold mb-6">Why Choose Us?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, index) => (
          <FeatureCard key={index} {...event} />
        ))}
      </div>
    </section>
  )
}