import React from 'react'
import { Box, Image, Input, Text } from '@chakra-ui/react'
import { Select, Stack, InputGroup, Flex, Spacer } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

import { BellIcon, EmailIcon } from '@chakra-ui/icons'
function Header() {
  return (
    <div className="pb-10 pt-0" >

    <Flex minWidth='max-content' alignItems='center' gap='2'>
    <Box p="2" bg='white.400'>
    
    <Stack spacing={4}>

  <InputGroup size='sm'>
  <Input placeholder='&#61442; courses, tasks, homeworks..' size='sm' width='500px' />
  <Select placeholder='Tasks' width='100px'>
  <option value='option1'>Task 1</option>
  <option value='option2'>Task 2</option>
  <option value='option3'>Task 3</option>
</Select>

  </InputGroup>

</Stack>
    </Box>
    <Spacer />
    <Box p='10' gap='2'>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
    <Box p='2' gap='2'>

    <Icon as={EmailIcon} boxSize='1.1em' />
    <Icon viewBox='0 0 200 200' color='green.500' boxSize='.7em'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
</Icon>
    </Box>
    <Box p='2' gap='2'>
    <Icon as={BellIcon} boxSize='1.1em' />
    <Icon viewBox='0 0 200 200' color='red.500' boxSize='.7em'>
  <path
    fill='currentColor'
    d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
  />
    </Icon>
    </Box>
    
    <Box p='1' gap='2'>
    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' boxSize='25px' borderRadius='full'/>
    </Box>
    <Box p='0' gap='2'>
    <Text fontSize='md' fontWeight={'bold'}>Israa Adel Ba</Text>
    </Box>
</Flex>
    </Box>
    </Flex>

    </div>
  )
}

export default Header