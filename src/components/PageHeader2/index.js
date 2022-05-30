import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
 

function PageHeader2() {
  return (
    <React.Fragment>
            <Breadcrumb
            mt={10}
            spacing="8px"
            separator={
            <i className="fa fa-chevron-right rightIcon" aria-hidden="true"></i>
            }
        >
            <BreadcrumbItem ms={10}>
            <BreadcrumbLink fontWeight="bold" href="#">
                Dashboard
            </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
            <BreadcrumbLink fontWeight="bold" href="#">
                History discussion rooms
            </BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </React.Fragment>
  )
}

export default PageHeader2