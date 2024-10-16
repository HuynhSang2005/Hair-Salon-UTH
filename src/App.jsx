import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthPage from './components/AuthPage';
import theme from './theme';

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
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </MotionBox>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;