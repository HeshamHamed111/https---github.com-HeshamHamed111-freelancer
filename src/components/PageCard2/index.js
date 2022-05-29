import React from 'react'
import { SimpleGrid } from '@chakra-ui/react';
import Card from './Card.js';

function PageCards2() {
  return (
    <>
    <SimpleGrid columns={3} width={'70%'} m={'auto'} spacingY="20px" my={10}> 
    <Card />
    <Card />

    <Card />

    <Card />

    <Card />

    <Card />
  </SimpleGrid>
    </>
  )
}

export default PageCards2