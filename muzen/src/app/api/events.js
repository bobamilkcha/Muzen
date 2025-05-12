import { eventsData } from '../../data/events'; // Assume eventsData is your mock database or array of events.

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(eventsData);
  }

  if (req.method === 'POST') {
    const newEvent = req.body; // Assuming the event body is sent in the correct format
    eventsData.push(newEvent); // You should persist this data to a database in a real-world app

    return res.status(200).json({ message: 'Event created successfully!' });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
