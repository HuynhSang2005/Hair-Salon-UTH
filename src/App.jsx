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
  const services = [
    {
      id: 1,
      name: 'Cắt tóc',
      price: 30,
      description: 'Cắt tóc chuyên nghiệp cho mọi kiểu tóc',
      duration: 30,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Gội đầu và massage da đầu',
      price: 80,
      description: 'Dịch vụ nhuộm tóc toàn bộ',
      duration: 120,
      rating: 4.7,
    },
    {
      id: 3,
      name: 'Nhuộm tóc',
      price: 100,
      description: 'Nhuộm highlight toàn phần hoặc một phần',
      duration: 90,
      rating: 4.3,
    },
    {
      id: 4,
      name: 'Balayage',
      price: 150,
      description: 'Nhuộm highlight bằng tay tạo vẻ tự nhiên',
      duration: 150,
      rating: 4.9,
    },
    {
      id: 5,
      name: 'Uốn tóc',
      price: 200,
      description: 'Dịch vụ làm mượt tóc cho tóc xù',
      duration: 180,
      rating: 4.2,
    },
    {
      id: 6,
      name: 'Duỗi tóc',
      price: 120,
      description: 'Uốn xoăn vĩnh viễn cho các kiểu tóc xoăn',
      duration: 120,
      rating: 4.6,
    },
    {
      id: 7,
      name: 'Tạo kiểu tóc (dự tiệc, sự kiện)',
      price: 40,
      description: 'Sấy và tạo kiểu tóc chuyên nghiệp',
      duration: 45,
      rating: 4.8,
    },
    {
      id: 8,
      name: 'Dưỡng tóc (hấp dầu, phục hồi tóc hư tổn)',
      price: 70,
      description: 'Tạo kiểu tóc trang trọng cho các dịp đặc biệt',
      duration: 60,
      rating: 4.4,
    },
    {
      id: 9,
      name: 'Chăm sóc da đầu',
      price: 50,
      description: 'Điều trị tóc chuyên sâu cho tóc hư tổn',
      duration: 45,
      rating: 4.1,
    },
    {
      id: 10,
      name: 'Tẩy tóc',
      price: 90,
      description: 'Điều trị da đầu cho sức khỏe da đầu',
      duration: 45,
      rating: 3.9,
    },
    {
      id: 11,
      name: 'Nối tóc',
      price: 250,
      description: 'Dịch vụ nối tóc chuyên nghiệp',
      duration: 180,
      rating: 4.7,
    },
    {
      id: 12,
      name: 'Cạo râu',
      price: 35,
      description: 'tỉa râu cho nam giới',
      duration: 45,
      rating: 4.3,
    },
    {
      id: 13,
      name: 'Cắt tóc cho trẻ em',
      price: 25,
      description: 'Cắt tóc cho trẻ em dưới 12 tuổi',
      duration: 30,
      rating: 4.5,
    },
    {
      id: 14,
      name: 'Dập xù',
      price: 150,
      description: 'Tạo kiểu tóc ngày cưới',
      duration: 120,
      rating: 4.9,
    },
  ];

  const staffMembers = [
    {
      id: 1,
      name: 'Wrxdie',
      experience: '10 years of experience',
      image:'https://th.bing.com/th/id/OIP.VzbP44Q6cDXdsEcnc5pW3wHaHa?rs=1&pid=ImgDetMain',
    },
    {
      id: 2,
      name: 'Tlinh',
      experience: '8 years of experience',
      image:'https://photo-baomoi.bmcdn.me/w700_r1/2022_12_08_20_44492268/3b666cb949f4a0aaf9e5.jpg',
    },
    {
      id: 3,
      name: 'MCK',
      experience: '15 years of experience',
      image: 'https://cdn.alongwalk.info/vn/wp-content/uploads/2022/04/28032615/image-diem-danh-nhung-kieu-toc-cua-mck-hot-hit-nhat-165106597577480.jpg',
    },
    {
      name: 'DRT',
      experience: '3 years of experience',
      image: 'https://instagram.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/455077601_18465479203005471_4714271326146797802_n.jpg?stp=dst-jpg_e35_p720x720&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYzMDgwOC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fsgn2-9.fna.fbcdn.net&_nc_cat=103&_nc_ohc=0p5uVhYIzYUQ7kNvgE5KjQg&_nc_gid=a4c6073c16d9446094b58ab0693cd234&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzQzMjE4NDQ1MTU2NzA0NTUyOQ%3D%3D.3-ccb7-5&oh=00_AYBjisPZJdeCzZxWuFo9eBT4twpVjLDd2GiXQFbWxdlNTA&oe=67190C10&_nc_sid=7a9f4b',
    },
    {
      id: 4,
      name: 'Vstra',
      experience: '7 years of experience',
      image: 'https://th.bing.com/th/id/OIP.ep59mUhrqfYdgTInhU0NtwHaHC?rs=1&pid=ImgDetMain',
    },
    {
      id: 5,
      name: 'Obito',
      experience: '6 years of experience',
      image: 'https://kenh14cdn.com/203336854389633024/2023/10/13/3j7a3930-copy2-16971810589542076781271.jpg',
    },{
      id: 5,
      name: 'Gill',
      experience: '2 years of experience',
      image: 'https://dispatch.vn/wp-content/uploads/2022/11/gillian9463.jpg',
    },
    {
      id: 6,
      name: 'Robber',
      experience: '5 years of experience',
      image: 'https://img.vietcetera.com/uploads/images/27-oct-2021/tkkk49072.jpg',
    },
  ];

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
            <Route
              path="/"
              element={
                <HomePage 
                services={services}
                staffMembers={staffMembers} 
                />
              }
            />
            <Route
              path="/services"
              element={<ServicesPage
              services={services}
            />}
            />
            <Route
              path="/about"
              element={<AboutUsPage
              staffMembers={staffMembers}
            />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route
              path="/booking/:serviceId"
              element={<BookingPage 
              services={services}
              staffMembers={staffMembers}
              />}
            />
          </Routes>
        </MotionBox>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
