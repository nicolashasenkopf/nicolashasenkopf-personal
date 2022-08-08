import { Box, Center } from '@chakra-ui/react';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-scroll';
import './ScrollToTopButton.scss';

function ScrollToTopButton() {
  return (
    <Link to="start" smooth={true} spy={true}>
      <Box
        id="ScrollToTopButton"
        display="none"
        borderRadius="full"
        w="60px"
        h="60px"
        bg="secondaryDark"
        position="fixed"
        bottom="40px"
        right="20px"
      >
        <Center h="100%">
          <FontAwesomeIcon icon={faChevronUp} color="white" />
        </Center>
      </Box>
    </Link>
  );
}

export default ScrollToTopButton;
