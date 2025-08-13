import { Container, VStack, Text, HStack, Heading, Box, Grid, GridItem, Flex, SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react";
import { APIProvider } from '@vis.gl/react-google-maps';
import { growLine } from "../components/LineAnimation";
import GoogleMap from "../components/GoogleMap";

const Services = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <Container maxW="container.lg" py={20}>
      <SimpleGrid columns={2} spacing={2} mt={4}>
        <Box>
          <Heading 
            size="2xl" 
            textShadow={"2px 2px 4px rgba(86, 84, 84, 0.3)"}
            align="center"
          >
            Our Services
          </Heading>
        </Box>
        
        <Box>
          <Text fontSize="xl">
            We offer services in the following counties: Milwaukee, Ozaukee, Washington, and Waukesha
          </Text>
        </Box>
        <Box
          mt={-2}
          height="4px"
          width="280px"  
          bg="blue.500"
          mx="auto"
          borderRadius="30px 30px 30px 30px"
          transformOrigin="left"
          animation={`${growLine} 1.5s ease-out forwards`}
        />
        <Box>
          <APIProvider apiKey="AIzaSyAfPs5ZRHzBeMEsMhuYziBnTEZztg40W9A">
            <GoogleMap />
          </APIProvider>
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default Services
