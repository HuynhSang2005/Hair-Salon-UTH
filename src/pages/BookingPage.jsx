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

const BookingPage = ({services, staffMembers}) => {
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
  }, [serviceId, navigate, services]);

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
              {staffMembers.map((stylist) => (
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