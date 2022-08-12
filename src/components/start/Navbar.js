import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link } from 'react-scroll';

function Navbar() {
  const bg = useColorModeValue('white', 'bg');
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <chakra.header
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Nicolas Hasenkopf"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Nicolas Hasenkopf</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="700" ml="2">
              Nicolas Hasenkopf
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{
                base: 'none',
                md: 'inline-flex',
              }}
            >
              <Link to="start" smooth={true} spy={true}>
                <Button variant="ghost">Start</Button>
              </Link>
              <Link to="aboutme" smooth={true} spy={true}>
                <Button variant="ghost">About me</Button>
              </Link>
              <Link to="skills" smooth={true} spy={true}>
                <Button variant="ghost">Skills</Button>
              </Link>
              <Link to="work" smooth={true} spy={true}>
                <Button variant="ghost">Work</Button>
              </Link>
              <Link to="whyme" smooth={true} spy={true}>
                <Button variant="ghost">Why me?</Button>
              </Link>
              <Link to="pricing" smooth={true} spy={true}>
                <Button variant="ghost">Pricing</Button>
              </Link>
              <Link to="contact" smooth={true} spy={true}>
                <Button bg="secondaryLight" color="bg" size="md">
                  Contact
                </Button>
              </Link>
              <ColorModeSwitcher />
            </HStack>
            <Box
              display={{
                base: 'inline-flex',
                md: 'none',
              }}
            >
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                icon={<FontAwesomeIcon icon={faBars} />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Link to="start" smooth={true} spy={true}>
                  <Button w="full" variant="ghost">
                    Start
                  </Button>
                </Link>
                <Link to="aboutme" smooth={true} spy={true}>
                  <Button w="full" variant="ghost">
                    About me
                  </Button>
                </Link>
                <Link to="skills" smooth={true} spy={true}>
                  <Button w="full" variant="ghost">
                    Skills
                  </Button>
                </Link>
                <Link to="work" smooth={true} spy={true}>
                  <Button w="full" variant="ghost">
                    Work
                  </Button>
                </Link>
                <Link to="whyme" smooth={true} spy={true}>
                  <Button w="full" variant="ghost">
                    Why me?
                  </Button>
                </Link>
                <Link to="pricing" smooth={true} spy={true}>
                  <Button w="full" variant="ghost">
                    Pricing
                  </Button>
                </Link>
                <Link to="contact" smooth={true} spy={true}>
                  <Button
                    variant="ghost"
                    bg="secondaryLight"
                    color="bg"
                    size="md"
                  >
                    Contact
                  </Button>
                </Link>
                <ColorModeSwitcher />
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}

export default Navbar;
