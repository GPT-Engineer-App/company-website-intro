import { Container, VStack, Heading, Text, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center" py={10} px={6}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Our Company
          </Heading>
          <Text fontSize="lg" color="gray.500">
            We provide innovative software solutions to help your business grow.
          </Text>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" py={10} px={6}>
          <Box flex="1" textAlign={{ base: "center", md: "left" }} mb={{ base: 8, md: 0 }}>
            <Heading as="h2" size="xl" mb={4}>
              Our Software Functions
            </Heading>
            <Text fontSize="md" color="gray.500" mb={4}>
              Our software offers a range of features designed to streamline your business processes and enhance productivity.
            </Text>
            <Button colorScheme="teal" size="lg" leftIcon={<FaRocket />}>
              Learn More
            </Button>
          </Box>
          <Box flex="1" textAlign="center">
            <Image src="/images/software-functions.png" alt="Software Functions" boxSize="300px" objectFit="cover" />
          </Box>
        </Flex>

        <Box textAlign="center" py={10} px={6}>
          <Heading as="h2" size="xl" mb={4}>
            Contact Us
          </Heading>
          <Text fontSize="md" color="gray.500" mb={4}>
            Have questions? Get in touch with us to learn more about our services.
          </Text>
          <Button colorScheme="teal" size="lg">
            Contact Us
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;