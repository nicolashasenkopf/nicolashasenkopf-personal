import { Center } from '@chakra-ui/react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-scroll';
import Particles from 'react-tsparticles';
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
      <Particles
        className="particles"
        options={{
          preset: 'links',
          background: {
            color: 'bg',
          },
          particles: {
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 60,
            },
          },
          detectRetina: true,
        }}
        init={particlesInit}
      />
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
