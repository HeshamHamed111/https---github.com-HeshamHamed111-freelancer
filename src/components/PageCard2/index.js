import React from 'react'
import { SimpleGrid } from '@chakra-ui/react';
import Card from './Card.js';

function PageCards2() {
  return (
    <React.Fragment>
    <SimpleGrid columns={3} width={'70%'} m={'auto'} spacingY="20px" my={10}> 
    <Card />
    <Card />

    <Card />

    <Card />

    <Card />

    <Card />
  </SimpleGrid>
    </React.Fragment>
  )
}

export default PageCards2