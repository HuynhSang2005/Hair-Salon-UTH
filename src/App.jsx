import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import AuthPage from './pages/AuthPage';
import BookingPage from './pages/BookingPage';
import theme from './theme';
import AboutUsPage from './pages/AboutUsPage';

const MotionBox = motion(Box);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Header />
        <MotionBox
          as="main"
          pt="60px"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutUsPage  />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/booking/:serviceId" element={<BookingPage />} />
          </Routes>
        </MotionBox>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;