const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock data
const services = [
  // ... (copy the services array from your React app)
];

const staffMembers = [
  // ... (copy the staffMembers array from your React app)
];

// Routes
app.get('/api/services', (req, res) => {
  res.json(services);
});

app.get('/api/staff', (req, res) => {
  res.json(staffMembers);
});

app.post('/api/book', (req, res) => {
  const bookingDetails = req.body;
  console.log('New booking:', bookingDetails);
  // Here you would typically save this to a database
  res.json({ message: 'Booking successful', booking: bookingDetails });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});