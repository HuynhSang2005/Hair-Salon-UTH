import React from 'react';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Heading as="h1" size="2xl">Contact Us</Heading>
          <Text fontSize="xl" textAlign="center">
            We'd love to hear from you! Whether you have a question about our services, want to book an appointment, or just want to say hello, feel free to reach out to us.
          </Text>
          <ContactForm />
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;