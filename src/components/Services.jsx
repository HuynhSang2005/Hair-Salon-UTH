import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Input,
  VStack,
} from '@chakra-ui/react';
import ServiceCard from '../components/ServiceCard';

const services = [
  { id: 1, name: 'Cắt tóc', price: 30, description: 'Cắt tóc chuyên nghiệp cho mọi kiểu tóc', duration: 30, rating: 4.5 },
  { id: 2, name: 'Gội đầu và massage da đầu', price: 80, description: 'Dịch vụ nhuộm tóc toàn bộ', duration: 120, rating: 4.7 },
  { id: 3, name: 'Nhuộm tóc', price: 100, description: 'Nhuộm highlight toàn phần hoặc một phần', duration: 90, rating: 4.3 },
  { id: 4, name: 'Balayage', price: 150, description: 'Nhuộm highlight bằng tay tạo vẻ tự nhiên', duration: 150, rating: 4.9 },
  { id: 5, name: 'Uốn tóc', price: 200, description: 'Dịch vụ làm mượt tóc cho tóc xù', duration: 180, rating: 4.2 },
  { id: 6, name: 'Duỗi tóc', price: 120, description: 'Uốn xoăn vĩnh viễn cho các kiểu tóc xoăn', duration: 120, rating: 4.6 },
  { id: 7, name: 'Tạo kiểu tóc (dự tiệc, sự kiện)', price: 40, description: 'Sấy và tạo kiểu tóc chuyên nghiệp', duration: 45, rating: 4.8 },
  { id: 8, name: 'Dưỡng tóc (hấp dầu, phục hồi tóc hư tổn)', price: 70, description: 'Tạo kiểu tóc trang trọng cho các dịp đặc biệt', duration: 60, rating: 4.4 },
  { id: 9, name: 'Chăm sóc da đầu', price: 50, description: 'Điều trị tóc chuyên sâu cho tóc hư tổn', duration: 45, rating: 4.1 },
  { id: 10, name: 'Tẩy tóc', price: 60, description: 'Điều trị da đầu cho sức khỏe da đầu', duration: 45, rating: 3.9 },
  { id: 11, name: 'Tạo kiểu râu và cạo râu', price: 250, description: 'Dịch vụ nối tóc chuyên nghiệp', duration: 180, rating: 4.7 },
  { id: 12, name: 'Men\'s Grooming', price: 35, description: 'Cắt tóc và tỉa râu cho nam giới', duration: 45, rating: 4.3 },
  { id: 13, name: 'Children\'s Haircut', price: 25, description: 'Cắt tóc cho trẻ em dưới 12 tuổi', duration: 30, rating: 4.5 },
  { id: 14, name: 'Dập xù', price: 150, description: 'Tạo kiểu tóc ngày cưới', duration: 120, rating: 4.9 },
];



const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center">
            Our Services
          </Heading>
          <Text textAlign="center" fontSize="lg">
            Discover our wide range of professional hair care services
          </Text>
          <Input
            placeholder="Search for a service"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="lg"
            maxW="600px"
            mx="auto"
          />
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {filteredServices.map((service) => (
              // Sử dụng ServiceCard để render mỗi dịch vụ
              <ServiceCard key={service.id} service={service} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Services;