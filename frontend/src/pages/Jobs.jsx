import { Container, VStack, Text } from "@chakra-ui/react"
import { useEffect } from "react";

{window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}};

const Jobs = () => {
  useEffect(() => window.scrollTo(0, 0), []);
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
