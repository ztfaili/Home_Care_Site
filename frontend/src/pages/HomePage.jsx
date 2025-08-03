import { VStack, Text, Box, Image, Flex, Heading, Card, CardHeader, CardBody, CardFooter, SimpleGrid, Center, HStack } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Bottom from './../components/Bottom';
import { Link } from 'react-router-dom';
import { StaggeredFade } from '../components/TextAnimation';

{window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}};

const MotionImage = motion(Image);

const heroImages = [
  "https://homebase.org/wp-content/uploads/2022/05/NEW-website-hero-images-13.png",
  "https://www.woodlands-hh.com/wp-content/uploads/sites/24/2022/03/long-term-care.jpg",
  "https://transform.octanecdn.com/crop/1920x1080/https://octanecdn.com/empathenginesites/empathenginesites_403144387.jpeg?focal=60,19",
]

const services = [
  {
    title: "Physical Therapy",
    img: "https://integrehab.com/wp-content/uploads/2024/08/physical-therapist-exercising-knee.jpg"
  },
  {
    title: "Occupational Therapy",
    img: "https://monumenthg.com/wp-content/uploads/2024/09/How-does-occupational-therapy-work-for-seniors.jpg"    
  },
  {
    title: "Companionship",
    img: "https://www.pacificangelshomecare.com/wp-content/uploads/2019/09/benefits-of-companionship-for-seniors.jpg"
  },
  {
    title: "Diet & Nutrition",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlldHxlbnwwfHwwfHx8MA%3D%3D"
  },
]

const HomePage = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => { // change image every 5 seconds
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); 

    return () => clearInterval(interval); // cleanup function to clear the interval
  }, []);
  return (
    <Box position="relative" minHeight="100vh" bgColor="gray.100">
      <Box position="relative" width="100vw" height="100vh" overflow="hidden">
        <AnimatePresence mode="wait">
          <MotionImage 
            key={heroImages[currentImage]}
            src={heroImages[currentImage]}
            alt="Home Image" 
            borderRadius="md" mb={8} 
            boxSize={"100%"}
            objectFit="cover"
            zIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </Box>
      <Text
        position="absolute"
        top="5%"
        left="5%"
        color="blackAlpha.700" 
        fontSize="7xl"
        fontWeight="bold"
        zIndex={1} 
      >
        Wisconsin Home
      </Text>
      <Text
        position="absolute"
        top="9%"
        left="8%"
        color="blackAlpha.800" 
        fontSize="7xl"
        fontWeight="bold"
        zIndex={1} 
      >
        Care Services
      </Text>
      <Image
        position="absolute"
        top="5%"
        right="5%"
        src="https://t4.ftcdn.net/jpg/03/35/98/45/240_F_335984544_im2SjLS6UfXCdOpjw8Lhp7rs7k9zCfWl.jpg"
        alt="Wisconsin Logo"
        boxSize="140px"
        zIndex={1} 
        borderRadius="full"
      />
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
          <StaggeredFade text="Providing Quality Care For You and Your Loved Ones" />
        </Text>
      </Flex>
      
      <Box minHeight="70vh" bgColor="#ede1d1">
        <VStack>
          <Heading size="2xl" mt={10} mb={5}>
            Explore Our Caregiving Services!
          </Heading>
          <HStack spacing={10} mb={10} px={5} wrap="wrap" justifyContent="center">
            {services.map((services, index) => (
              <Link to="/services">
                <Card
                  key={index}
                  maxW="sm"
                  borderRadius="lg"
                  boxShadow="lg"
                  transition="transform 0.3s, box-shadow 0.3s"
                  _hover={{
                      transform: "translateY(-5px)",
                      boxShadow: "2xl",
                  }}
                  boxSize={"320px"}
                >
                  <Image src={services.img} width="100%" />
                  <CardHeader textAlign="center">
                    <Heading size="md">{services.title}</Heading>
                  </CardHeader>
                </Card>
              </Link>
            ))}
        </HStack>
        </VStack>
      </Box>
      <Bottom/>
    </Box>
  )
}

export default HomePage
