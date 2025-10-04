import { VStack, Text, Box, Image, Flex, Heading, Card, CardHeader, HStack, Button, useDisclosure, Input, Textarea, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Bottom from './../components/Bottom';
import { Link } from 'react-router-dom';
import { StaggeredFade } from '../components/TextAnimation';
import Stars from '../components/Stars';
import { globalRating } from '../components/Stars';
import { createReview } from '../services/review';
import { getReviews } from '../services/review';
import Slider from "react-slick";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const MotionImage = motion(Image);

const heroImages = [
  "https://transform.octanecdn.com/crop/1920x1080/https://octanecdn.com/empathenginesites/empathenginesites_403144387.jpeg?focal=60,19",
  "https://www.associatedhomecare.com/wp-content/uploads/sites/4/fly-images/1135/career-hero-1240x1000-cc.jpg",
  "https://www.woodlands-hh.com/wp-content/uploads/sites/24/2022/03/long-term-care.jpg"
];

const services = [
  {
    title: "Bedside Care",
    img: "https://lh7-us.googleusercontent.com/wGSKTa4xIhHsgCzHExHR7wgZIy0UL_tmyUboU70tiHnv8Hr3qSDdLrYgmKJjdDXza5ANlTeL5YWvnfwztwatMTFaB2HK4b2FQRsXonfrujW9PzalALF274zJL7RDla_OdDS0livrYLdlwjj9Y9h2M-o"
  },
  {
    title: "Mobility & Exercise",
    img: "https://monumenthg.com/wp-content/uploads/2024/09/How-does-occupational-therapy-work-for-seniors.jpg",
  },
  {
    title: "Companionship",
    img: "https://www.pacificangelshomecare.com/wp-content/uploads/2019/09/benefits-of-companionship-for-seniors.jpg",
  },
  {
    title: "Diet & Nutrition",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlldHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const sliderSettings = {
  // dots: true,
  infinite: true,
  speed: 5000,
  slidesToShow: 3,
  // slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  pauseOnHover: false,
  centerMode: false,
  draggable: false,
  swipe: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => { // change image every 5 seconds
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); 
    return () => clearInterval(interval); // cleanup function to clear the interval
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      const result = await getReviews();
      if (result.success) {
        setReviews(result.data); // Adjust based on your API's return shape
      }
    };
    fetchReviews();
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure(); // for modal
  const [review, setReview] = useState({
    rating: 0,
    name: '',
    content: ''
  });
  const [reviews, setReviews] = useState([]);

  const toast = useToast();

  const submitReview = async (e) => {
    e.preventDefault();
    const updatedReview = { ...review, rating: globalRating}; // updates the rating dynamically
    const isError = updatedReview.name === '' || updatedReview.content === '' || updatedReview.rating === 0;
    if(isError) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    } 
    const result = await createReview(updatedReview);
    if(result.success) {
      toast({
        title: "Success",
        description: "Review sent successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setReview({
        rating: 0,
        name: '',
        content: ''
      });
      onClose();
    } else {
      toast({
        title: "Error",
        description: "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }
  
  return (
    <Box position="relative" minHeight="100vh" bgColor="gray.100">
      <Box position="relative" width="100%" height="100vh" overflow="hidden">
        <AnimatePresence mode="wait">
          <MotionImage 
            key={heroImages[currentImage]}
            src={heroImages[currentImage]}
            alt="Home Image" 
            mb={8} 
            boxSize={"100%"}
            objectFit="cover"
            zIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <Box 
          position="absolute"
          top="0"
          left="0" 
          display="flex"
          width="100%"
        >
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="space-between"
            px={10}
            zIndex={1}
            py={20}
            mt={8}
          >
            <VStack>
              <Text
                color="white" 
                fontSize="7xl"
                fontWeight="bold"
                zIndex={2} 
                textShadow="0px 2px 4px rgba(0, 0, 0, 0.6)"
              >
                Wisconsin Home
              </Text>
              <Text
                color="white" 
                fontSize="7xl"
                fontWeight="bold"
                zIndex={1} 
                textShadow="0px 2px 4px rgba(0, 0, 0, 0.6)"
                mb={25}
              >
                Care Services
              </Text>
              <Link to="/services">
                <Button
                  zIndex={1}
                  colorScheme={"red"} 
                  fontSize={"44"}
                  height={"100px"} 
                  width={"370px"} 
                  rounded={"full"} 
                  _hover={{ 
                    bg: "green.600",
                    transform: "scale(1.05)", 
                    transition: "all 0.2s ease-in-out", 
                  }}
                >
                  Schedule Now
                </Button>
              </Link>
            </VStack>
            <Image
              src="src/images/daisyhills.png"
              alt="Wisconsin Logo"
              boxSize="440px"
              zIndex={1} 
              borderRadius="full"
              mr={-55}
              mt={-20}
            />
          </Flex>
        </Box>
      </Box>
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
          <Heading size="2xl" mt={10} mb={10}>
            Explore Our Caregiving Services!
          </Heading>
          <HStack spacing={10} mb={10} px={5} wrap="wrap" justifyContent="center">
            {services.map((service, index) => (
              <Link to="/services" key={index}>
                <Card
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
                  <Image src={service.img} width="100%" />
                  <CardHeader textAlign="center">
                    <Heading size="md">{service.title}</Heading>
                  </CardHeader>
                </Card>
              </Link>
            ))}
        </HStack>
        </VStack>
      </Box>
      <Box minHeight="70vh" bgColor="white">
        <VStack pt={10}>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            textAlign="Left"
            color="gray.700"
            ml={5}
            mb={5}
          >
            Share Your Experience
          </Text>
          <Text fontSize="lg" color="gray.600" mb={5} maxW="500px">
            Give us feedback so that we may continue to improve.
          </Text>
          <Button ml={10} mb={10} onClick={onOpen} 
            size={"lg"} fontSize={"22px"} 
          >
            Review
          </Button>
        </VStack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Give us a review!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box display={"flex"} justifyContent={"center"} mb={8}>
                <Stars iconSize={30}/>
              </Box>
              <VStack spacing={3}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input 
                    value={review.name}
                    onChange={(e) => setReview({ ...review, name: e.target.value})} 
                  />
                </FormControl>
                
                <FormControl>
                  <FormLabel>Review</FormLabel>
                  <Textarea 
                    resize={"none"}
                    value={review.content}
                    onChange={(e) => setReview({ ...review, content: e.target.value})} 
                  />
                </FormControl>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={submitReview}>
                Post Review
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Box py={10} px={5}>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            ml={10}
            mb={65}
            textAlign="center" color="blue.600"
          >
            <StaggeredFade text="What Families Are Saying About Us" />
          </Text>
          {reviews.length === 0 ? (
            <Text align={"center"}>No reviews yet. Be the first to leave one!</Text>
          ) : (
            <Slider {...sliderSettings}>
              {reviews.map((r, i) => (
                <Box 
                  flexShrink="0"
                  key={i}
                  p={5}
                  shadow="md"
                  borderWidth="1px"
                  borderRadius="md"
                  bg="white"
                  width="100%"
                  maxW="300px"
                  mb={6}
                >
                  <Flex justifyContent="space-between" alignItems="center" mb={2}>
                    <Text fontWeight="bold">{r.name}</Text>
                    <Stars defaultRating={r.rating} iconSize={20} />
                  </Flex>
                  <Text>{r.content}</Text>
                </Box>
              ))}
            </Slider>
          )}
        </Box>
      </Box>
      <Bottom/>
    </Box>
  )
}

export default HomePage
