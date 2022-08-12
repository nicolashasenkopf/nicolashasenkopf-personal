import {
  chakra,
  Box,
  ChakraProvider,
  extendTheme,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const theme = extendTheme({
  colors: {
    bg: '#1A202C',
    secondaryLight: '#A0AEC0',
    secondaryMedium: '#718096',
    secondaryDark: '#2A4365',
  },
  styles: {
    global: {
      'html, body': {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 700,
      },
    },
  },
});

function Impressum() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        <chakra.p
          mt={5}
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
          Impressum
        </chakra.p>

        <Link to="/">
          <Button mt={2} bg="secondaryLight" color="bg">
            Zurück
          </Button>
        </Link>

        <Box mt={10}>
          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>
            Nicolas Hasenkopf
            <br />
            Frauenauer Str. 38
            <br />
            94277 Zwiesel
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +491743454368
            <br />
            E-Mail: info@nicolas-hasenkopf.de
          </p>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default Impressum;
