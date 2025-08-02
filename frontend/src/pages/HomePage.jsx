import { useColorMode, Button, Container, VStack, Text, Box, Image, Flex } from '@chakra-ui/react';

const HomePage = () => {
  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="rekative" minHeight="100vh" bgGradient="linear(to-r, blue.500, purple.500)" color="white">
      <Image 
          // src="https://cdn.aarp.net/content/dam/aarp/caregiving/2020/05/1140x655-grandpa-son-grandson-walking.jpg"
          src="https://homebase.org/wp-content/uploads/2022/05/NEW-website-hero-images-13.png" 
          alt="Home Image" 
          borderRadius="md" mb={8} 
          boxSize={"100%"}
          objectFit="cover"
          zIndex={-1}
          py={10}
      />
      <Text
        position="absolute"
        top="10%"
        left="10%"
        color="blackAlpha.700" // Adjust text color for visibility
        fontSize="7xl"
        fontWeight="bold"
        zIndex={1} // Ensure text is above the image
      >
        Wisconsin Home
      </Text>
      <Text
        position="absolute"
        top="15%"
        left="15%"
        color="blackAlpha.800" // Adjust text color for visibility
        fontSize="7xl"
        fontWeight="bold"
        zIndex={1} // Ensure text is above the image
      >
        Care Services
      </Text>
      <Flex flexWrap={"wrap"} justifyContent="center" alignItems="center" position="relative">
        <Text
          fontSize="7xl"
          fontWeight="bold"
          textAlign="Left"
          color="white"
          ml={5}
        >
          Providing Quality Care Every Step of the Way
        </Text>
      </Flex>
      <Container maxW="container.xl" py={30}>
        
        
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
      </Container>
    </Box>
  )
}

export default HomePage
