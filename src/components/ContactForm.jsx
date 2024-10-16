import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';

const ContactForm = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    toast({
      title: 'Đã gửi tin nhắn',
      description: 'Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box py={16} bg="gray.50">
      <Container maxW="container.md">
        <VStack spacing={8} align="stretch">
          <Heading as="h2" size="xl" textAlign="center">
            Get in touch
          </Heading>
          <Text textAlign="center">
            Hãy điền thông tin của bạn, chúng tôi sẽ liên hệ lại sớm nhất có thể.
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Họ và tên</FormLabel>
                <Input type="text" placeholder="Nhập họ và tên của bạn" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Nhập địa chỉ email của bạn" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Số điện thoại</FormLabel>
                <Input type="tel" placeholder="Nhập số điện thoại của bạn" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Tin nhắn</FormLabel>
                <Textarea placeholder="Nhập tin nhắn của bạn" rows={4} />
              </FormControl>
              <Button type="submit" colorScheme="brand" size="lg" width="full">
                Gửi tin nhắn
              </Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactForm;