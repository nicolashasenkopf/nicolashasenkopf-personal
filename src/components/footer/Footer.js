import { chakra, Box, Center, SimpleGrid, Text } from '@chakra-ui/react';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faXing,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Footer.scss';

function Footer() {
  return (
    <div className="Footer">
      <Box
        w="full"
        color="white"
        boxShadow="lg"
        mt={10}
        borderTop="solid"
        borderTopColor="secondaryMedium"
        bg="bg"
        p={5}
        alignItems="center"
        justifyContent="center"
      >
        <Center>
          <SimpleGrid columns={{ base: 1, sm: 3 }} maxWidth="1440px">
            <Center>
              <Link to="/impressum">Impressum</Link>
            </Center>
            <Center>
              <chakra.a
                href="https://status.nicolas-hasenkopf.de/"
                target="_blank"
              >
                Status
              </chakra.a>
            </Center>
            <Center>
              <Link to="/datenschutz">Datenschutzerklärung</Link>
            </Center>
          </SimpleGrid>
        </Center>
        <Text mt={3} textAlign="center">
          Made with <FontAwesomeIcon icon={faHeart} color="red" /> by{' '}
          <Link to="/">Nicolas Hasenkopf</Link>
        </Text>
        <Center className="Socials">
          <chakra.a href="https://twitter.com/N_Hasenkopf" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="2xl" />
          </chakra.a>
          <chakra.a href="https://github.com/nicolashasenkopf" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </chakra.a>
          <chakra.a
            href="https://www.linkedin.com/in/nicolas-hasenkopf-068983220/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </chakra.a>
          <chakra.a
            href="https://www.xing.com/profile/Nicolas_Hasenkopf/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faXing} size="2xl" />
          </chakra.a>
        </Center>
      </Box>
    </div>
  );
}

export default Footer;
