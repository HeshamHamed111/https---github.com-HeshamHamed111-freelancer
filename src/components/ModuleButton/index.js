import { Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'

function ModelButton() {
  return (
    <Box w='100%' p={4} color='white' textAlign={'right'}>
    <Button colorScheme='blue' h="30px" fontSize='10px' w="110px">
    <Flex>
    <Text fontSize='20px'>+</Text>
   <Text lineHeight='30px' className='ml-1'>Module</Text> 
    </Flex> 
     </Button>
  </Box> 
  )
}

export default ModelButton