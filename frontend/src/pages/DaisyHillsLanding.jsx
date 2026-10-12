// DaisyHillsLanding.jsx
// Chakra UI rewrite of the original vanilla HTML template.
// Requires: @chakra-ui/react, @emotion/react, @emotion/styled, framer-motion
// Also import ./theme.js in your app root and add the Google Fonts <link>
// (see theme.js comment) to public/index.html.

import { useState } from 'react';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Stack,
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Link,
  Input,
  Textarea,
  Select,
  FormLabel,
  IconButton,
  useDisclosure,
  Collapse,
  Container,
} from '@chakra-ui/react';
import Reveal from './Reveal';

// ---------- shared bits ----------

const SectionLabel = ({ children, light = false }) => (
  <HStack spacing={3} mb={4}>
    <Box w="28px" h="1px" bg={light ? 'sage.light' : 'gold'} />
    <Text
      fontSize="0.72rem"
      fontWeight={500}
      letterSpacing="0.14em"
      textTransform="uppercase"
      color={light ? 'sage.light' : 'gold'}
    >
      {children}
    </Text>
  </HStack>
);

const Em = ({ children }) => (
  <Text as="em" fontStyle="italic" color="sage.dark">
    {children}
  </Text>
);

// ---------- Nav ----------

function Nav() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'For Providers', href: '#providers' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <Flex
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={100}
        bg="rgba(253,251,248,0.92)"
        backdropFilter="blur(12px)"
        borderBottom="1px solid"
        borderColor="border"
        align="center"
        justify="space-between"
        px="5%"
        h="70px"
      >
        <Link
          href="#hero"
          fontFamily="heading"
          fontSize="1.9rem"
          fontWeight={600}
          color="sage.dark"
          letterSpacing="0.02em"
          _hover={{ textDecoration: 'none' }}
        >
          Daisy Hills{' '}
          <Text as="span" color="gold">
            Home Care
          </Text>
        </Link>

        <HStack as="ul" spacing={8} listStyleType="none" display={{ base: 'none', md: 'flex' }}>
          {links.map((l) => (
            <Box as="li" key={l.label}>
              <Link
                href={l.href}
                fontSize="0.82rem"
                fontWeight={500}
                letterSpacing="0.08em"
                textTransform="uppercase"
                color="mid"
                _hover={{ color: 'sage.dark', textDecoration: 'none' }}
              >
                {l.label}
              </Link>
            </Box>
          ))}
          <Box as="li">
            <Button as={Link} href="#contact" variant="solid" px="1.2rem" py="0.5rem" h="auto" _hover={{ textDecoration: 'none' }}>
              Refer a Patient
            </Button>
          </Box>
        </HStack>

        <IconButton
          aria-label="Menu"
          display={{ base: 'flex', md: 'none' }}
          onClick={onToggle}
          variant="unstyled"
          minW="auto"
          icon={
            <VStack spacing="5px">
              <Box w="24px" h="2px" bg="charcoal" />
              <Box w="24px" h="2px" bg="charcoal" />
              <Box w="24px" h="2px" bg="charcoal" />
            </VStack>
          }
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <VStack
          position="fixed"
          top="70px"
          left={0}
          right={0}
          bg="warmWhite"
          borderBottom="1px solid"
          borderColor="border"
          px="5%"
          py={6}
          spacing={5}
          align="stretch"
          zIndex={99}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={onClose}
              fontSize="0.9rem"
              fontWeight={500}
              color="mid"
              letterSpacing="0.05em"
              textTransform="uppercase"
              _hover={{ textDecoration: 'none' }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="#contact" onClick={onClose} fontSize="0.9rem" fontWeight={500} color="mid" letterSpacing="0.05em" textTransform="uppercase">
            Refer a Patient
          </Link>
        </VStack>
      </Collapse>
    </>
  );
}

// ---------- Hero ----------

