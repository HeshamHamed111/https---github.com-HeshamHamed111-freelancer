import React from 'react'
import { Box, Flex, Text, Spacer, Divider } from '@chakra-ui/react';
import { Avatar, AvatarGroup } from '@chakra-ui/react';

function Card() {
  return (
    <React.Fragment>
    <Box
    maxW="sm" 
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    height="auto"
  >
    <Flex>
      <Avatar
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        m={4}
        size="sm"
      />
      <Text fontSize="sm" mt={4}>
        Title to the room
      </Text>
      <Spacer />

      <Box me={7} mt={4}>
        <Flex gap={3}>
          <i className="fa fa-lock" style={{ color: '#6bf339' }}></i>
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </Flex>
      </Box>
    </Flex>
    <Flex gap={3}>
      <Box w="53px" />
      <Text fontSize="xs" mt={-7} color="gray.300">
        By : Omar elshenaway{' '}
      </Text>
    </Flex>
    <Text color="gray.500" m={4}>
      Lorem ipsum is placeholder text commonly used in the graphic, print,
      and publishing industries for previewing layouts and visual mockups,
      Lorem ipsum is placeholder text commonly used in the graphic, print.
    </Text>
    <Box ms={4} me={4}>
      <Divider orientation="horizontal" />
    </Box>
    <Flex ms={4} me={4} mt={2}>
      <Text fontSize="xs" color="gray.300">
        Current Date:
      </Text>
      <Spacer />
      <Text fontSize="xs" color="gray.300">
        Published to:{' '}
      </Text>
      <Spacer />
      <Text fontSize="xs" color="gray.300">
        Last post date:
      </Text>
    </Flex>
    <Flex ms={4} me={4} mb={2}>
      <Text fontSize="xs" color="gray.800" as="samp">
        22/2/2022{' '}
      </Text>
      <Spacer />
      <Text fontSize="xs" color="gray.800" as="samp">
        3 classes{' '}
      </Text>
      <Spacer />
      <Text fontSize="xs" color="gray.800" as="samp">
        4 minutes{' '}
      </Text>
    </Flex>
    <Box ms={4} me={4}>
      <Divider orientation="horizontal" />
    </Box>
    <Flex ms={4} me={4} mt={3} mb={3}>
      <AvatarGroup size="sm" max={3}>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar
          name="Prosper Otemuyiwa"
          src="https://bit.ly/prosper-baba"
        />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />

        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />

        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />

        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />

        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />

        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />

        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />

        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />

        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
      <Spacer />
      <Box>
        <Flex gap={2}>
          <i
            class="fas fa-file-alt"
            style={{ color: '#172E7D' }}
            mt={3}
          ></i>

          <Text fontSize="xs" color="gray.800" as="samp">
            3 classes{' '}
          </Text>
        </Flex>
      </Box>
    </Flex>
  </Box>
    </React.Fragment>
  )
}

export default Card