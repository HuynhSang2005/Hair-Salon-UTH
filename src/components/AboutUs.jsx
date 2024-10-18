import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Flex,
  Avatar,
  Badge,
} from '@chakra-ui/react';

const Staff = () => {
  const staffMembers = [
    {
      name: 'Wrxdie',
      experience: '10 years of experience',
      image: 'https://th.bing.com/th/id/OIP.VzbP44Q6cDXdsEcnc5pW3wHaHa?rs=1&pid=ImgDetMain',
      specialties: ['Coloring', 'Styling'],
    },
    {
      name: 'Tlinh',
      experience: '8 years of experience',
      image: 'https://photo-baomoi.bmcdn.me/w700_r1/2022_12_08_20_44492268/3b666cb949f4a0aaf9e5.jpg',
      specialties: ['Cutting', 'Bridal'],
    },
    {
      name: 'MCK',
      experience: '15 years of experience',
      image: 'https://giaingo.info/wp-content/uploads/2021/10/4-6.jpg',
      specialties: ['Men\'s Grooming', 'Beard Trimming'],
    },
    {
      name: 'DRT',
      experience: '7 years of experience',
      image: 'https://example.com/hieuthuhai.jpg',
      specialties: ['Extensions', 'Treatments'],
    },
    {
      name: 'Gill',
      experience: '7 years of experience',
      image: 'https://example.com/hieuthuhai.jpg',
      specialties: ['Extensions', 'Treatments'],
    },
    {
      name: 'Robber',
      experience: '7 years of experience',
      image: 'https://example.com/hieuthuhai.jpg',
      specialties: ['Extensions', 'Treatments'],
    },
    {
      name: 'Hieuthuhai',
      experience: '7 years of experience',
      image: 'https://example.com/hieuthuhai.jpg',
      specialties: ['Extensions', 'Treatments'],
    },
    {
      name: 'Wean',
      experience: '7 years of experience',
      image: 'https://example.com/hieuthuhai.jpg',
      specialties: ['Extensions', 'Treatments'],
    },
  ];

  return (
    <Box py={16} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading as="h2" size="2xl" textAlign="center" color="brand.500">
            Meet Our Expert Stylists
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {staffMembers.map((member, index) => (
              <Box
                key={index}
                bg="white"
                p={6}
                borderRadius="xl"
                boxShadow="lg"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
              >
                <VStack spacing={4} align="center">
                  <Avatar size="2xl" src={member.image} name={member.name} />
                  <Heading as="h3" size="lg" textAlign="center">
                    {member.name}
                  </Heading>
                  <Text fontStyle="italic" color="gray.600">{member.experience}</Text>
                  <Flex wrap="wrap" justify="center" gap={2}>
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} colorScheme="brand" fontSize="sm">
                        {specialty}
                      </Badge>
                    ))}
                  </Flex>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

const AboutUs = () => {
  return (
    <Box>
      <Box py={16}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading as="h1" size="2xl" mb={4} color="brand.500">
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
                <Heading as="h2" size="xl" color="brand.500">
                  Our Mission
                </Heading>
                <Text fontSize="lg">
                  We believe that every customer deserves beautiful hair that reflects their unique personality and style. Our mission is to bring the latest hair trends, combined with professional techniques to create unique and most suitable hairstyles for each customer.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
      <Staff />
    </Box>
  )
}

export default AboutUs;