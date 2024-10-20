import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  HStack,
  Badge,
  Box,
  VStack,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <Card
      direction="column"
      overflow="hidden"
      variant="outline"
      borderWidth={2}
      borderColor="brand.100"
      _hover={{ transform: 'translateY(-8px)', boxShadow: 'xl', borderColor: 'brand.500' }}
      transition="all 0.3s"
      height="400px"
      display="flex"
      flexDirection="column"
    >
      <CardHeader>
        <Heading size="md" color="brand.500">{service.name}</Heading>
      </CardHeader>

      <CardBody flex="1" overflow="hidden">
        <VStack align="start" spacing={2} height="100%">
          <Text fontSize="2xl" fontWeight="bold" color="gray.700">
            ${service.price}
          </Text>
          <HStack>
            <StarIcon color="yellow.400" />
            <Text fontWeight="semibold">{service.rating.toFixed(1)}</Text>
          </HStack>
          <Text color="gray.600" noOfLines={3} flex="1">
            {service.description}
          </Text>
        </VStack>
      </CardBody>

      <CardFooter>
        <Button
          as={RouterLink}
          to={`/booking/${service.id}`}
          colorScheme="brand"
          width="full"
        >
          Book Now
        </Button>
      </CardFooter>

      <Badge
        position="absolute"
        top={2}
        right={2}
        colorScheme="brand"
        variant="solid"
        transform="rotate(15deg)"
      >
        New
      </Badge>
    </Card>
  );
};

export default ServiceCard;