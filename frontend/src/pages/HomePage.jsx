import { useColorMode, Button, Container, VStack, Text } from '@chakra-ui/react';

const HomePage = () => {
  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={8}>
        <Text
            fontSize={"30"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            Home Page
        </Text>
      </VStack>
    </Container>
    // <Button onClick={toggleColorMode}>
    //       Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
    // </Button>
  )
}

export default HomePage
