import { FaFacebook, FaInstagram } from 'react-icons/fa'

export default function ContactUs() {
    return (
        <section id="contact" className="w-full flex flex-col items-center justify-center bg-gray-100 px-4 py-4">
  
        {/* Contact Form */}
        <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md mb-10">
          <h2 className="text-black text-2xl font-bold mb-6 text-center">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="text-gray-500 w-full border rounded px-3 py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="text-gray-500 w-full border rounded px-3 py-2"
            />
            <textarea
              placeholder="Message"
              className="text-gray-500 w-full border rounded px-3 py-2 h-28"
            />
            <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
              Submit
            </button>
          </form>
        </div>
      
        {/* Contact Info + Footer */}
        <div className="w-full max-w-xl text-center text-gray-700 space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <p>HQ: 123 Main St, KL</p>
            <p>Email: hello@muzen.com</p>
            <p>Phone: +60 12-345 6789</p>
          </div>
      
          <div className="mt-4 text-center">
            <p className="font-semibold mb-2">Follow us:</p>
            <div className="flex justify-center space-x-6 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FaInstagram />
              </a>
            </div>
          </div>
      
          <footer className="pt-6 text-sm text-gray-500 border-t">
            © 2025 Muzen. All rights reserved.
          </footer>
        </div>
      </section>
      
    );
  }
  
  