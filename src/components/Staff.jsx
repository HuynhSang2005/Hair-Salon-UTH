import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  Button,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Staff = () => {
  const [showAll, setShowAll] = useState(false);

  const staffMembers = [
    {
      name: 'Wrxdie',
      experience: '10 years of experience',
      image:
        'https://th.bing.com/th/id/OIP.VzbP44Q6cDXdsEcnc5pW3wHaHa?rs=1&pid=ImgDetMain',
    },
    {
      name: 'Tlinh',
      experience: '8 years of experience',
      image:
        'https://photo-baomoi.bmcdn.me/w700_r1/2022_12_08_20_44492268/3b666cb949f4a0aaf9e5.jpg',
    },
    {
      name: 'MCK',
      experience: '15 years of experience',
      image: 'https://giaingo.info/wp-content/uploads/2021/10/4-6.jpg',
    },
    {
      name: 'Hieuthuhai',
      experience: '7 years of experience',
      image: 'https://example.com/hieuthuhai.jpg',
    },
    {
      name: 'Wean',
      experience: '6 years of experience',
      image: 'https://example.com/wean.jpg',
    },
    {
      name: 'Wxrdie',
      experience: '9 years of experience',
      image: 'https://example.com/wxrdie.jpg',
    },
  ];

  const displayedStaff = showAll ? staffMembers : staffMembers.slice(0, 3);

  return (
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
    </Box>
  );
};

export default Staff;
