import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Aboutme from '../components/aboutme/Aboutme';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Skills from '../components/skills/Skills';
import Home from '../components/start/Home';
import Whyme from '../components/whyme/Whyme';
import Work from '../components/work/Work';

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

function App() {
  useEffect(() => {
    window.onscroll = event => {
      var button = document.getElementById('ScrollToTopButton');
      var button2 = document.getElementById('ColorSwitch');
      if (window.scrollY >= 200) {
        button.style.display = 'block';
        button2.style.display = 'block';
      } else {
        button.style.display = 'none';
        button2.style.display = 'none';
      }
    };
  });

  return (
    <ChakraProvider theme={theme}>
      <Home />
      <Aboutme />
      <Skills />
      <Work />
      <Whyme />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </ChakraProvider>
  );
}

export default App;
