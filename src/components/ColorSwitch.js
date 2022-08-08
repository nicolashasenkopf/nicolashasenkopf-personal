import { Box } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import './ScrollToTopButton.scss';

function ColorSwitch() {
  return (
    <Box
      id="ColorSwitch"
      display="none"
      borderRadius="full"
      bg="secondaryDark"
      position="fixed"
      bottom="100px"
      right="20px"
    >
      <ColorModeSwitcher />
    </Box>
  );
}

export default ColorSwitch;
