import { useColorMode, Button, Container, VStack, Text, Box, Image, Flex } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionImage = motion(Image);

const images = [
  "https://homebase.org/wp-content/uploads/2022/05/NEW-website-hero-images-13.png",
  "https://www.nurseregistry.com/wp-content/uploads/2023/07/in-home-nursing-care-for-seniors-1200x720.jpg",
  "https://transform.octanecdn.com/crop/1920x1080/https://octanecdn.com/empathenginesites/empathenginesites_403144387.jpeg?focal=60,19",
]

const HomePage = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => { // change image every 5 seconds
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); // cleanup function to clear the interval
  }, []);
  return (
    <Box position="relative" minHeight="100vh" bgColor="gray.100">
      <Box position="relative" width="100vw" height="100vh" overflow="hidden">
        <AnimatePresence mode="wait">
          <MotionImage 
            key={images[currentImage]}
            src={images[currentImage]}
            alt="Home Image" 
            borderRadius="md" mb={8} 
            boxSize={"100%"}
            objectFit="cover"
            zIndex={-1}
            py={10}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut"}}
          />
        </AnimatePresence>
      </Box>
      <Text
        position="absolute"
        top="5%"
        left="5%"
        color="blackAlpha.700" // Adjust text color for visibility
        fontSize="7xl"
        fontWeight="bold"
        zIndex={1} // Ensure text is above the image
      >
        Wisconsin Home
      </Text>
      <Text
        position="absolute"
        top="10%"
        left="10%"
        color="blackAlpha.800" // Adjust text color for visibility
        fontSize="7xl"
        fontWeight="bold"
        zIndex={1} // Ensure text is above the image
      >
        Care Services
      </Text>
      <Flex 
        flexWrap={"wrap"} 
        justifyContent="center" 
        alignItems="center" 
        position="relative" 
        bgGradient="linear(to-r, blue.500, purple.500)" 
        py={"10"}
      >
        <Text
          fontSize="7xl"
          fontWeight="bold"
          textAlign="Left"
          color="white"
          ml={5}
        >
          Providing Quality Care For You and Your Loved Ones
        </Text>
      </Flex>
      <Container maxW="container.xl" py={30} />
      {/* <VStack spacing={8}>
          <Text
              fontSize={"30"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Home Page
          </Text>
        </VStack> */}
        
        {/* <Button onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
        </Button> */}
        <Box minHeight="50vh" bgColor="#ede1d1">

        </Box>
    </Box>
  )
}

export default HomePage
