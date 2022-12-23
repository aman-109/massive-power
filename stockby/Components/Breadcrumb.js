
import { ChevronRightIcon } from '@chakra-ui/icons'
import {  Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink, } from '@chakra-ui/react'
import React from 'react'

const Breadcrumbcomp = () => {
  return (
    <>
      <Box>
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
  
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Market</BreadcrumbLink>
              </BreadcrumbItem>
  
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Stock</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
    </>
  )
}

export default Breadcrumbcomp