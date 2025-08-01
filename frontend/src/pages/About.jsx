import { Container, VStack, Text, Box, Heading } from "@chakra-ui/react"
import { keyframes } from "@emotion/react";

const growLine = keyframes`
  from {
    transform: scaleX(0);
    transform-origin: left;
  }
  to {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const About = () => {
  return (
    <Container maxW="container.xl" py={20}> 
        {/* <Box 
            position="absolute" 
            top="100px" 
            left="100px" 
            p={4} 
            textShadow={"2px 2px 4px rgba(0, 0, 0, 0.3)"}
            zIndex={1}
        >
            <Heading as={"h1"} size="2xl" mb={8}>
                About Us And Our Team
            </Heading>
        </Box>
        <Box spacing={8} py={40} position="absolute" top="50px" left="50px">
            <Text
                fontSize={"30"}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Our Mission
            </Text>
        </Box>
            {/* <Text
                fontSize={"30"}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Our Staff
            </Text>
            <Text
                fontSize={"30"}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Testimonials
            </Text> */}
        <VStack spacing={12} align="center" textAlign="center">
            <Box position={"relative"} mb={8}
                // borderBottom={"2px solid #0db5d6"} witdth="100%" mb={8}
            >
                <Heading 
                    as="h1" 
                    size="2xl" 
                    textShadow={"2px 2px 4px rgba(0, 0, 0, 0.3)"}
                >
                    About Us And Our Team
                </Heading>
                <Box 
                    position="absolute"
                    bottom={-4} // adjust as needed
                    left="-10%"
                    height="4px"
                    width="120%"
                    bg="blue.500"
                    transformOrigin="left"
                    animation={`${growLine} 2s ease-out forwards`}
                />
            </Box>

            <Box>
                <Text fontSize="3xl" fontWeight="bold">
                    Our Mission
                </Text>
                <Text fontSize="lg" mt={4} maxW="3xl" mx="auto">
                    Our mission is to provide affordable, reliable, and personalized in-home care that empowers 
                    individuals to live safely and comfortably in the place they know best—their own homes. 
                    We are dedicated to preserving dignity, promoting independence, and enhancing quality of life for every client we serve. 
                    We strive to be a trusted partner in health and wellness, ensuring that our clients receive the highest standard of 
                    care tailored to their unique needs. Our highly trained staff is commited to delivering the best possible care with 
                    compassion, respect, and integrity.
                </Text>
            </Box>
        </VStack>
    </Container>
  )
}

export default About
