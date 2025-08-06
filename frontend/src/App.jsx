import { Box, useColorModeValue } from "@chakra-ui/react"
import { Routes, Route } from "react-router-dom"
// import { APIProvider } from '@vis.gl/react-google-maps';
// import GoogleMap from "./components/GoogleMap";

import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Jobs from "./pages/Jobs"
import About from "./pages/About"

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        {/* <APIProvider apiKey="AIzaSyAfPs5ZRHzBeMEsMhuYziBnTEZztg40W9A">
          <GoogleMap />
        </APIProvider> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Box>
    </>
  )
}

export default App