import { Box, chakra, Flex, Link, Stack } from '@chakra-ui/react';
import scroll from 'react-scroll';
import React from 'react';

function Welcome() {
  return (
    <Flex
      p={{
        base: '10',
        md: '100',
      }}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex justify="center" w="full">
        <Box
          w={{
            base: 'full',
            md: '75%',
            lg: '50%',
          }}
          px={4}
          py={20}
          textAlign={{
            base: 'left',
            md: 'center',
          }}
        >
          <chakra.span
            fontSize={{
              base: '3xl',
              sm: '4xl',
            }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{
              color: 'white',
            }}
            mb={6}
          >
            <chakra.span display="block">Hey, ich bin Nicolas!</chakra.span>
            <chakra.span
              display="block"
              color="secondaryDark"
              _dark={{
                color: 'secondaryMedium',
              }}
            >
              Web- und Mobileentwickler
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{
              base: 'left',
              md: 'center',
            }}
            direction={{
              base: 'column',
              sm: 'row',
            }}
            spacing={5}
            mt={2}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={8}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color="white"
                bg="secondaryDark"
                /*
                            _hover={{
                                bg: "brand.700",
                                _dark: {
                                    bg: "brand.600",
                                },
                            }} */
              >
                <scroll.Link smooth={true} spy={true} to="work">
                  Portfolio
                </scroll.Link>
              </Link>
            </Box>
            <Box ml={3} display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={8}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color="bg"
                bg="secondaryLight"
              >
                <scroll.Link smooth={true} spy={true} to="contact">
                  Contact
                </scroll.Link>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Welcome;
