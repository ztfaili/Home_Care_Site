import { Container, Flex, Text, Button, HStack, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      maxW={"1600px"}
      px={4} 
      bgColor={"whitesmoke"} 
      boxShadow={"md"} 
      position={"fixed"} 
      top={0} 
      left={0} 
      right={0} 
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
          <HStack spacing={2}>
            <Text
              fontSize={{ base: "22", sm: "38"}}
              fontWeight={"bold"}
              // textTransform={"uppercase"}
              textAlign={"center"}
              bgGradient={"linear(to-r, cyan.400, blue.500)"}
              bgClip={"text"}
            >
              <Link to={"/"}>Home Care</Link>
            </Text>
            <MdOutlineHealthAndSafety size="38" color="#0db5d6" style={{ position: 'relative', top: '2px' }}/>
          </HStack>
          
            
          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/services"}>
              <Button size={"lg"} colorScheme={"blue"} fontSize={"24"} rounded={"xl"}>
                Our Services
              </Button>
            </Link>
            <Link to={"/jobs"}>
              <Button size={"lg"} colorScheme={"blue"} fontSize={"24"} rounded={"xl"}>
                Jobs
              </Button>
            </Link>
            <Link to={"/about"}>
              <Button size={"lg"} colorScheme={"blue"} fontSize={"24"} rounded={"xl"}>
                About
              </Button>
            </Link>
            <Link to={"/contact"}>
              <Button size={"lg"} colorScheme={"blue"} fontSize={"24"} rounded={"xl"}>
                Contact Us
              </Button>
            </Link>
            {/* <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
            </Button> */}
          </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar