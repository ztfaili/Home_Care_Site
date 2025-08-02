import { Container, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { FaSquareInstagram, FaTwitter, FaFacebook } from "react-icons/fa6";

const Bottom = () => {
  return (
    <Container maxW="container.xl" py={10} textAlign="center">
        <VStack spacing={12}>
            <Divider borderColor={"gray.500"} width={"100%"}/>
            <HStack spacing={14} mt={6}>
                <a href="https://www.instagram.com/homecare" target="_blank" rel="noopener noreferrer">
                    <FaSquareInstagram size={24} color="#E1306C" />
                </a>
                <a href="https://www.twitter.com/homecare" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} color="#1DA1F2" />
                </a>
                <a href="https://www.facebook.com/homecare" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} color="#1877F2" />
                </a>
            </HStack>
            <Text fontSize="lg" color="gray.500">
                © {new Date().getFullYear()} HomeCare. All rights reserved.
            </Text>
        </VStack>
    </Container>
  )
}

export default Bottom
