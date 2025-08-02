import { Container, VStack, Text, Box, Heading, HStack, Card, CardHeader, CardBody, CardFooter, Image, Center, SimpleGrid } from "@chakra-ui/react"
import { growLine } from "../components/LineAnimation";
import Bottom from "../components/Bottom";


const staffMembers = [
    {
        name: "John Doe",
        title: "Lead Caregiver",
        desc: "10 years of experience in home care.",
        img: "https://images.stockcake.com/public/a/e/f/aef9d768-6abd-4bde-8a44-e0c7b99740ef_medium/confident-medical-professional-stockcake.jpg",
    },
    {
        name: "Jane Smith",
        title: "Nurse Practitioner",
        desc: "Specializes in geriatric care.",
        img: "https://headshots-inc.com/wp-content/uploads/2021/01/Professional-Headshot-Examples-31-1.jpg",
    },
    {
        name: "Lisa Miller",
        title: "Physical Therapist",
        desc: "Expert in mobility and rehabilitation.",
        img: "https://images.stockcake.com/public/c/5/c/c5cc9ab7-005f-415e-b471-e9c612fef21b_medium/confident-medical-professional-stockcake.jpg",
    },
];

const About = () => {
  return (
    <Container maxW="container.xl" py={20}> 
        <VStack spacing={12} align="center" textAlign="center">
            <Box position={"relative"} mb={8}>
                <Heading 
                    as="h1" 
                    size="2xl" 
                    textShadow={"2px 2px 4px rgba(86, 84, 84, 0.3)"}
                >
                    About Us And Our Team
                </Heading>
                <Box 
                    position="absolute"
                    bottom={-4} // adjust as needed
                    left="-10%"
                    height="4px"
                    width="120%"
                    bg="blue.500"
                    borderRadius={"30px 30px 30px 30px"}
                    transformOrigin="left"
                    animation={`${growLine} 2s ease-out forwards`}
                />
            </Box>

            <Box>
                <Text fontSize="3xl" fontWeight="bold">
                    Our Mission
                </Text>
                <Text fontSize="lg" mt={4} maxW="3xl" mx="auto">
                    Our mission is to provide affordable, reliable, and personalized in-home care that empowers 
                    individuals to live safely and comfortably in the place they know best—their own homes. 
                    We are dedicated to preserving dignity, promoting independence, and enhancing quality of life for every client we serve. 
                    We strive to be a trusted partner in health and wellness, ensuring that our clients receive the highest standard of 
                    care tailored to their unique needs. Our highly trained staff is commited to delivering the best possible care with 
                    compassion, respect, and integrity.
                </Text>
            </Box>
            <Box>
                <Text fontSize="3xl" fontWeight="bold">
                    Our Staff
                </Text>
                <Text fontSize="lg" mt={4} maxW="3xl" mx="auto">
                    Our team is composed of highly trained and compassionate professionals who are dedicated to providing the best care possible. 
                    Each member of our staff undergoes rigorous training and background checks to ensure that they meet our high standards of care. 
                    We believe in continuous education and support for our team, enabling them to stay updated with the latest in healthcare practices.
                </Text>
            </Box>
            <Box>
                <SimpleGrid 
                    columns={{ base: 1, md: 3 }} 
                    spacing={10} 
                    mt={8}
                >
                    {staffMembers.map((staff, index) => (
                        <Card
                            key={index}
                            maxW="sm"
                            borderRadius="lg"
                            boxShadow="lg"
                            transition="transform 0.3s, box-shadow 0.3s"
                            _hover={{
                                transform: "translateY(-5px)",
                                boxShadow: "2xl",
                            }}
                        >
                            <Center mt={6}>
                                <Image
                                borderRadius="full"
                                boxSize="120px"
                                src={staff.img}
                                alt={staff.name}
                                />
                            </Center>
                            <CardHeader textAlign="center">
                                <Heading size="md">{staff.name}</Heading>
                            </CardHeader>
                            <CardBody textAlign="center" color="gray.600">
                                <Text fontWeight="medium">{staff.title}</Text>
                            </CardBody>
                            <CardFooter textAlign="center" justifyContent="center">
                                <Text fontSize="sm" color="gray.500">{staff.desc}</Text>
                            </CardFooter>
                        </Card>
                    ))}
                </SimpleGrid>
            </Box>
            <Box>
                <Text fontSize="3xl" fontWeight="bold">
                    Testimonials
                </Text>
                <Text fontSize="lg" mt={4} maxW="3xl" mx="auto">
                    "The care my mother received was exceptional. The staff was attentive, compassionate, and truly made a difference in her quality of life." - Sarah L.
                </Text>
                <Text fontSize="lg" mt={4} maxW="3xl" mx="auto">
                    "I can't thank the team enough for their support during my recovery. They were always there when I needed them." - John D.
                </Text>
            </Box>
            <Bottom />
        </VStack>
    </Container>
  )
}

export default About
