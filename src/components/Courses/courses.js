import { ViewIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons'
import { Box, Flex, Icon, Img, Progress, Spacer, Text } from '@chakra-ui/react'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
  
function Courses(props) {
   
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' className='pl-4 pr-2 mb-12'>
        <Box gap="2">
            <Img src={props.src} alt={props.alt} w="12px" h="14px" />
        </Box>
        <Box gap="7" w="250px">
            <Text fontSize="11px" fontWeight="bold">
                {props.couserName}
            </Text>
        </Box>
   
        <Box gap="6" w="550px">
            <Text color="#CCC" fontSize="10px">
                {props.upload}
            </Text>
            <Text color="#000" fontSize="11px" >{props.date}</Text>
        </Box>
        <Box gap="2">
        {props.upload && 
        <Box>
            <Text>
            <Progress value={props.valueProgress} h="5px" w="120px" borderRadius="15px"/>
            </Text>
            <Text className="mt-2">
            <Flex>
            <Icon as={ViewIcon} color="#888" className="mr-1" fontSize="13px"/>
            <Text fontSize="10px">{props.valueProgress || props.valueProgress !== 0 ?  `Views: ${props.views} / ${props.viewsAll}` : 'Un Published Yet'}</Text>
            </Flex>
            </Text>
        </Box>    
        }
        </Box>
        <Spacer />
        <Box gap="2" className="mb-2">
          <Text>
          {props.views ?
            <Icon as={UnlockIcon} color="green" className="mr-3 mb-1" fontSize="15px"/> :
            <Icon as={LockIcon} color="gray" className="mr-3 mb-1" fontSize="15px"/>
        }
          <FontAwesomeIcon icon={faEllipsisVertical} className='mr-3' color='gray' />
          </Text>  
        </Box>
    </Flex>
  )
}

export default Courses