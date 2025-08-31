import { Container, Flex, Text, Button, HStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { GiDaisy } from "react-icons/gi";

const Navbar = () => {
  return (
    <Container
      maxW={"1600px"}
      px={4} 
      py={3}
      boxShadow={"md"} 
      position={"fixed"} 
      top={0} 
      left={0} 
      right={0} 
      zIndex={1000}
      bgColor="rgba(255, 255, 255, 0.75)"
      backdropFilter="saturate(180%) blur(10px)"
      borderBottom="1px solid #e2e8f0"
    > 
        <Flex 
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row"
            }}
        >
          <HStack spacing={2} _hover={{ transform: "scale(1.03)", transition: "0.3s ease-in-out" }}>
            <Text
              fontSize={{ base: "15", sm: "38"}}
              fontWeight={"bold"}
              fontFamily="'Pacifico', cursive"  
              whiteSpace={"nowrap"}
              textAlign={"center"}
              bgGradient={"linear(to-r, green.400, blue.500)"}
              bgClip={"text"}
              pb={"5px"}
            >
              <Link to={"/"}>
                Daisy Hills
              </Link>
            </Text>
            <GiDaisy size="38" color="#0db5d6" style={{ position: 'relative', top: '2px' }}/>
          </HStack>
          
            
          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/services"}>
              <Button size={"lg"} colorScheme={"blue"} fontSize={"35"} rounded="full" fontWeight={"bold"} 
                _hover={{ bg: "green.600", color: "white"}} variant="ghost" height={"60px"}
              >
                Our Services
              </Button>
            </Link>
            <Link to={"/jobs"}>
              <Button size={"lg"} colorScheme={"blue"} fontSize={"35"} rounded="full" fontWeight={"bold"} 
                _hover={{ bg: "green.600", color: "white"}} variant="ghost" height={"60px"} 
              >
                Jobs
              </Button>
            </Link>
            <Link to={"/about"}>
              <Button size={"lg"} colorScheme={"blue"} fontSize={"35"} rounded="full" fontWeight={"bold"} 
                _hover={{ bg: "green.600", color: "white"}} variant="ghost" height={"60px"}
              >
                About
              </Button>
            </Link>
            <Link to={"/contact"}>
              <Button size={"lg"} colorScheme={"blue"} fontSize={"35"} rounded="full" fontWeight={"bold"} 
                _hover={{ bg: "green.600", color: "white"}} variant="ghost" height={"60px"}
              >
                Contact Us
              </Button>
            </Link>
          </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar