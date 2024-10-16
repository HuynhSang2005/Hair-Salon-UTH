import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, HStack, Link, Button, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      as="header"
      bg="white"
      boxShadow="sm"
      position="fixed"
      width="100%"
      zIndex="1000"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
        px={4}
        py={4}
      >
        <Link as={RouterLink} to="/">
          <Image src="/logo.png" alt="UTH Hair Salon" h="40px" />
        </Link>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" fontWeight="medium">
            Home
          </Link>
          <Link as={RouterLink} to="/services" fontWeight="medium">
            Services
          </Link>
          <Link as={RouterLink} to="/about" fontWeight="medium">
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" fontWeight="medium">
            Contact
          </Link>
          <Button as={RouterLink} to="/auth" colorScheme="brand" size="md">
            Book Now
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;