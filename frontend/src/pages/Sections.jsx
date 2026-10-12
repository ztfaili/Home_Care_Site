// Sections.jsx
import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Stack,
  HStack,
  VStack,
  Heading,
  Text,
  Button,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
import Reveal from './Reveal';
import { SectionLabel, Em } from './DaisyHillsLanding';

// ---------- About ----------

const aboutFeatures = [
  { icon: '🏥', title: 'Medically Led Care', text: 'Provided by experienced healthcare professionals committed to clinical excellence.' },
  { icon: '🤝', title: 'Independently Owned', text: 'Not a franchise — a personalized approach that puts patients and families first.' },
  { icon: '📋', title: 'Customized Care Plans', text: "Tailored to each patient's unique needs, with full coordination with physicians and caregivers." },
];

const aboutBadges = [
  'Private Home Visits',
  'Assisted Living Facilities',
  'Skilled Nursing Facilities',
  'Coordination with Your Physician',
  'Family & Caregiver Support',
];

export function About() {
  return (
    <Grid as="section" id="about" templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={{ base: 12, md: 20 }} alignItems="center" px="8%" py="5rem" bg="warmWhite">
      <Box>
        <SectionLabel>About Us</SectionLabel>
        <Heading as="h2" fontFamily="heading" fontSize={{ base: '2rem', md: 'clamp(2rem, 3.5vw, 3rem)' }} fontWeight={300} lineHeight={1.2} mb={4}>
          Compassionate care, <Em>wherever you call home</Em>
        </Heading>
        <Text fontSize="0.95rem" fontWeight={300} color="mid" maxW="520px" lineHeight={1.8}>
          We deliver professional, high-quality wound care and skilled nursing in private homes, assisted
          living communities, and nursing homes. Our goal is faster healing, greater comfort, and improved
          quality of life.
        </Text>

        <VStack spacing={6} align="stretch" mt={8}>
          {aboutFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <Flex
                gap={4}
                align="flex-start"
                p={5}
                border="1px solid"
                borderColor="border"
                borderRadius="2px"
                transition="border-color 0.2s, box-shadow 0.2s"
                _hover={{ borderColor: 'sage.light', boxShadow: '0 4px 20px rgba(122,158,135,0.1)' }}
              >
                <Flex minW="40px" w="40px" h="40px" bg="cream" borderRadius="2px" align="center" justify="center" fontSize="1.1rem">
                  {f.icon}
                </Flex>
                <Box>
                  <Text fontSize="0.9rem" fontWeight={500} mb={1}>
                    {f.title}
                  </Text>
                  <Text fontSize="0.82rem" color="mid" lineHeight={1.65}>
                    {f.text}
                  </Text>
                </Box>
              </Flex>
            </Reveal>
          ))}
        </VStack>
      </Box>

      <Reveal>
        <Box bg="cream" border="1px solid" borderColor="border" borderRadius="4px" p="3rem">
          <Text fontFamily="heading" fontSize="1.6rem" fontWeight={300} fontStyle="italic" color="charcoal" lineHeight={1.5} mb={6}>
            "Our goal is faster healing, greater comfort, and improved quality of life."
          </Text>
          <Text fontSize="0.78rem" textTransform="uppercase" letterSpacing="0.1em" color="lightGray">
            — Daisy Hills Home Care
          </Text>
          <VStack spacing={3} align="stretch" mt={8}>
            {aboutBadges.map((b) => (
              <HStack key={b} spacing={3}>
                <Flex w="22px" h="22px" minW="22px" borderRadius="50%" bg="sage.dark" color="white" align="center" justify="center" fontSize="0.65rem">
                  ✓
                </Flex>
                <Text fontSize="0.82rem" color="mid">
                  {b}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </Reveal>
    </Grid>
  );
}

// ---------- Services ----------

const services = [
  {
    icon: '🩹',
    title: 'Wound Care',
    items: [
      'Chronic wounds (pressure, diabetic, venous)',
      'Post-surgical wound management',
      'Advanced dressings & infection control',
      'Skin & wound assessments',
      'Infection prevention & management',
    ],
  },
  {
    icon: '💉',
    title: 'IV Therapy & Medication Administration',
    items: [
      'IV therapy & hydration',
      'Medication administration (oral, IM, IV)',
      'Foley catheter care & changes',
      'Vitamins and Nutritional support',
    ],
  },
  {
    icon: '🫀',
    title: 'Chronic Disease Care',
    items: [
      'Diabetes & insulin management',
      'Cardiac & blood pressure monitoring',
      'Respiratory support',
      'Ongoing chronic disease management',
    ],
  },
  {
    icon: '⚕️',
    title: 'Advanced Services',
    items: ['PICC line & port care', 'PEG tube feeding', 'Ostomy care', 'Post-surgical recovery'],
  },
  {
    icon: '🏠',
    title: 'Post-Hospital Care',
    items: [
      'Surgical recovery at home',
      'Infection prevention',
      'Reducing hospital readmissions',
      'Transition care coordination',
    ],
  },
  {
    icon: '📚',
    title: 'Support Services',
    items: [
      'Patient & family education',
      'Care coordination with physicians',
      'Caregiver support & guidance',
      'Ongoing health monitoring',
    ],
  },
];

export function Services() {
  return (
    <Box as="section" id="services" bg="cream" px="8%" py="5rem">
      <Box mb={12}>
        <SectionLabel>What We Offer</SectionLabel>
        <Heading as="h2" fontFamily="heading" fontSize={{ base: '2rem', md: 'clamp(2rem, 3.5vw, 3rem)' }} fontWeight={300} lineHeight={1.2} mb={4}>
          Clinical services <Em>delivered to your door</Em>
        </Heading>
        <Text fontSize="0.95rem" fontWeight={300} color="mid" maxW="520px" lineHeight={1.8}>
          From wound care to advanced skilled nursing, we bring the full spectrum of clinical care home.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <Box
              bg="warmWhite"
              border="1px solid"
              borderColor="border"
              borderRadius="3px"
              p={8}
              h="100%"
              transition="transform 0.2s, box-shadow 0.2s, border-color 0.2s"
              _hover={{ transform: 'translateY(-4px)', boxShadow: '0 12px 40px rgba(0,0,0,0.07)', borderColor: 'sage.light' }}
            >
              <Flex w="48px" h="48px" bg="cream" borderRadius="2px" align="center" justify="center" fontSize="1.4rem" mb={5}>
                {s.icon}
              </Flex>
              <Heading as="h3" fontFamily="heading" fontSize="1.3rem" fontWeight={600} mb={3}>
                {s.title}
              </Heading>
              <List spacing={2}>
                {s.items.map((item) => (
                  <ListItem key={item} fontSize="0.82rem" color="mid" lineHeight={1.5} pl={4} position="relative">
                    <Box as="span" position="absolute" left={0} color="sage.500" fontSize="0.7rem">
                      —
                    </Box>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Reveal>
        ))}
      </SimpleGrid>
    </Box>
  );
}

// ---------- Providers ----------

const providerSteps = [
  { num: '01', title: 'Contact Our Team', text: 'Reach out by phone, fax, or email — we respond quickly.' },
  { num: '02', title: 'Provide Patient Details & Orders', text: 'Share the clinical information and care orders we need to get started.' },
  { num: '03', title: 'We Initiate Care Promptly', text: 'We coordinate with your team and begin care quickly with full communication.' },
];

const providerBenefits = [
  'Reduce hospital readmissions',
  'Improve wound healing outcomes',
  'Reliable communication with providers',
  'Flexible, fast patient onboarding',
  'Medically led, non-franchise model',
  'Comprehensive clinical documentation',
  'Direct coordination with your team',
];

export function Providers() {
  return (
    <Grid
      as="section"
      id="providers"
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gap={{ base: 12, md: 20 }}
      alignItems="center"
      px="8%"
      py="5rem"
      bg="charcoal"
      color="white"
    >
      <Box>
        <SectionLabel light>For Healthcare Providers</SectionLabel>
        <Heading as="h2" fontFamily="heading" fontSize={{ base: '2rem', md: 'clamp(2rem, 3.5vw, 3rem)' }} fontWeight={300} lineHeight={1.2} mb={4} color="white">
          Your trusted{' '}
          <Text as="em" fontStyle="italic" color="sage.dark">
            referral partner
          </Text>
        </Heading>
        <Text fontSize="0.95rem" fontWeight={300} color="rgba(255,255,255,0.6)" maxW="100%" lineHeight={1.8}>
          We partner with physicians, hospitals, assisted living, and skilled nursing facilities to deliver
          high-quality in-home clinical care — reducing readmissions and improving patient outcomes.
        </Text>

        <VStack spacing={6} align="stretch" mt={8}>
          {providerSteps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <Flex gap={5} align="flex-start">
                <Text fontFamily="heading" fontSize="2.5rem" fontWeight={300} color="sage.500" lineHeight={1} minW="40px">
                  {s.num}
                </Text>
                <Box>
                  <Text fontSize="0.9rem" fontWeight={500} color="white" mb={1}>
                    {s.title}
                  </Text>
                  <Text fontSize="0.82rem" color="rgba(255,255,255,0.55)" lineHeight={1.65}>
                    {s.text}
                  </Text>
                </Box>
              </Flex>
            </Reveal>
          ))}
        </VStack>

        <Button as={Link} href="#contact" variant="light" px="2rem" py="0.85rem" h="auto" mt={8} _hover={{ textDecoration: 'none' }}>
          Refer a Patient Today
        </Button>
      </Box>

      <Reveal>
        <Box bg="rgba(255,255,255,0.05)" border="1px solid rgba(255,255,255,0.12)" borderRadius="3px" p={10}>
          <Heading as="h3" fontFamily="heading" fontSize="1.4rem" fontWeight={400} color="white" mb={6}>
            Why Providers Refer to Daisy Hills
          </Heading>
          <VStack spacing={4} align="stretch">
            {providerBenefits.map((b) => (
              <HStack key={b} spacing={3}>
                <Box as="span" color="sage.light" fontWeight={600} fontSize="0.9rem">
                  ✓
                </Box>
                <Text fontSize="0.85rem" color="rgba(255,255,255,0.75)">
                  {b}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Box>
      </Reveal>
    </Grid>
  );
}
