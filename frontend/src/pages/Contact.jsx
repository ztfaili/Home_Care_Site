import { Container, Box, Heading, Text, VStack, Input, Textarea, Button, FormControl, FormLabel, SimpleGrid, Icon, HStack, useToast, Image, InputGroup, InputLeftAddon, FormErrorMessage } from "@chakra-ui/react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { growLine } from "../components/LineAnimation";
import { useState } from "react";
import Bottom from "../components/Bottom";
import { useEffect } from "react";
import InputMask from "react-input-mask";
import { createContact } from "../services/contact";

const Contact = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [validPhone, setValidPhone] = useState(true); 
  const [validEmail, setValidEmail] = useState(true);

  const toast = useToast();
  const submitForm = async (e) => {
    e.preventDefault(); // prevents page refresh
    // basic validation
    const isError = input.email === '' || input.name === '' || input.phone === '' || input.message === '' || !validPhone || !validEmail;
    if (isError) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const result = await createContact(input);
    if(result.success) {
      toast({
        title: "Success",
        description: "Form submitted successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setInput({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } else {
      toast({
        title: "Error",
        description: "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.lg" py={20}>
      <VStack spacing={8} textAlign="center">
        <Box>
          <Heading 
            size="2xl" 
            mb={2} 
            textShadow={"2px 2px 4px rgba(86, 84, 84, 0.3)"}
          >
            Contact Us
          </Heading>
          <Box
            height="4px"
            width="280px"  
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
            bg={"white"}
            p={8}
            borderRadius="md"
            boxShadow="md"
            w="full"
          >
            <VStack spacing={6}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text" 
                  placeholder="Your Name" 
                  value={input.name}
                  onChange={(e) => {
                      setInput({...input, name: e.target.value});
                    }
                  }
                />
              </FormControl>
              <FormControl isRequired isInvalid={!validEmail}>
                <FormLabel>Email</FormLabel>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  value={input.email} 
                  onChange={(e) => {
                      setInput({...input, email: e.target.value})
                      setValidEmail(emailRegex.test(e.target.value));
                    }
                  }
                />
                {!validEmail && <FormErrorMessage>Please enter a valid email address!</FormErrorMessage>}
              </FormControl>
              <FormControl isRequired isInvalid={!validPhone}>
                <FormLabel>Phone</FormLabel>
                <InputGroup>
                  <InputLeftAddon>+1</InputLeftAddon>
                  <InputMask
                    mask="(999) 999-9999"
                    value={input.phone}
                    onChange={(e) => {
                        setInput({ ...input, phone: e.target.value });
                        setValidPhone(phoneRegex.test(e.target.value));
                      }
                    }
                  >
                    {(inputProps) => (
                      <Input
                        {...inputProps}
                        type="tel"
                        placeholder="(123) 456-7890"
                      />
                    )}
                  </InputMask>
                </InputGroup>
                {!validPhone && <FormErrorMessage>Please enter a valid phone number!</FormErrorMessage>}
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea 
                  placeholder="Your message..." 
                  rows={6} 
                  value={input.message} 
                  onChange={(e) => setInput({...input, message: e.target.value})}
                />
              </FormControl>
              <Button colorScheme="blue" size="lg" w="full" onClick={submitForm}>
                Send Message
              </Button>
            </VStack>
          </Box>

          {/* Contact Info */}
          <VStack mt={"10"} spacing={8} align="start" justify="center">
            <Heading size="lg">Shoot us a message!</Heading>
            <Image
              src="https://plus.unsplash.com/premium_photo-1663054397533-2a3fb0cab5de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGNhcmV8ZW58MHx8MHx8fDA%3D"
            />
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
        <Bottom />
      </VStack>
    </Container>
  );
};

export default Contact;
