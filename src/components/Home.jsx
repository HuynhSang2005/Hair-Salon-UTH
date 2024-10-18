import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Staff from '../components/Staff';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    { id: 1, name: 'Cắt tóc', price: 30, description: 'Cắt tóc chuyên nghiệp cho mọi kiểu tóc', duration: 30, rating: 4.5 },
    { id: 2, name: 'Gội đầu và massage da đầu', price: 80, description: 'Dịch vụ nhuộm tóc toàn bộ', duration: 120, rating: 4.7 },
    { id: 3, name: 'Nhuộm tóc', price: 100, description: 'Nhuộm highlight toàn phần hoặc một phần', duration: 90, rating: 4.3 },
    { id: 4, name: 'Balayage', price: 150, description: 'Nhuộm highlight bằng tay tạo vẻ tự nhiên', duration: 150, rating: 4.9 },
    { id: 5, name: 'Uốn tóc', price: 200, description: 'Dịch vụ làm mượt tóc cho tóc xù', duration: 180, rating: 4.2 },
    { id: 6, name: 'Duỗi tóc', price: 120, description: 'Uốn xoăn vĩnh viễn cho các kiểu tóc xoăn', duration: 120, rating: 4.6 },
    { id: 7, name: 'Tạo kiểu tóc (dự tiệc, sự kiện)', price: 40, description: 'Sấy và tạo kiểu tóc chuyên nghiệp', duration: 45, rating: 4.8 },
    { id: 8, name: 'Dưỡng tóc (hấp dầu, phục hồi tóc hư tổn)', price: 70, description: 'Tạo kiểu tóc trang trọng cho các dịp đặc biệt', duration: 60, rating: 4.4 },
    { id: 9, name: 'Chăm sóc da đầu', price: 50, description: 'Điều trị tóc chuyên sâu cho tóc hư tổn', duration: 45, rating: 4.1 },
    { id: 10, name: 'Tẩy tóc', price: 60, description: 'Điều trị da đầu cho sức khỏe da đầu', duration: 45, rating: 3.9 },
    { id: 11, name: 'Tạo kiểu râu và cạo râu', price: 250, description: 'Dịch vụ nối tóc chuyên nghiệp', duration: 180, rating: 4.7 },
    { id: 12, name: 'Men\'s Grooming', price: 35, description: 'Cắt tóc và tỉa râu cho nam giới', duration: 45, rating: 4.3 },
    { id: 13, name: 'Children\'s Haircut', price: 25, description: 'Cắt tóc cho trẻ em dưới 12 tuổi', duration: 30, rating: 4.5 },
    { id: 14, name: 'Dập xù', price: 150, description: 'Tạo kiểu tóc ngày cưới', duration: 120, rating: 4.9 },
  ];

  const topServices = services.sort((a, b) => b.rating - a.rating).slice(0, 4);

  const filteredServices = topServices.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box>
      <Box 
        bgImage="url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="100vh"
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="rgba(0,0,0,0.5)"
        />
        <Container maxW="container.xl" h="100%" position="relative">
          <VStack
            align="flex-start"
            justify="center"
            h="100%"
            spacing={6}
            color="white"
          >
            <Heading as="h1" size="4xl" fontWeight="bold">
              UTH Hair Salon
            </Heading>
            <Heading as="h2" size="3xl" fontWeight="bold">
              Trân Trọng.
            </Heading>
            <Text fontSize="xl" maxW="600px">
            Mái tóc đẹp đưa bạn đến mọi nơi. Chúng tôi không chỉ là một salon, mà còn là một không gian sáng tạo nơi chúng tôi mang đến cho bạn trải nghiệm tóc hoàn toàn mới.
            </Text>
            <Button as={RouterLink} to="/auth" colorScheme="brand" size="lg">
              Book an appointment
            </Button>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={16}>
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="2xl" textAlign="center">
            Our Top Services
          </Heading>
          <Input
            placeholder="Search for a service"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="lg"
            maxW="600px"
            mx="auto"
          />
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {filteredServices.map((service) => (
              <Box
                key={service.id}
                p={6}
                boxShadow="md"
                borderRadius="md"
                bg={bgColor}
                borderWidth={1}
                borderColor={borderColor}
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
              >
                <Heading as="h3" size="lg" mb={2}>
                  {service.name}
                </Heading>
                <Text fontSize="2xl" fontWeight="bold" mb={2}>
                  ${service.price}
                </Text>
                <Text mb={4}>{service.description}</Text>
                <Button
                  as={RouterLink}
                  to={`/booking/${service.id}`}
                  colorScheme="brand"
                  size="sm"
                >
                  Book Now
                </Button>
              </Box>
            ))}
          </SimpleGrid>
          <Box textAlign="center">
            <Button 
              as={RouterLink} 
              to="/services" 
              colorScheme="brand" 
              size="lg"
            >
              View All Services
            </Button>
          </Box>
        </VStack>
      </Container>
      <Staff />
      <Testimonials />
      <ContactForm />
    </Box>
  );
};

export default Home;