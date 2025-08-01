import { Container, VStack, Text } from "@chakra-ui/react"

const Jobs = () => {
  return (
    <Container maxW="container.md" py={20}>
        <VStack spacing={8}>
            <Text
                fontSize={"30"}
                fontWeight={"bold"}
                textAlign={"center"}
            >
                Jobs Page
            </Text>
        </VStack>
    </Container>
  )
}

export default Jobs
