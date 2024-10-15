import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

const Portfolio = () => {
  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl" mb={8}>Our Portfolio</Heading>
        <Text>This is the Portfolio page. Add your content here.</Text>
      </Container>
    </Box>
  );
};

export default Portfolio;