function Hero() {
  return (
    <Grid
      as="section"
      id="hero"
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      minH="100vh"
      pt="70px"
      overflow="hidden"
    >
      <Flex direction="column" justify="center" px={{ base: '6%', md: '6% 6% 6% 8%' }} py="6%">
        <HStack spacing={3} mb={6}>
          <Box w="32px" h="1px" bg="gold" />
          <Text fontSize="0.75rem" fontWeight={500} letterSpacing="0.14em" textTransform="uppercase" color="gold">
            Expert In-Home Clinical Care
          </Text>
        </HStack>
        <Heading
          as="h1"
          fontFamily="heading"
          fontSize={{ base: '2.8rem', md: 'clamp(2.8rem, 5vw, 4.5rem)' }}
          fontWeight={300}
          lineHeight={1.12}
          color="charcoal"
          mb={6}
        >
          Expert Wound Care &<br />
          <Em>Skilled Nursing,</Em>
          <br />
          Delivered to Your Door
        </Heading>
        <Text fontSize="1rem" fontWeight={300} lineHeight={1.75} color="mid" maxW="420px" mb={10}>
          Daisy Hills Home Care brings advanced clinical care directly to patients in the Greater Milwaukee
          Area — in private homes, assisted living, and nursing facilities.
        </Text>
        <HStack spacing={4} flexWrap="wrap">
          <Button as={Link} href="#services" variant="solid" px="2rem" py="0.85rem" h="auto" _hover={{ textDecoration: 'none', transform: 'translateY(-1px)' }}>
            Our Services
          </Button>
          <Button as={Link} href="#contact" variant="outline" borderWidth="1px" px="2rem" py="0.85rem" h="auto" _hover={{ textDecoration: 'none' }}>
            Contact Us
          </Button>
        </HStack>
      </Flex>

      <Box position="relative" overflow="hidden" display="flex" alignItems="center" justifyContent="center" minH={{ base: '320px', md: 'auto' }}>
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(135deg, sage.dark 0%, sage.500 50%, sage.light 100%)"
        />
        <Box
          position="absolute"
          inset={0}
          opacity={0.07}
          backgroundImage="radial-gradient(circle, #fff 1px, transparent 1px)"
          backgroundSize="28px 28px"
        />
        <Box
          position="relative"
          zIndex={2}
          bg="rgba(255,255,255,0.18)"
          backdropFilter="blur(16px)"
          border="1.5px solid rgba(255,255,255,0.4)"
          borderRadius="8px"
          p="3rem"
          maxW="420px"
          w="85%"
          boxShadow="0 20px 60px rgba(0,0,0,0.25)"
        >
          <Flex
            w="68px"
            h="68px"
            bg="rgba(255,255,255,0.25)"
            borderRadius="50%"
            align="center"
            justify="center"
            mb={5}
            fontSize="2rem"
            boxShadow="0 4px 16px rgba(0,0,0,0.15)"
          >
            🌼
          </Flex>
          <Heading as="h3" fontFamily="heading" fontSize="2.2rem" fontWeight={600} color="white" mb={4} lineHeight={1.15} textShadow="0 2px 8px rgba(0,0,0,0.2)">
            Care That Comes to You
          </Heading>
          <Text fontSize="1rem" color="rgba(255,255,255,0.92)" lineHeight={1.75} mb={8}>
            Medically led, independently owned. Not a franchise — a team that genuinely cares about every
            patient.
          </Text>
          <Flex borderTop="1px solid rgba(255,255,255,0.25)" pt={6}>
            {[
              ['In-Home', 'Service'],
              ['Expert', 'Clinical Team'],
              ['Personal', 'Care Plans'],
            ].map(([num, label], i, arr) => (
              <Box
                key={label}
                flex={1}
                textAlign="center"
                px={2}
                borderRight={i !== arr.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none'}
              >
                <Text fontFamily="heading" fontSize="1.25rem" fontWeight={600} color="white" lineHeight={1}>
                  {num}
                </Text>
                <Text fontSize="0.65rem" textTransform="uppercase" letterSpacing="0.08em" color="rgba(255,255,255,0.75)" mt={1}>
                  {label}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    </Grid>
  );
}

// ---------- Trust bar ----------

function TrustBar() {
  const items = [
    'Medically Led',
    'Independently Owned',
    'Not a Franchise',
    'Personalized Care Plans',
    'Serving Greater Milwaukee',
  ];
  return (
    <Flex
      bg="cream"
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="border"
      px="5%"
      py={6}
      align="center"
      justify="center"
      gap={12}
      flexWrap="wrap"
    >
      {items.map((item) => (
        <HStack key={item} spacing={2}>
          <Box w="6px" h="6px" borderRadius="50%" bg="sage.500" />
          <Text fontSize="0.78rem" fontWeight={500} letterSpacing="0.05em" textTransform="uppercase" color="mid">
            {item}
          </Text>
        </HStack>
      ))}
    </Flex>
  );
}

export { Nav, Hero, TrustBar, SectionLabel, Em };
