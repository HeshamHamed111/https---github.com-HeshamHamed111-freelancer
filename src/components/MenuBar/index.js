import { CalendarIcon, DragHandleIcon, MdReceipt } from '@chakra-ui/icons'
import { Box, Flex, Img, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import { faBedPulse, faBookOpen, faBox, faCalendarDays, faCalendarMinus, faChartLine, faGaugeHigh, faMemory } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ss from '../../images/SS.png'
function MenuBar() { 
  return (
    <Box className="menu pt-10" with="100%" textAlign="center">
    <Box className="mb-10">
    <Img src={ss} alt="Logo" w="30px" maxW="30px" display="inline"/>
    <h2 className="inline font-bold">SKOOLYV</h2>
    </Box>

<List spacing={7}>
  <ListItem pl="110px" color="blue">
  <Flex>
  <Text>
  <FontAwesomeIcon icon={faGaugeHigh} className="pr-4"/>
  </Text>
  <Text>  Dashboard </Text>
  </Flex>
  </ListItem>
  
  <ListItem pl="110px" color="gray">
    <Flex> 
    <Text> 
        <FontAwesomeIcon icon={faBox}  className="pr-4"/>
    </Text>
    <Text>
    Grades
    </Text>
    </Flex>
  </ListItem>
  <ListItem pl="110px" color="gray">
  <Flex>
    <Text>
    <FontAwesomeIcon icon={faCalendarMinus} className="pr-4"/>
    </Text>
    <Text>
    Schedule
    </Text>
  </Flex>
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem pl="110px" color="gray">
  <Flex>
    <Text>
    <FontAwesomeIcon icon={faCalendarDays} className="pr-4"/>
    </Text>
    <Text>
    Calendar
    </Text>
  </Flex>
  </ListItem>

  <ListItem pl="110px" color="gray">
  <Flex>
    <Text>
    <FontAwesomeIcon icon={faBookOpen} className="pr-4"/>
    </Text>
    <Text>
    Digital Library
    </Text>
  </Flex>
</ListItem>

<ListItem pl="110px" color="gray">
<Flex>
    <Text>
    <FontAwesomeIcon icon={faBedPulse} className="pr-4"/>
    </Text>
    <Text>
        VCR
    </Text>
    </Flex>
</ListItem>

<ListItem pl="110px" color="gray">
<Flex>
    <Text>
    <FontAwesomeIcon icon={faMemory}  className="pr-4"/>
    </Text>
    <Text>
    Exams
    
    </Text>
</Flex>
</ListItem>

<ListItem pl="110px" color="gray">
<Flex >
    <Text>
    <FontAwesomeIcon icon={faChartLine} className='pr-4'/>
    </Text>
    <Text>
    Analytics
    </Text>
</Flex>
</ListItem>
</List>
    </Box>
  )
}

export default MenuBar