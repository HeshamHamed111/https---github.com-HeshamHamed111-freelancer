import React from 'react'
import { Flex, Spacer, Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import PageHeader2 from '../components/PageHeader2';
import PageCards2 from '../components/PageCard2';
import Title from '../components/Title';
 
function Page2() {
  return (
    <React.Fragment>
    <Flex minWidth="max-content" alignItems="center" gap="2">
    <Box p="2">
      <PageHeader2 />
    </Box>
    <Spacer />
    <Button colorScheme="blue" mt={50} me={10}>
      + Discussion Room
    </Button>
  </Flex>
  <Title text="Discussion rooms"/>
  <PageCards2 />
    </React.Fragment>
  )
}

export default Page2