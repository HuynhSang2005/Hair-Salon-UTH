import React from 'react';
import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react';

const ContactForm = () => {
  const toast = useToast();
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('brand.100', 'brand.600');

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Đã gửi tin nhắn',
      description: 'Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box
      bg={bgColor}
      p={8}
      borderRadius="xl"
      boxShadow="xl"
      borderWidth={2}
      borderColor={borderColor}
      style={{marginBottom: "50px"}}
      width={{ base: '100%', md: '80%', lg: '60%' }}
      mx="auto"
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={6}>
          <Heading as="h2" size="xl" textAlign="center">
            Get in touch
          </Heading>
          <FormControl isRequired>
            <FormLabel>Họ và tên</FormLabel>
            <Input
              type="text"
              placeholder="Nhập họ và tên của bạn"
              focusBorderColor="brand.500"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Nhập địa chỉ email của bạn"
              focusBorderColor="brand.500"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Số điện thoại</FormLabel>
            <Input
              type="tel"
              placeholder="Nhập số điện thoại của bạn"
              focusBorderColor="brand.500"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Tin nhắn</FormLabel>
            <Textarea
              placeholder="Nhập tin nhắn của bạn"
              rows={4}
              focusBorderColor="brand.500"
            />
          </FormControl>
          <Button type="submit" colorScheme="brand" size="lg" width="full">
            Gửi tin nhắn
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ContactForm;
