import { Container, VStack, Text, HStack, Heading } from "@chakra-ui/react"
import { useEffect } from "react";
import { APIProvider } from '@vis.gl/react-google-maps';
import GoogleMap from "../components/GoogleMap";

const Services = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <Container maxW="container.md" py={20}>
        <VStack spacing={8} boxSize="100%">
            <Text
                fontSize={"30"}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Services Page
            </Text>
            <HStack boxSize="100%">
              <VStack>
                <Heading>
                  Our Services
                </Heading>
                <Text>
                  We offer services in these locations: x, y, z
                </Text>
              </VStack>
              <APIProvider apiKey="AIzaSyAfPs5ZRHzBeMEsMhuYziBnTEZztg40W9A">
                <GoogleMap />
              </APIProvider>
            </HStack>
        </VStack>
    </Container>
  )
}

export default Services
