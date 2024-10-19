import React from 'react'
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  const bgColor = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('brand.100', 'brand.600')
  const hoverBgColor = useColorModeValue('brand.50', 'brand.700')

  return (
    <Box
      p={6}
      boxShadow="lg"
      borderRadius="xl"
      bg={bgColor}
      borderWidth={2}
      borderColor={borderColor}
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-8px)', boxShadow: 'xl', bg: hoverBgColor }}
      cursor="pointer"
      position="relative"
      overflow="hidden"
      minHeight="20px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Ensure equal spacing between elements */}
      <VStack align="start" spacing={4} flex="1" justify="space-between">
        <Box>
          <Heading as="h3" size="lg" color="brand.500" mb={2}>
            {service.name}
          </Heading>
          <Text fontSize="2xl" fontWeight="bold" color="gray.700">
            ${service.price}
          </Text>
        </Box>
        
        {/* Star rating and reviews aligned */}
        <HStack>
          <StarIcon color="yellow.400" />
          <Text fontWeight="semibold">{service.rating.toFixed(1)}</Text>
        </HStack>

        {/* Limit description to 3 lines */}
        <Text noOfLines={3} color="gray.600">
          {service.description}
        </Text>
      </VStack>

      {/* "Book Now" Button fixed at the bottom */}
      <Button
        as={RouterLink}
        to={`/booking/${service.id}`}
        colorScheme="brand"
        size="md"
        width="full"
        mt={4}
      >
        Book Now
      </Button>

      {/* New badge */}
      <Box
        position="absolute"
        top="-20px"
        right="-20px"
        bg="brand.500"
        color="white"
        width="80px"
        height="80px"
        transform="rotate(45deg)"
        display="flex"
        alignItems="flex-end"
        justifyContent="center"
        paddingBottom="5px"
        fontWeight="bold"
      >
        New
      </Box>
    </Box>
  )
}

export default ServiceCard
