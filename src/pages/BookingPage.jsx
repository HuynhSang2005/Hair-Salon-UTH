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
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
  Radio,
  RadioGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
];

const BookingPage = ({ services, staffMembers }) => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedService, setSelectedService] = useState(null);
  const [selectedStylist, setSelectedStylist] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  useEffect(() => {
    const service = services.find((s) => s.id === parseInt(serviceId));
    if (service) {
      setSelectedService(service);
    } else {
      navigate("/services");
    }
  }, [serviceId, navigate, services]);

  const handleBook = () => {
    const isLoggedIn = false; // Replace with actual login check

    if (isLoggedIn) {
      if (!selectedStylist || !selectedDate || !selectedTime) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      console.log("Booking details:", {
        service: selectedService.name,
        stylist: selectedStylist,
        date: selectedDate,
        time: selectedTime,
        specialRequests,
        paymentMethod,
      });

      toast({
        title: "Booking Successful",
        description: `You've booked ${selectedService.name} with ${selectedStylist} on ${selectedDate} at ${selectedTime}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      onOpen();
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

            <FormControl isRequired>
              <FormLabel>Select Stylist</FormLabel>
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
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Select Date</FormLabel>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Select Time</FormLabel>
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
            </FormControl>

            <FormControl>
              <FormLabel>Special Requests</FormLabel>
              <Textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Any special requests or notes?"
              />
            </FormControl>

            <FormControl as="fieldset">
              <FormLabel as="legend">Payment Method</FormLabel>
              <RadioGroup value={paymentMethod} onChange={setPaymentMethod}>
                <HStack spacing={4}>
                  <Radio value="cash">Cash</Radio>
                  <Radio value="card">Card</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            <Button
              colorScheme="brand"
              size="lg"
              onClick={handleBook}
              isDisabled={!selectedStylist || !selectedDate || !selectedTime}
            >
              Book Appointment
            </Button>
          </VStack>
        </VStack>
      </Container>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          style={{
            height: "300px",
            margin: "auto",
            padding: "30px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ModalHeader style={{ marginBottom: "20px", textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
            Login Required
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{ marginBottom: "20px", textAlign: "center", fontSize: "16px", color: "#555" }}>
            <Text>You need to be logged in to book an appointment.</Text>
          </ModalBody>
          <ModalFooter style={{ justifyContent: "center", gap: "10px" }}>
            <Button
              colorScheme="purple"
              onClick={() => navigate("/auth")}
              style={{ padding: "10px 20px", fontWeight: "bold" }}
            >
              Log In
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              style={{ padding: "10px 20px", fontWeight: "bold", color: "#555" }}
            >
              Return to Home
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BookingPage;
