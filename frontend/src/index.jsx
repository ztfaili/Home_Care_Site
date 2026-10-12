// index.jsx — Daisy Hills Home Care landing page (Chakra UI)
//
// Usage:
//   1. npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
//   2. Copy theme.js, Reveal.jsx, DaisyHillsLanding.jsx, Sections.jsx,
//      Contact.jsx, and this file into e.g. src/components/DaisyHills/
//   3. Add the Google Fonts <link> from theme.js to public/index.html
//   4. Wrap your app root in <ChakraProvider theme={theme}> (see theme.js)
//   5. Render <DaisyHillsPage /> wherever your route lives

import { Box } from '@chakra-ui/react';
import { Nav, Hero, TrustBar } from './pages/DaisyHillsLanding';
import { About, Services, Providers } from './pages/Sections';
import { Contact, Footer } from './pages/Contact';

export default function DaisyHillsPage() {
  return (
    <Box>
      <Nav />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Providers />
      <Contact />
      <Footer />
    </Box>
  );
}
