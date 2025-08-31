import {
  Container,
  VStack,
  Text,
  HStack,
  Heading,
  Box,
  Grid,
  GridItem,
  Flex,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { growLine } from "../components/LineAnimation";
import GoogleMap from "../components/GoogleMap";
import { IoMdFlower } from "react-icons/io";
import { PiFlowerDuotone } from "react-icons/pi";
import Bottom from "../components/Bottom";

const Services = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    notes: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with API call logic
    toast({
      title: "Form submitted!",
      description: "We will contact you shortly.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "",
      notes: "",
    });
  };

  return (
    <Container maxW="container.lg" py={20} mt={8}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={4}>
        <Box>
          <Heading
            size="2xl"
            textShadow={"2px 2px 4px rgba(86, 84, 84, 0.3)"}
            align="center"
          >
            Our Services
          </Heading>
          <Box
            mt={2}
            height="4px"
            width="280px"
            bg="blue.500"
            mx="auto"
            borderRadius="30px"
            transformOrigin="left"
            animation={`${growLine} 1.5s ease-out forwards`}
          /> 
          <Text fontSize="2xl" mt={4}> {/* Milwaukee, Ozaukee, Washington, and Waukesha */}
            We offer services in the following counties:
          </Text>
          <List spacing={3} ml={5} mt={4}>
            <ListItem>
              <ListIcon as={PiFlowerDuotone} color='yellow.500' />
              Milwaukee
            </ListItem>
            <ListItem>
              <ListIcon as={PiFlowerDuotone} color='yellow.200' />
              Ozaukee
            </ListItem>
            <ListItem>
              <ListIcon as={PiFlowerDuotone} color='yellow.500' />
              Washington
            </ListItem>
            <ListItem>
              <ListIcon as={PiFlowerDuotone} color='yellow.200' />
              Waukesha
            </ListItem>
          </List>
          <Box mt={6}>
            <APIProvider apiKey="AIzaSyAfPs5ZRHzBeMEsMhuYziBnTEZztg40W9A">
              <GoogleMap />
            </APIProvider>
          </Box>
        </Box>

        <Box bg="white" p={8} boxShadow="md" borderRadius="lg">
          <Heading size="lg" mb={4}>
            Sign Up for Home Care Services
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Home Address</FormLabel>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Type of Service Needed</FormLabel>
                <Input
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Additional Notes</FormLabel>
                <Textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                width="100%"
                mt={4}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </SimpleGrid>
      <Bottom />
    </Container>
  );
};

export default Services;
