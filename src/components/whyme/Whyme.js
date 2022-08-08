import { Box, Center, chakra, Flex, Stack } from '@chakra-ui/react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import scroll from 'react-scroll';
import features from '../../utils/features';
import './Whyme.scss';

function Whyme() {
  const Feature = props => {
    return (
      <Flex maxW="700px">
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            _light={{
              color: 'bg',
            }}
            color="white"
          >
            <FontAwesomeIcon size="lg" icon={props.icon} />
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            _light={{
              color: 'gray.900',
            }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd
            mt={2}
            color="secondaryLight"
            _dark={{
              color: 'gray.400',
            }}
          >
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };

  return (
    <div id="whyme" className="Whyme">
      <Box textAlign="center" px={8} py={20}>
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
          Why me?
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
          Warum solltest du mich als Entwickler für deine App/Webseite
          engagieren?
        </chakra.p>
      </Box>

      <Box mt={20} px={8}>
        <Stack
          spacing={{
            base: 10,
            md: 0,
          }}
          display={{
            md: 'grid',
          }}
          gridTemplateColumns={{
            md: 'repeat(2,1fr)',
          }}
          gridColumnGap={{
            md: 8,
          }}
          gridRowGap={{
            base: '20px',
            md: '80px',
          }}
          alignItems="center"
        >
          {features.map(feature => (
            <Center>
              <Feature title={feature.title} icon={feature.icon}>
                {feature.description}
              </Feature>
            </Center>
          ))}
        </Stack>
      </Box>

      <Center>
        <scroll.Link className="iconDown" to="contact" smooth={true} spy={true}>
          <FontAwesomeIcon size="3x" icon={faChevronDown} />
        </scroll.Link>
      </Center>
    </div>
  );
}

export default Whyme;
