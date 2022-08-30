import { Box, Center, chakra, Flex, Image, Link, Text } from '@chakra-ui/react';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faXing,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import scroll from 'react-scroll';
import React from 'react';
import me from '../../images/about.jpg';
import './Aboutme.scss';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Aboutme() {
  const age = () => {
    var ageDifMs = Date.now() - new Date(1069110000000);
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  const devDuration = () => {
    const currentAge = age();
    return currentAge - 12; // I started coding when I was 12
  };

  return (
    <AnimationOnScroll
      animateIn="animate__fadeIn"
      duration={1.5}
      animateOnce={true}
      animatePreScroll={true}
    >
      <div id="aboutme" className="Aboutme">
        <Box textAlign="center" px={8} py={10}>
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
            About me
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
            Eine kurze Beschreibung über meine Persönlichkeit
          </chakra.p>
        </Box>

        <Center className="Image">
          <Flex w="full" alignItems="center" justifyContent="center">
            <Box
              w="xs"
              bg="bg"
              _dark={{
                bg: 'white',
              }}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
              mx="auto"
            >
              <Image w="full" h={56} fit="cover" src={me} alt="avatar" />

              <Box py={5} textAlign="center">
                <Link
                  display="block"
                  fontSize="2xl"
                  color="white"
                  _dark={{
                    color: 'secondaryDark',
                  }}
                  fontWeight="bold"
                >
                  Nicolas Hasenkopf
                </Link>
                <chakra.span fontSize="sm" color="secondaryLight">
                  Software Entwickler
                </chakra.span>
              </Box>
            </Box>
          </Flex>
        </Center>
        <Center mt={5}>
          <Text fontSize="xl" className="textContent">
            Ich bin Nicolas Hasenkopf, {age()} Jahre alt und entwickle
            leidenschaftlich gerne Webseiten und Mobile-Apps. Seit{' '}
            {devDuration()} Jahren beschäftige ich mich nun schon mit der
            Informatik und mit dem Programmieren. 2021 konnte ich dann mein
            Hobby zum Beruf machen und ich bin froh diesen Weg gewählt zu haben!
          </Text>
        </Center>
        <Center className="Socials">
          <Link href="https://twitter.com/N_Hasenkopf" isExternal>
            <FontAwesomeIcon icon={faTwitter} size="2xl" />
          </Link>
          <Link href="https://github.com/nicolashasenkopf" isExternal>
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nicolas-hasenkopf-068983220/"
            isExternal
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </Link>
          <Link
            href="https://www.xing.com/profile/Nicolas_Hasenkopf/"
            isExternal
          >
            <FontAwesomeIcon icon={faXing} size="2xl" />
          </Link>
        </Center>
        <Center>
          <scroll.Link
            className="iconDown"
            to="skills"
            smooth={true}
            spy={true}
          >
            <FontAwesomeIcon size="3x" icon={faChevronDown} />
          </scroll.Link>
        </Center>
      </div>
    </AnimationOnScroll>
  );
}

export default Aboutme;
