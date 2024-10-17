import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
  Center,
} from '@chakra-ui/react';
import Staff from '../components/Staff';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    { name: 'Haircut', price: 30, description: 'Professional haircut for all styles', rating: 4.8 },
    { name: 'Hair Coloring', price: 80, description: 'Full hair coloring service', rating: 4.9 },
    { name: 'Styling', price: 50, description: 'Hair styling for special occasions', rating: 4.7 },
    { name: 'Hair Treatment', price: 60, description: 'Deep conditioning and repair treatment', rating: 4.6 },
  ];

  const topServices = services.sort((a, b) => b.rating - a.rating).slice(0, 4);

  const filteredServices = topServices.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <ServiceCard key={service.name} service={service} />
            ))}
          </SimpleGrid>
          <Center>
            <Button 
              as={RouterLink} 
              to="/services" 
              colorScheme="brand" 
              size="lg"
            >
              View More Services
            </Button>
          </Center>
        </VStack>
      </Container>
      <Staff />
      <Testimonials />
      <ContactForm />
    </Box>
  );
};

export default Home;