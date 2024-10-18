import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Input,
  VStack,
} from '@chakra-ui/react';
import ServiceCard from '../components/ServiceCard';


const Services = ({services}) => {

  const [searchTerm, setSearchTerm] = useState('');

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
              // Sử dụng ServiceCard để render mỗi dịch vụ
              <ServiceCard key={service.id} service={service} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Services;