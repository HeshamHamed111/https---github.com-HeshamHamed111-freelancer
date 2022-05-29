import { DragHandleIcon, LockIcon, PlusSquareIcon } from '@chakra-ui/icons'
import { Box, Flex, Icon, Spacer, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Title(props) {
  return ( 
    <Box bg="#ededed">
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Text className="p-3 py-4" color='black' fontWeight={'bold'}>
            <Icon as={DragHandleIcon} color='gray' className="mr-2" />
              {props.text}            
            </Text>
            <Spacer />
            <Text>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                    <Text>
                    <Icon as={LockIcon} color='gray' className='mr-3'/>
                    <Icon as={PlusSquareIcon} color='gray' className='mr-3'/>
                    <FontAwesomeIcon icon={faEllipsisVertical} className='mr-3' color='gray' />
                    
                    </Text>
                </Flex>
            </Text>
        </Flex>
    </Box>
  )
}
export default Title