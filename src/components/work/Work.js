import { Box, Center, chakra, Flex, SimpleGrid, Tag } from '@chakra-ui/react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-scroll';
import works from '../../utils/works';
import './Work.scss';

function Work() {
  const WorkItem = props => {
    const getTagColor = () => {
      if (props.status === 'ONLINE') {
        return 'green';
      } else if (props.status === 'INWORK') {
        return 'orange';
      } else if (props.status === 'OFFLINE') {
        return 'red';
      } else if (props.status === 'OPEN') {
        return 'green';
      } else {
        return 'red';
      }
    };

    const getTagText = () => {
      if (props.status === 'ONLINE') {
        return 'ONLINE';
      } else if (props.status === 'INWORK') {
        return 'IN ARBEIT';
      } else if (props.status === 'OFFLINE') {
        return 'OFFLINE';
      } else if (props.status === 'OPEN') {
        return 'OFFEN';
      } else {
        return 'Keine Angabe';
      }
    };

    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          w="sm"
          mx="auto"
        >
          <Tag
            alignSelf="self-end"
            zIndex={1}
            mb={-2}
            size="md"
            variant="solid"
            colorScheme={getTagColor()}
          >
            {getTagText()}
          </Tag>

          <Box
            bg="gray.300"
            h={64}
            w="full"
            rounded="lg"
            shadow="md"
            bgSize="cover"
            bgPos="center"
            bgImage={props.imageUrl}
          ></Box>

          <Box
            w={{
              base: 56,
              md: 64,
            }}
            bg="bg"
            mt={-10}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
          >
            <chakra.h3
              py={2}
              textAlign="center"
              fontWeight="bold"
              textTransform="uppercase"
              color="white"
              letterSpacing={1}
            >
              {props.title}
            </chakra.h3>

            <Flex
              alignItems="center"
              justifyContent="space-between"
              py={2}
              px={3}
              bg="secondaryLight"
            >
              <chakra.span textAlign="center" fontWeight="bold" color="bg">
                {props.description}
              </chakra.span>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    );
  };

  return (
    <div id="work" className="Work">
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
              Work
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
              Eine Übersicht über ein paar Projekte die ich bereits umgesetzt
              habe bzw. in Umsetzung sind
            </chakra.p>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }}>
            {works.map(work => (
              <WorkItem
                title={work.title}
                description={work.description}
                imageUrl={work.imageUrl}
                url={work.url}
                status={work.status}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Flex>

      <Center>
        <Link to="whyme" className="iconDown" smooth={true} spy={true}>
          <FontAwesomeIcon size="3x" icon={faChevronDown} />
        </Link>
      </Center>
    </div>
  );
}

export default Work;
