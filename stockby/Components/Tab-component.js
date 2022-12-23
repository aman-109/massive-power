


import { Tabs, TabList, TabPanels, Tab, TabPanel, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input, } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react';

import axios from 'axios'
import StockChart from './Chart';
import HistoricalData from './HistoricalData';


const TabComponent = ({StockData}) => {
  const [data,setData]=useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
    const getData=async()=>{
      return await axios(`https://financialmodelingprep.com/api/v3/historical-price-full/${StockData}?from=2018-03-12&to=2022-03-1&apikey=d19b0221790b4f7e16f9c579b5a01c7c`)

    }

    useEffect(() => {
      getData().then((res) => {
        console.log(res)
        let x = res.data.historical.map((el) => {
          let myDate = el.date.split("-");
          let newDate = new Date(myDate[0], myDate[1] - 1, myDate[2]);
          return [newDate.getTime(), el.close];
        });
        setData(x)
      })
    }, []);

  return (
    <>
    <Tabs>
  <TabList>
    <Tab>Chart</Tab>
    <Tab>Markets</Tab>
    <Tab>Historical Data</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
     <StockChart data={data}/>
    </TabPanel>
    <TabPanel>
    <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </TabPanel>
    <TabPanel>
          <HistoricalData map={StockData}/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>
  )
}

export default TabComponent