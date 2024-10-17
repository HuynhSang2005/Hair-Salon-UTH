import React, { useState } from 'react';
import {
  Box,
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Text,
  Divider,
  InputGroup,
  InputRightElement,
  Link,
  useToast,
} from '@chakra-ui/react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!isValidEmail(loginEmail)) {
      showToast('Invalid email format', 'error');
      return;
    }
    console.log('Login:', { email: loginEmail, password: loginPassword });
    showToast('Login successful!', 'success');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!isValidEmail(registerEmail)) {
      showToast('Invalid email format', 'error');
      return;
    }
    if (!isValidPassword(registerPassword)) {
      showToast('Password must be at least 8 characters long and contain a mix of letters, numbers & symbols', 'error');
      return;
    }
    console.log('Register:', { firstName, lastName, email: registerEmail, password: registerPassword });
    showToast('Registration successful!', 'success');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const showToast = (message, status) => {
    toast({
      title: message,
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box pt={20} pb={16}>
      <Container maxW="container.md">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Sign up</Tab>
            <Tab>Log in</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4} align="stretch">
                <Heading as="h2" size="xl" textAlign="center">
                  Sign up
                </Heading>
                <Button leftIcon={<FaFacebook />} colorScheme="blue" variant="outline" width="full">
                  Sign up with Facebook
                </Button>
                <Button leftIcon={<FaGoogle />} colorScheme="red" variant="outline" width="full">
                  Sign up with Google
                </Button>
                <Divider />
                <Text textAlign="center">OR</Text>
                <form onSubmit={handleRegister}>
                  <VStack spacing={4}>
                    <FormControl id="firstName" isRequired >
                      <FormLabel>First name</FormLabel>
                      <Input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl id="lastName" isRequired>
                      <FormLabel>Last name</FormLabel>
                      <Input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="email"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                      />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Create a password</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      <Text fontSize="sm" color="gray.500">
                        Use 8 or more characters with a mix of letters, numbers & symbols
                      </Text>
                    </FormControl>
                    <Text fontSize="sm">
                      By creating an account, you agree to the{' '}
                      <Link color="blue.500">Terms of use</Link> and{' '}
                      <Link color="blue.500">Privacy Policy</Link>.
                    </Text>
                    <Button type="submit" colorScheme="brand" width="full">
                      Sign up
                    </Button>
                  </VStack>
                </form>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={4} align="stretch">
                <Heading as="h2" size="xl" textAlign="center">
                  Log in
                </Heading>
                <form onSubmit={handleLogin}>
                  <VStack spacing={4}>
                    <FormControl id="login-email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        type="email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </FormControl>
                    <FormControl id="login-password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Button type="submit" colorScheme="brand" width="full">
                      Log in
                    </Button>
                  </VStack>
                </form>
                <Divider />
                <Text textAlign="center">OR</Text>
                <Button leftIcon={<FaFacebook />} colorScheme="blue" variant="outline" width="full">
                  Continue with Facebook
                </Button>
                <Button leftIcon={<FaGoogle />} colorScheme="red" variant="outline" width="full">
                  Continue with Google
                </Button>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default AuthPage;