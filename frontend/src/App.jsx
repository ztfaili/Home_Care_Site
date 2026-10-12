import { Box, useColorModeValue } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"

import DaisyHillsPage from "./index.jsx"

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Routes>
          <Route path="/" element={<DaisyHillsPage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App