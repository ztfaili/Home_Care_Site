// Contact.jsx
import { useState } from 'react';
import {
  Box,
  Grid,
  Flex,
  VStack,
  HStack,
  Heading,
  Text,
  Link,
  Input,
  Textarea,
  Select,
  FormLabel,
  Button,
  useToast,
  FormControl,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import Reveal from './Reveal';
import { SectionLabel, Em } from './DaisyHillsLanding';
import { createContact } from '../services/contact';
import InputMask from "react-input-mask";


const contactItems = [
  { icon: '📞', label: 'Phone', value: '(262) 469-9609', href: 'tel:2624699609' },
  { icon: '📠', label: 'Fax (Provider Referrals)', value: '(262) 810-2078' },
  { icon: '✉️', label: 'Email', value: 'care@daisyhillshomecare.com', href: 'mailto:care@daisyhillshomecare.com' },
  { icon: '📍', label: 'Service Area', value: 'Greater Milwaukee Area — private homes, assisted living & skilled nursing facilities' },
];

const fieldStyles = {
  bg: 'warmWhite',
  border: '1px solid',
  borderColor: 'border',
  borderRadius: '2px',
  fontSize: '0.88rem',
  color: 'charcoal',
  _focus: { borderColor: 'sage.500', boxShadow: 'none' },
};

export function Contact() {
  const toast = useToast();
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  });

  const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [validPhone, setValidPhone] = useState(true); 
  const [validEmail, setValidEmail] = useState(true);

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.fname || !form.lname || !form.email || !form.phone || !form.type || !form.message || !validEmail || !validPhone) {
      toast({ title: 'Please fill in all fields.', status: 'warning', duration: 4000, isClosable: true });
      return;
    }

    try {
      await createContact(form);

      toast({ title: "Thank you! We'll be in touch with you shortly.", status: 'success', duration: 4000, isClosable: true });
      setForm({ fname: '', lname: '', email: '', phone: '', type: '', message: '' });
    } catch (err) {
      toast({ title: err.message || 'Something went wrong. Please try again.', status: 'error', duration: 4000, isClosable: true })
    }
  };

  return (
    <Box as="section" id="contact" bg="warmWhite" px="8%" py="5rem">
      <SectionLabel>Get In Touch</SectionLabel>
      <Heading as="h2" fontFamily="heading" fontSize={{ base: '2rem', md: 'clamp(2rem, 3.5vw, 3rem)' }} fontWeight={300} lineHeight={1.2} mb={4}>
        Ready to refer or <Em>get started?</Em>
      </Heading>

      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={{ base: 8, md: 20 }} mt={12} alignItems="start">
        <VStack spacing={6} align="stretch">
          <Text fontSize="0.95rem" fontWeight={300} color="mid" lineHeight={1.8} mb={2}>
            Whether you're a patient, family member, or healthcare provider — we're here to help. Reach out
            and we'll respond promptly.
          </Text>
          {contactItems.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <Flex gap={4} align="flex-start" p={5} border="1px solid" borderColor="border" borderRadius="2px">
                <Flex minW="40px" w="40px" h="40px" bg="cream" borderRadius="2px" align="center" justify="center" fontSize="1rem">
                  {c.icon}
                </Flex>
                <Box>
                  <Text fontSize="0.78rem" textTransform="uppercase" letterSpacing="0.1em" color="lightGray" mb={1}>
                    {c.label}
                  </Text>
                  {c.href ? (
                    <Link href={c.href} fontSize="0.92rem" color="charcoal" _hover={{ color: 'sage.dark', textDecoration: 'none' }}>
                      {c.value}
                    </Link>
                  ) : (
                    <Text fontSize="0.92rem" color="charcoal">
                      {c.value}
                    </Text>
                  )}
                </Box>
              </Flex>
            </Reveal>
          ))}
        </VStack>

        <Reveal>
          <Box bg="cream" border="1px solid" borderColor="border" borderRadius="3px" p={10}>
            <Heading as="h3" fontFamily="heading" fontSize="1.6rem" fontWeight={400} mb={6}>
              Send Us a Message
            </Heading>

            <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4}>
              <Box>
                <FormLabel fontSize="0.75rem" fontWeight={500} letterSpacing="0.08em" textTransform="uppercase" color="mid">
                  First Name
                </FormLabel>
                <Input placeholder="Jane" value={form.fname} onChange={handleChange('fname')} {...fieldStyles} />
              </Box>
              <Box>
                <FormLabel fontSize="0.75rem" fontWeight={500} letterSpacing="0.08em" textTransform="uppercase" color="mid">
                  Last Name
                </FormLabel>
                <Input placeholder="Smith" value={form.lname} onChange={handleChange('lname')} {...fieldStyles} />
              </Box>
            </Grid>

            <Box mt={4}>
              <FormControl isRequired isInvalid={!validEmail}>
                <FormLabel fontSize="0.75rem" fontWeight={500} letterSpacing="0.08em" textTransform="uppercase" color="mid">
                  Email
                </FormLabel>
                <Input type="email" placeholder="you@example.com" value={form.email} 
                onChange={(e) => {
                  setForm({...form, email: e.target.value})
                  setValidEmail(emailRegex.test(e.target.value));
                }}
                {...fieldStyles} />
                {!validEmail && <FormErrorMessage>Please enter a valid email address!</FormErrorMessage>}
              </FormControl>
            </Box>

            <Box mt={4}>
              <FormControl isRequired isInvalid={!validPhone}>
                <FormLabel fontSize="0.75rem" fontWeight={500} letterSpacing="0.08em" textTransform="uppercase" color="mid">Phone</FormLabel>
                <InputGroup>
                  <InputLeftAddon bg="cream" borderColor="border" color="mid" fontSize="0.88rem" borderRadius="2px">+1</InputLeftAddon>
                  <InputMask
                    mask="(999) 999-9999"
                    value={form.phone}
                    onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        setValidPhone(phoneRegex.test(e.target.value));
                      }
                    }
                  >
                    {(inputProps) => (
                      <Input
                        {...inputProps}
                        type="tel"
                        placeholder="(123) 456-7890"
                        {...fieldStyles}
                        borderLeftRadius={0}
                      />
                    )}
                  </InputMask>
                </InputGroup>
                {!validPhone && <FormErrorMessage>Please enter a valid phone number!</FormErrorMessage>}
              </FormControl>
            </Box>

            <Box mt={4}>
              <FormLabel fontSize="0.75rem" fontWeight={500} letterSpacing="0.08em" textTransform="uppercase" color="mid">
                I am a...
              </FormLabel>
              <Select placeholder="Select one" value={form.type} onChange={handleChange('type')} {...fieldStyles}>
                <option>Patient or Family Member</option>
                <option>Physician / Provider</option>
                <option>Hospital Staff</option>
                <option>Assisted Living / SNF</option>
                <option>Other</option>
              </Select>
            </Box>

            <Box mt={4} mb={6}>
              <FormLabel fontSize="0.75rem" fontWeight={500} letterSpacing="0.08em" textTransform="uppercase" color="mid">
                Message
              </FormLabel>
              <Textarea placeholder="Tell us how we can help..." minH="100px" value={form.message} onChange={handleChange('message')} {...fieldStyles} />
            </Box>

            <Button variant="solid" w="100%" py="0.9rem" h="auto" onClick={handleSubmit}>
              Send Message
            </Button>
          </Box>
        </Reveal>
      </Grid>
    </Box>
  );
}

export function Footer() {
  return (
    <Flex
      as="footer"
      bg="#1e1e1e"
      color="rgba(255,255,255,0.5)"
      px="8%"
      py={12}
      align="center"
      justify="space-between"
      flexWrap="wrap"
      gap={6}
      direction={{ base: 'column', sm: 'row' }}
      textAlign={{ base: 'center', sm: 'left' }}
    >
      <Text fontFamily="heading" fontSize="1.6rem" fontWeight={600} color="rgba(255,255,255,0.85)">
        Daisy Hills{' '}
        <Text as="span" color="gold">
          Home Care
        </Text>
      </Text>
      <Text fontSize="0.78rem">© 2026 Daisy Hills Home Care · Greater Milwaukee Area · All rights reserved.</Text>
      <HStack spacing={6}>
        {['About', 'Services', 'Providers', 'Contact'].map((l) => (
          <Link
            key={l}
            href={`#${l.toLowerCase()}`}
            fontSize="0.78rem"
            color="rgba(255,255,255,0.4)"
            _hover={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
          >
            {l}
          </Link>
        ))}
      </HStack>
    </Flex>
  );
}
