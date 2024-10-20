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
import { Link as RouterLink } from 'react-router-dom';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const toast = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login:', { identifier: loginIdentifier, password: loginPassword });
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
    console.log('Register:', { firstName, lastName, username, phoneNumber, email: registerEmail, password: registerPassword });
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
        <Tabs isFitted variant="enclosed" index={activeTab} onChange={(index) => setActiveTab(index)}>
          <TabList mb="1em">
            <Tab>Log in</Tab>
            <Tab>Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={4} align="stretch">
                <Heading as="h2" size="xl" textAlign="center">
                  Log in
                </Heading>
                <form onSubmit={handleLogin}>
                  <VStack spacing={4}>
                    <FormControl id="login-identifier" isRequired>
                      <FormLabel>Username or Email</FormLabel>
                      <Input
                        type="text"
                        value={loginIdentifier}
                        onChange={(e) => setLoginIdentifier(e.target.value)}
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
                <Text textAlign="center" mt={4}>
                  Don't have an account?{' '}
                  <Link color="brand.500" onClick={() => setActiveTab(1)}>
                    Sign up here
                  </Link>
                </Text>
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
            <TabPanel>
              <VStack spacing={4} align="stretch">
                <Heading as="h2" size="xl" textAlign="center">
                  Sign up
                </Heading>
                <form onSubmit={handleRegister}>
                  <VStack spacing={4}>
                    <FormControl id="firstName" isRequired>
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
                    <FormControl id="username" isRequired>
                      <FormLabel>Username</FormLabel>
                      <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </FormControl>
                    <FormControl id="phoneNumber" isRequired>
                      <FormLabel>Phone number</FormLabel>
                      <Input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                <Divider />
                <Text textAlign="center">OR</Text>
                <Button leftIcon={<FaFacebook />} colorScheme="blue" variant="outline" width="full">
                  Sign up with Facebook
                </Button>
                <Button leftIcon={<FaGoogle />} colorScheme="red" variant="outline" width="full">
                  Sign up with Google
                </Button>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};

export default Auth;