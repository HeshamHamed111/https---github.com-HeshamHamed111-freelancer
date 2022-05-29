import { Flex, Spacer, Text } from '@chakra-ui/react'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Lessons() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' className='py-5 px-2'>
        <Text fontWeight='bold'>
            Lessons 
        </Text>
        <Spacer />
        <Text>
        <FontAwesomeIcon icon={faEllipsisVertical} className='mr-3' color='gray' />
        </Text>
    </Flex>
  )
}

export default Lessons