import React, { useState } from 'react';
import { Box, Container, Heading, Text, Button, VStack, Input, SimpleGrid, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Staff from './Staff';
import Testimonials from './Testimonials';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    { name: 'Haircut', price: 30, description: 'Professional haircut for all styles' },
    { name: 'Hair Coloring', price: 80, description: 'Full hair coloring service' },
    { name: 'Styling', price: 50, description: 'Hair styling for special occasions' },
    { name: 'Hair Treatment', price: 60, description: 'Deep conditioning and repair treatment' },
  ];

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Box
        bgImage="url('/hero-image.jpg')"
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
            Our Services
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
              <Box key={service.name} p={6} boxShadow="md" borderRadius="md">
                <Heading as="h3" size="lg" mb={2}>
                  {service.name}
                </Heading>
                <Text fontSize="2xl" fontWeight="bold" mb={2}>
                  ${service.price}
                </Text>
                <Text>{service.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Staff />
      <Testimonials />
    </Box>
  );
};

export default Home;