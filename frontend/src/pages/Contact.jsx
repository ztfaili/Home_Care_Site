import { Container, VStack, Text } from "@chakra-ui/react"

const Contact = () => {
  return (
    <Container maxW="container.md" py={20}>
        <VStack spacing={8}>
            <Text
                fontSize={"30"}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Contact Page
            </Text>
        </VStack>
    </Container>
  )
}

export default Contact
