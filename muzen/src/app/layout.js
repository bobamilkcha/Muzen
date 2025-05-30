import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Muzen Events',
  description: 'Event Management System',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

