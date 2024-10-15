import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Input,
  VStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const services = [
  { name: 'Haircut', price: 30, description: 'Professional haircut for all styles' },
  { name: 'Hair Coloring', price: 80, description: 'Full hair coloring service' },
  { name: 'Highlights', price: 100, description: 'Partial or full highlights' },
  { name: 'Balayage', price: 150, description: 'Hand-painted highlights for a natural look' },
  { name: 'Keratin Treatment', price: 200, description: 'Smoothing treatment for frizzy hair' },
  { name: 'Perm', price: 120, description: 'Permanent waves for curly styles' },
  { name: 'Blowout', price: 40, description: 'Professional blow dry and style' },
  { name: 'Updo', price: 70, description: 'Formal hairstyling for special occasions' },
  { name: 'Deep Conditioning', price: 50, description: 'Intensive hair treatment for damaged hair' },
  { name: 'Scalp Treatment', price: 60, description: 'Therapeutic treatment for scalp health' },
  { name: 'Hair Extensions', price: 250, description: 'Professional hair extension application' },
  { name: 'Men\'s Grooming', price: 35, description: 'Haircut and beard trim for men' },
  { name: 'Children\'s Haircut', price: 25, description: 'Haircuts for kids under 12' },
  { name: 'Bridal Hair', price: 150, description: 'Wedding day hairstyling' },
  { name: 'Hair Straightening', price: 180, description: 'Long-lasting straightening treatment' },
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
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {filteredServices.map((service) => (
              <Box
                key={service.name}
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
                <Button colorScheme="brand" size="sm">
                  Book Now
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Services;