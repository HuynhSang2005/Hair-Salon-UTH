import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
} from '@chakra-ui/react';
import Staff from './Staff';

const AboutUs = () => {
  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              About UTH Hair Salon
            </Heading>
            <Text fontSize="xl" maxW="800px" mx="auto">
              UTH Hair Salon is a place where you can trust to create stunning beauty for your hair. With our team of professional stylists and years of experience, we are committed to providing you with the best experiences.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="UTH Hair Salon"
              borderRadius="md"
              objectFit="cover"
              h="400px"
            />
            <VStack align="start" justify="center" spacing={4}>
              <Heading as="h2" size="xl">
                Our Mission
              </Heading>
              <Text fontSize="lg">
                We believe that every customer deserves beautiful hair that reflects their unique personality and style. Our mission is to bring the latest hair trends, combined with professional techniques to create unique and most suitable hairstyles for each customer.
              </Text>
            </VStack>
          </SimpleGrid>
          <Staff />
        </VStack>
      </Container>
    </Box>
  )
}
export default AboutUs;