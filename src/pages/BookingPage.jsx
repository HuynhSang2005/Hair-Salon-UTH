import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";

const services = [
  { id: 1, name: 'Cắt tóc', price: 30, duration: 30},
  { id: 2, name: 'Gội đầu và massage da đầu', duration: 120},
  { id: 3, name: 'Nhuộm tóc', price: 100, duration: 90},
  { id: 4, name: 'Balayage', price: 150,  duration: 150},
  { id: 5, name: 'Uốn tóc', price: 200, duration: 180},
  { id: 6, name: 'Duỗi tóc', price: 120, duration: 120},
  { id: 7, name: 'Tạo kiểu tóc (dự tiệc, sự kiện)', duration: 45},
  { id: 8, name: 'Dưỡng tóc (hấp dầu, phục hồi tóc hư tổn)', price: 70,duration: 60},
  { id: 9, name: 'Chăm sóc da đầu', price: 50,duration: 45,},
  { id: 10, name: 'Tẩy tóc', price: 60,duration: 45,},
  { id: 11, name: 'Tạo kiểu râu và cạo râu', price: 250, duration: 180},
  { id: 12, name: 'Men\'s Grooming', price: 35,duration: 45},
  { id: 13, name: 'Children\'s Haircut', price: 25,duration: 30,},
  { id: 14, name: 'Dập xù', price: 150,duration: 120},
];

const stylists = [
  { id: 1, name: "Wrxdie" },
  { id: 2, name: "Tlinh" },
  { id: 3, name: "MCK" },
  { id: 4, name: "DRT" },
  { id: 4, name: "Gill" },
  { id: 4, name: "Robber" },
  { id: 4, name: "HieuThuHai" },
  { id: 4, name: "Wean" },
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const BookingPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [selectedService, setSelectedService] = useState(null);
  const [selectedStylist, setSelectedStylist] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    const service = services.find((s) => s.id === parseInt(serviceId));
    if (service) {
      setSelectedService(service);
    } else {
      navigate("/services");
    }
  }, [serviceId, navigate]);

  const handleBook = () => {
    // Check if user is logged in (you'll need to implement this check)
    const isLoggedIn = false; // Replace with actual login check

    if (isLoggedIn) {
      toast({
        title: "Booking Successful",
        description: `You've booked ${selectedService.name} with ${selectedStylist} at ${selectedTime}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      navigate("/auth");
    }
  };

  if (!selectedService) return null;

  return (
    <Box py={16}>
      <Container maxW="container.md">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center">
            Book Your Appointment
          </Heading>
          <VStack spacing={4} align="stretch">
            <Text fontSize="xl" fontWeight="bold">
              Selected Service: {selectedService.name}
            </Text>
            <Text>Price: ${selectedService.price}</Text>
            <Text>Duration: {selectedService.duration} minutes</Text>

            <Select
              placeholder="Select stylist"
              value={selectedStylist}
              onChange={(e) => setSelectedStylist(e.target.value)}
            >
              {stylists.map((stylist) => (
                <option key={stylist.id} value={stylist.name}>
                  {stylist.name}
                </option>
              ))}
            </Select>

            <Select
              placeholder="Select time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Select>

            <Button
              colorScheme="brand"
              size="lg"
              onClick={handleBook}
              isDisabled={!selectedStylist || !selectedTime}
            >
              Book Appointment
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default BookingPage;
