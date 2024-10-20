import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Chị Tèo',
      country: 'Nước mẽo',
      text: 'Bla bla bla',
    },
    {
      name: 'Vợ méc xai',
      country: 'Nước éc hen',
      text: 'Bla bla bla',
    },
  ];

  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <Heading as="h2" size="2xl" textAlign="center" mb={12}>
          What our Customers say...
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {testimonials.map((testimonial, index) => (
            <VStack
              key={index}
              bg="white"
              p={6}
              borderRadius="md"
              boxShadow="md"
              align="start"
              spacing={4}
            >
              <Text fontSize="lg" fontStyle="italic">
                "{testimonial.text}"
              </Text>
              <VStack align="start" spacing={0}>
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text fontSize="sm" color="gray.600">
                  {testimonial.country}
                </Text>
              </VStack>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Testimonials;
