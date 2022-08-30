import { Box, Center, chakra, Flex, SimpleGrid } from '@chakra-ui/react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-scroll';
import skills from '../../utils/skills';
import './Skills.scss';

function Skills() {
  const Feature = props => {
    return (
      <Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          mb={4}
          rounded="full"
          color="secondaryMedium"
          _dark={{
            color: 'secondaryMedium',
          }}
          bg="secondaryMedium"
        >
          <FontAwesomeIcon color={props.color} icon={props.icon} />
        </Flex>
        <chakra.h3
          mb={2}
          fontWeight="semibold"
          lineHeight="shorter"
          _light={{
            color: 'gray.900',
          }}
        >
          {props.title}
        </chakra.h3>
        <chakra.p fontSize="sm" color="secondaryLight">
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <AnimationOnScroll
      animateIn="animate__fadeIn"
      duration={1.5}
      animateOnce={true}
      animatePreScroll={true}
    >
      <div id="skills" className="Skills">
        <Flex w="auto" justifyContent="center" alignItems="center">
          <Box px={8} py={20} mx="auto">
            <Box textAlign="center">
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
                Skills
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
                Eine Übersicht über alle Technologien die ich benutze um
                Webseiten und Apps zu entwickeln
              </chakra.p>
            </Box>
            <SimpleGrid
              columns={{
                base: 1,
                sm: 2,
                md: 3,
                lg: 4,
              }}
              spacingX={{
                base: 16,
                lg: 24,
              }}
              spacingY={20}
              mt={20}
              p={10}
            >
              {skills.map(skill => (
                <Feature
                  color={skill.color}
                  title={skill.title}
                  icon={skill.icon}
                >
                  {skill.description}
                </Feature>
              ))}
            </SimpleGrid>
          </Box>
        </Flex>

        <Center>
          <Link to="work" className="iconDown" smooth={true} spy={true}>
            <FontAwesomeIcon size="3x" icon={faChevronDown} />
          </Link>
        </Center>
      </div>
    </AnimationOnScroll>
  );
}

export default Skills;
