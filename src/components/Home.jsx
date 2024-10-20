import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';

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
  Image,
} from '@chakra-ui/react';

const Home = ({services, staffMembers}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const topServices = services.sort((a, b) => b.rating - a.rating).slice(0, 4);

  const [showAll, setShowAll] = useState(false);
  const displayedStaff = showAll ? staffMembers : staffMembers.slice(0, 3);

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

  <Container maxW="container.xl" py={10} style={{marginBottom: '-50px'}}>
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
        {filteredServices.map((service, index) => (
          <Box 
            key={service.id}
            display="flex"
            flexDirection="column"
            justifyContent="stretch"
            height="80%" 
          >
            
            <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
              <ServiceCard service={service} key={index} />
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Box textAlign="center">
        <Button 
          as={RouterLink} 
          to="/services" 
          colorScheme="brand" 
          size="lg"
          style={{marginTop: '-120px'}}
        >
          View All Services
        </Button>
      </Box>
    </VStack>
</Container> {/*display Top Services*/}

      <Box bg="gray.50" py={6}>
        <Container maxW="container.xl">
          <Heading as="h2" size="2xl" textAlign="center" mb={12}>
            Our Professional Team
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {displayedStaff.map((member, index) => (
              <VStack
                key={index}
                bg="white"
                p={6}
                borderRadius="md"
                boxShadow="md"
                align="center"
                spacing={4}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  borderRadius="full"
                  boxSize="150px"
                  objectFit="cover"
                />
                <Heading as="h3" size="lg">
                  {member.name}
                </Heading>
                <Text>{member.experience}</Text>
              </VStack>
            ))}
          </SimpleGrid>
          {!showAll && (
            <Box textAlign="center" mt={8}>
              <Button
                as={RouterLink}
                to="/about"
                colorScheme="brand"
                size="lg"
                onClick={() => setShowAll(true)}
              >
                View More
              </Button>
            </Box>
          )}
        </Container>
      </Box> {/*Display Taff*/}
      <Testimonials />
      <ContactForm />
    </Box>
  );
};

export default Home;