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
  Checkbox, 
  Portal, 
  Select,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import { growLine } from "../components/LineAnimation";
import GoogleMap from "../components/GoogleMap";
import { PiFlowerDuotone } from "react-icons/pi";
import Bottom from "../components/Bottom";
import { createService } from './../services/service';


const Services = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: [],
    relationship: "",
    notes: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleCheckboxChange = (e) => {
  const { value, checked } = e.target;

  setFormData((prev) => {
    const newServiceType = checked
      ? [...prev.serviceType, value] // add if checked
      : prev.serviceType.filter((type) => type !== value); // remove if unchecked

    return {
      ...prev,
      serviceType: newServiceType,
    };
  });
};

  const submitForm = async (e) => {
    e.preventDefault(); // prevents page refresh
    // basic validation
    const isError = formData.email === '' || formData.name === '' || formData.phone === '' || formData.message === '' || formData.address === '' || formData.serviceType.length === 0 || formData.relationship === '';
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
    const result = await createService(formData);
    if(result.success) {
      toast({
        title: "Success",
        description: "Form submitted successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        serviceType: [],
        relationship: "",
        notes: "",
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
          <form onSubmit={submitForm}>
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
                <HStack spacing={14}>
                  <VStack align="start">
                    <Checkbox
                      name="serviceType" 
                      value="Bedside Care" 
                      onChange={handleCheckboxChange}
                      isChecked={formData.serviceType.includes("Bedside Care")}
                    >
                      Bedside Care
                    </Checkbox>
                    <Checkbox
                      name="serviceType" 
                      value="Mobility" 
                      onChange={handleCheckboxChange}
                      isChecked={formData.serviceType.includes("Mobility")}
                    >
                      Mobility
                    </Checkbox>
                  </VStack>
                  <VStack>
                    <Checkbox
                      name="serviceType" 
                      value="Companionship" 
                      onChange={handleCheckboxChange}
                      isChecked={formData.serviceType.includes("Companionship")}
                    >
                      Companionship
                    </Checkbox>
                    <Checkbox
                      name="serviceType" 
                      value="Diet & Nutrition" 
                      onChange={handleCheckboxChange}
                      isChecked={formData.serviceType.includes("Diet & Nutrition")}
                    >
                      Diet & Nutrition
                    </Checkbox>
                  </VStack>
                </HStack>
              </FormControl>
              <FormControl>
                <FormLabel>Relationship to Patient</FormLabel>
                <Select
                  name="relationship"
                  placeholder="Select relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  multiple={false}
                >
                  <option value="Self">Self</option>
                  <option value="Family">Family</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </Select>
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
