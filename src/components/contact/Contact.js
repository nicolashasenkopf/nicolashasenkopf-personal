import {
  Box,
  Button,
  Center,
  chakra,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Text,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import {
  faCircleCheck,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import './Contact.scss';

function Contact() {
  const toast = useToast();

  function validateEmail(value) {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let error;
    if (!value) {
      error = 'Email wird benötigt';
    } else if (!re.test(value.toLowerCase())) {
      error = 'Bitte geben Sie eine valide Email ein';
    }
    return error;
  }

  function validateName(value) {
    let error;
    if (!value) {
      error = 'Name wird benötigt';
    } else if (value.length > 124) {
      error = 'Der Name darf nicht länger als 124 Zeichen sein';
    }
    return error;
  }

  function validateMessage(value) {
    let error;
    if (!value) {
      error = 'Nachricht wird benötigt';
    } else if (value.length > 2048) {
      error = 'Die Nachricht darf nicht länger als 2048 Zeichen sein';
    }
    return error;
  }

  const successAlert = props => {
    return (
      <Flex
        w="full"
        p={0}
        shadow="md"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          maxW="sm"
          w="full"
          mx="auto"
          bg="white"
          _dark={{
            bg: 'gray.800',
          }}
          rounded="lg"
          overflow="hidden"
        >
          <Flex
            justifyContent="center"
            alignItems="center"
            w={12}
            bg="green.500"
          >
            <FontAwesomeIcon icon={faCircleCheck} color="white" />
          </Flex>

          <Box mx={-3} py={2} px={4}>
            <Box mx={3}>
              <chakra.span
                color="green.500"
                _dark={{
                  color: 'green.400',
                }}
                fontWeight="bold"
              >
                Erfolgreich
              </chakra.span>
              <chakra.p
                color="gray.600"
                _dark={{
                  color: 'gray.200',
                }}
                fontSize="sm"
              >
                {props.message}
              </chakra.p>
            </Box>
          </Box>
        </Flex>
      </Flex>
    );
  };

  const errorAlert = props => {
    return (
      <Flex w="full" p={0} alignItems="center" justifyContent="center">
        <Flex
          maxW="sm"
          w="full"
          mx="auto"
          bg="white"
          _dark={{
            bg: 'gray.800',
          }}
          shadow="md"
          rounded="lg"
          overflow="hidden"
        >
          <Flex justifyContent="center" alignItems="center" w={12} bg="red.500">
            <FontAwesomeIcon icon={faCircleExclamation} color="white" />
          </Flex>

          <Box mx={-3} py={2} px={4}>
            <Box mx={3}>
              <chakra.span
                color="red.500"
                _dark={{
                  color: 'red.400',
                }}
                fontWeight="bold"
              >
                Error
              </chakra.span>
              <chakra.p
                color="gray.600"
                _dark={{
                  color: 'gray.200',
                }}
                fontSize="sm"
              >
                {props.message}
              </chakra.p>
            </Box>
          </Box>
        </Flex>
      </Flex>
    );
  };

  return (
    <div id="contact" className="Contact">
      <Box textAlign="center" px={8}>
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
          Contact
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
          Sie brauchen eine Webseite oder App? Dann kontaktieren Sie mich doch
          hier oder per{' '}
          <Link href="tel:+4915110753705">Telefon (klick mich)</Link>
        </chakra.p>
      </Box>

      <Center>
        <Box
          position="relative"
          mt={20}
          maxW="900px"
          w="full"
          bg="white"
          color="bg"
          borderRadius="2xl"
          boxShadow="xl"
          p={20}
        >
          <Formik
            initialValues={{ email: '', name: '', message: '' }}
            onSubmit={async (values, actions) => {
              const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  email: values.email,
                  name: values.name,
                  text: values.message,
                }),
              };
              const response = await fetch(
                'https://contact.nicolas-hasenkopf.de/contact',
                requestOptions
              );

              if (response.status === 200) {
                toast({
                  render: () =>
                    successAlert({
                      message: 'Ihre Nachricht wurde verschickt',
                    }),
                });
              } else {
                toast({
                  render: () =>
                    errorAlert({
                      message:
                        'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut!',
                    }),
                });
              }

              actions.setSubmitting(false);
            }}
          >
            {props => (
              <Form data-splitbee-event="Kontaktformular">
                <Field name="email" validate={validateEmail}>
                  {({ field, form }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel>Email Adresse</FormLabel>
                      <Input
                        {...field}
                        borderColor="bg"
                        focusBorderColor="bg"
                        type="email"
                        _hover={{
                          borderColor: 'secondaryLight',
                        }}
                      />
                      <FormHelperText color="bg">
                        Ihre Email wird nicht abgespeichert
                      </FormHelperText>
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.name && form.touched.name}
                      mt={5}
                    >
                      <FormLabel>Name</FormLabel>
                      <Input
                        {...field}
                        borderColor="bg"
                        focusBorderColor="bg"
                        type="text"
                        _hover={{
                          borderColor: 'secondaryLight',
                        }}
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="message" validate={validateMessage}>
                  {({ field, form }) => (
                    <FormControl
                      isRequired
                      isInvalid={form.errors.message && form.touched.message}
                      mt={5}
                    >
                      <FormLabel>Nachricht</FormLabel>
                      <Textarea
                        {...field}
                        borderColor="bg"
                        focusBorderColor="bg"
                        type="text"
                        _hover={{
                          borderColor: 'secondaryLight',
                        }}
                      />
                      <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Center>
                  <Button
                    mt={5}
                    bg="secondaryDark"
                    color="white"
                    borderRadius="lg"
                    _hover={{
                      bg: 'secondaryMedium',
                    }}
                    isLoading={props.isSubmitting}
                    type="submit"
                  >
                    Abschicken
                  </Button>
                </Center>
              </Form>
            )}
          </Formik>
          <Text mt={10} fontWeight={500} fontSize="12px" color="secondaryLight">
            * Ich beantworte Anfragen so schnell wie möglich. Auf unseriöse
            Anfragen werde ich keine Antwort geben!
          </Text>
        </Box>
      </Center>
    </div>
  );
}

export default Contact;
