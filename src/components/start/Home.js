import { Center, Hide } from '@chakra-ui/react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Particles from 'react-particles';
import { Link } from 'react-scroll';
import { loadLinksPreset } from 'tsparticles-preset-links';
import './Home.scss';
import Navbar from './Navbar';
import Welcome from './Welcome';

function Home() {
  const particlesInit = async main => {
    await loadLinksPreset(main);
  };

  return (
    <div id="start" className="Home">
      <Hide below="md">
        <Particles
          width="100%"
          height="100vh"
          className="particles"
          options={{
            preset: 'links',
            background: {
              color: 'bg',
            },
          }}
          init={particlesInit}
        />
      </Hide>
      <Navbar />
      <Welcome />
      <Center>
        <Link to="aboutme" className="iconDown" smooth={true} spy={true}>
          <FontAwesomeIcon size="3x" icon={faChevronDown} />
        </Link>
      </Center>
    </div>
  );
}

export default Home;
