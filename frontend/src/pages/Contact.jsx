import {Container, Box, Heading, Text, VStack, Input, Textarea, Button, FormControl, FormLabel, SimpleGrid, Icon, HStack, useColorModeValue } from "@chakra-ui/react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { growLine } from "../components/LineAnimation";

const Contact = () => {
  const inputBg = useColorModeValue("white", "gray.700");

  return (
    <Container maxW="container.lg" py={20}>
      <VStack spacing={8} textAlign="center">
        <Box>
          <Heading size="2xl" mb={2}>
            Contact Us
          </Heading>
          <Box
            height="4px"
            width="300px"  
            bg="blue.500"
            mx="auto"
            borderRadius="30px 30px 30px 30px"
            mb={4}
            transformOrigin="left"
            animation={`${growLine} 1.5s ease-out forwards`}
          />
          <Text fontSize="lg" maxW="xl" mx="auto" color="gray.600">
            Have questions or need help? Fill out the form below and we'll get
            back to you as soon as possible.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
          {/* Contact Form */}
          <Box
            as="form"
            bg={inputBg}
            p={8}
            borderRadius="md"
            boxShadow="md"
            w="full"
          >
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your Name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="your@email.com" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your message..." rows={6} />
              </FormControl>
              <Button colorScheme="blue" size="lg" w="full">
                Send Message
              </Button>
            </VStack>
          </Box>

          {/* Contact Info */}
          <VStack spacing={6} align="start" justify="center">
            <HStack spacing={4}>
              <Icon as={MdEmail} w={6} h={6} color="blue.500" />
              <Text fontSize="md">support@yourcompany.com</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={MdPhone} w={6} h={6} color="blue.500" />
              <Text fontSize="md">+1 (555) 123-4567</Text>
            </HStack>
            <HStack spacing={4}>
              <Icon as={MdLocationOn} w={6} h={6} color="blue.500" />
              <Text fontSize="md">123 Main Street, Your City, USA</Text>
            </HStack>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Contact;
