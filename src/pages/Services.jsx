import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Input,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import ServiceCard from '../components/ServiceCard';

const services = [
  { name: 'Haircut', price: 30, description: 'Professional haircut for all styles', rating: 4.8 },
  { name: 'Hair Coloring', price: 80, description: 'Full hair coloring service', rating: 4.9 },
  { name: 'Highlights', price: 100, description: 'Partial or full highlights', rating: 4.7 },
  { name: 'Balayage', price: 150, description: 'Hand-painted highlights for a natural look', rating: 4.9 },
  { name: 'Keratin Treatment', price: 200, description: 'Smoothing treatment for frizzy hair', rating: 4.6 },
  { name: 'Perm', price: 120, description: 'Permanent waves for curly styles', rating: 4.5 },
  { name: 'Blowout', price: 40, description: 'Professional blow dry and style', rating: 4.7 },
  { name: 'Updo', price: 70, description: 'Formal hairstyling for special occasions', rating: 4.8 },
  { name: 'Deep Conditioning', price: 50, description: 'Intensive hair treatment for damaged hair', rating: 4.6 },
  { name: 'Scalp Treatment', price: 60, description: 'Therapeutic treatment for scalp health', rating: 4.5 },
  { name: 'Hair Extensions', price: 250, description: 'Professional hair extension application', rating: 4.7 },
  { name: 'Men\'s Grooming', price: 35, description: 'Haircut and beard trim for men', rating: 4.8 },
  { name: 'Children\'s Haircut', price: 25, description: 'Haircuts for kids under 12', rating: 4.6 },
  { name: 'Bridal Hair', price: 150, description: 'Wedding day hairstyling', rating: 4.9 },
  { name: 'Hair Straightening', price: 180, description: 'Long-lasting straightening treatment', rating: 4.7 },
];

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center">
            Our Services
          </Heading>
          <Text textAlign="center" fontSize="lg">
            Discover our wide range of professional hair care services
          </Text>
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
        </VStack>
      </Container>
    </Box>
  );
};

export default Services;