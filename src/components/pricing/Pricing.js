import {
  Box,
  Button,
  Center,
  chakra,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import scroll from 'react-scroll';
import './Pricing.scss';

function Pricing() {
  const [frequency, setFrequency] = useState('Monat');

  const Feature = props => {
    return (
      <Flex align="center">
        <Flex shrink={0}>
          <FontAwesomeIcon color="#2A4365" icon={faCheck} />
        </Flex>
        <Box ml={4}>
          <chakra.span mt={2} color="secondaryDark">
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };

  return (
    <div className="Pricing" id="pricing">
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box py="64px" px="10">
          <Box w="full" px={[10, 10, 4]} mx="auto" textAlign="center">
            <chakra.p
              mt={2}
              fontSize={{
                base: '3xl',
                sm: '4xl',
              }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              _light={{
                color: 'gray.900',
              }}
            >
              Pricing
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{
                lg: 'auto',
              }}
              color="secondaryLight"
            >
              Hier eine Übersicht über die Entwicklungs- und Wartungskosten
            </chakra.p>
            <Flex mt={2} justify="center" mx={['auto', 0]} mb={-2}>
              <Stack
                direction="row"
                justify="space-between"
                p="2"
                textAlign="center"
                rounded="md"
                bg="secondaryLight"
              >
                <Button
                  colorScheme="brand"
                  variant={frequency === 'Monat' ? 'solid' : 'ghost'}
                  onClick={() => setFrequency('Monat')}
                  px={6}
                >
                  Monatlich
                </Button>
                <Button
                  colorScheme="brand"
                  variant={frequency === 'Jahr' ? 'solid' : 'ghost'}
                  onClick={() => setFrequency('Jahr')}
                  px={6}
                >
                  J&auml;hrlich
                </Button>
              </Stack>
            </Flex>
          </Box>
          <Box maxW="1440px" py="20" mx="auto">
            <SimpleGrid columns={[1, 1, 1, 3]} gap={[16, 8]}>
              <Box rounded='lg' shadow={['none', 'xl']} bg="white">
                <Flex
                  direction="column"
                  justify="space-between"
                  p="6"
                  borderBottomWidth="1px"
                  color="gray.200"
                  _dark={{
                    color: 'gray.600',
                  }}
                >
                  <chakra.p
                    mb={1}
                    fontSize="lg"
                    fontWeight="semibold"
                    color="gray.400"
                  >
                    Webseite
                  </chakra.p>
                  <Text
                    mb={2}
                    fontSize="2xl"
                    fontWeight={['bold', 'extrabold']}
                    color="gray.900"
                    _dark={{
                      color: 'secondaryDark',
                    }}
                    lineHeight="tight"
                  >
                    INDIVIDUELL*
                    <chakra.span
                      fontSize="2xl"
                      fontWeight="medium"
                      color="gray.400"
                    >
                      {' '}
                      /einmalig
                    </chakra.span>
                  </Text>
                  <Link
                    w={['full', 'full', 'auto']}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    rounded="md"
                    shadow="md"
                    _light={{
                      color: 'white',
                    }}
                    bg="secondaryLight"
                    _hover={{
                      bg: 'secondaryDark',
                      color: 'secondaryLight',
                    }}
                  >
                    <scroll.Link to='contact' spy={true} smooth={true}>
                      Contact
                    </scroll.Link>
                  </Link>
                </Flex>
                <Stack direction="column" p="6" spacing="3" flexGrow="1">
                  <Feature>Eigene Domain</Feature>
                  <Feature>Pers&ouml;nliche Beratung</Feature>
                  <Feature>Individuelles Design</Feature>
                  <Feature>Modernes Design</Feature>
                  <Feature>Tracking und Analytics</Feature>
                  <Feature>Admin-Oberfl&auml;che</Feature>
                </Stack>
                <Text
                  p="6"
                  fontWeight="medium"
                  fontSize="sm"
                  color="secondaryLight"
                >
                  * Der Preis ist abh&auml;ngig vom Unfang und der
                  Funktionalitäten der Webseite
                </Text>
              </Box>

              <Box rounded='lg' shadow={['none', 'xl']} bg="white">
                <Flex
                  direction="column"
                  justify="space-between"
                  p="6"
                  borderBottomWidth="1px"
                  color="gray.200"
                  _dark={{
                    color: 'gray.600',
                  }}
                >
                  <chakra.p
                    mb={1}
                    fontSize="lg"
                    fontWeight="semibold"
                    color="gray.400"
                  >
                    App
                  </chakra.p>
                  <Text
                    mb={2}
                    fontSize="2xl"
                    fontWeight={['bold', 'extrabold']}
                    color="gray.900"
                    _dark={{
                      color: 'secondaryDark',
                    }}
                    lineHeight="tight"
                  >
                    INDIVIDUELL*
                    <chakra.span
                      fontSize="2xl"
                      fontWeight="medium"
                      color="gray.400"
                    >
                      {' '}
                      /einmalig
                    </chakra.span>
                  </Text>
                  <Link
                    w={['full', 'full', 'auto']}
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    px={5}
                    py={3}
                    border="solid transparent"
                    fontWeight="bold"
                    rounded="md"
                    shadow="md"
                    _light={{
                      color: 'white',
                    }}
                    bg="secondaryLight"
                    _hover={{
                      bg: 'secondaryDark',
                      color: 'secondaryLight',
                    }}
                  >
                    <scroll.Link to='contact' spy={true} smooth={true}>
                      Contact
                    </scroll.Link>
                  </Link>
                </Flex>
                <Stack direction="column" p="6" spacing="3" flexGrow="1">
                  <Feature>Pers&ouml;nliche Beratung</Feature>
                  <Feature>Individuelles Design</Feature>
                  <Feature>Modernes Design</Feature>
                  <Feature>Tracking und Analytics</Feature>
                  <Feature>Admin-Oberfl&auml;che</Feature>
                  <Feature>Android und iOS</Feature>
                  <Feature>
                    Ver&ouml;ffentlichung im Google Play Store und im Apple App
                    Store
                  </Feature>
                </Stack>
                <Text
                  p="6"
                  fontWeight="medium"
                  fontSize="sm"
                  color="secondaryLight"
                >
                  * Der Preis ist abh&auml;ngig vom Unfang und der
                  Funktionalitäten der App
                </Text>
              </Box>

              <Box rounded='lg' shadow={['none', 'xl']} bg="white">
                <Flex
                  direction="column"
                  justify="space-between"
                  p="6"
                  borderBottomWidth="1px"
                  color="gray.200"
                  _dark={{
                    color: 'gray.600',
                  }}
                >
                  <chakra.p
                    mb={1}
                    fontSize="lg"
                    fontWeight="semibold"
                    color="gray.400"
                  >
                    Wartungskosten
                  </chakra.p>
                  <Text
                    fontSize="5xl"
                    fontWeight={['bold', 'extrabold']}
                    color="gray.900"
                    _dark={{
                      color: 'secondaryDark',
                    }}
                    lineHeight="tight"
                  >
                    {frequency === 'Monat' ? 30 : 300}€
                    <chakra.span
                      fontSize="2xl"
                      fontWeight="medium"
                      color="gray.400"
                    >
                      {' '}
                      /{frequency}
                    </chakra.span>
                  </Text>
                </Flex>
                <Stack direction="column" p="6" spacing="3" flexGrow="1">
                  <Feature>24/7 Support</Feature>
                  <Feature>Hosting</Feature>
                  <Feature>Uptime-Monitoring</Feature>
                  <Feature>99.99% Garantierte Onlinezeit</Feature>
                  <Feature>Updates/Backups</Feature>
                  <Feature>Performance Optimierung</Feature>
                </Stack>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
      <Center>
        <scroll.Link to="contact" className="iconDown" smooth={true} spy={true}>
          <FontAwesomeIcon size="3x" icon={faChevronDown} />
        </scroll.Link>
      </Center>
    </div>
  );
}

export default Pricing;
