import React from 'react';
import { Box, Container, Stack, Text, Link, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.50" color="gray.700" as="footer">
      <Container maxW="container.xl" py={10}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={8} justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold">
            UTH Hair Salon
          </Text>
          <Stack direction="row" spacing={6}>
            <Link href="#">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">Portfolio</Link>
            <Link href="#">Contact</Link>
          </Stack>
          <Stack direction="row" spacing={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} colorScheme="brand" variant="ghost" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} colorScheme="brand" variant="ghost" />
          </Stack>
        </Stack>
        <Text mt={8} textAlign="center">
          © {new Date().getFullYear()} UTH Hair Salon. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;