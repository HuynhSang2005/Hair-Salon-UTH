import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  Image,
  IconButton,
  useDisclosure,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const MenuItems = () => (
    <>
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
    </>
  );

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

        {/* Desktop Menu */}
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          <MenuItems />
        </HStack>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          aria-label="Open menu"
          variant="ghost"
        />
      </Flex>

      {/* Mobile Menu Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <MenuItems />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;