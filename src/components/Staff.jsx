import React from 'react';
import { Avatar, Badge, Box, Container, Flex, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';

const Staff = ({staffMembers}) => {
  console.log(1+staffMembers);
  const members = staffMembers || [];

  return (
    <Box py={16} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Heading as="h2" size="2xl" textAlign="center" color="brand.500">
            Meet Our Expert Stylists
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {members.map((member, index) => (
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

export default Staff;