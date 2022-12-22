


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
// import ChartLine from './Chart'
import axios from 'axios'
import StockChart from './Chart';
const UserData = [
    {
      id: 1,
      userGain: 8728,
      userLoss: 1850,
      year: 1992,
    },
    {
      id: 2,
      userGain: 4665,
      userLoss: 5750,
      year: 1995,
    },
    {
      id: 3,
      userGain: 1668,
      userLoss: 5980,
      year: 2002,
    },
    {
      id: 4,
      userGain: 3375,
      userLoss: 4462,
      year: 2008,
    },
    {
      id: 5,
      userGain: 6038,
      userLoss: 3824,
      year: 2009,
    },
    {
      id: 6,
      userGain: 2993,
      userLoss: 6933,
      year: 1997,
    },
    {
      id: 7,
      userGain: 2633,
      userLoss: 3298,
      year: 1994,
    }
]
const labels = UserData.map((ele)=>ele.year);
const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};


const TabComponent = () => {
  const [data,setData]=useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
    // const [resData,setData]=useState({
    //     labels: labels,
    //     datasets: [{
    //       label: 'My First Dataset',
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       fill: false,
    //       borderColor: 'rgb(75, 192, 192)',
    //       tension: 0.1
    //     }]
    //   })
    const getData=async()=>{
      return await axios("https://financialmodelingprep.com/api/v3/historical-chart/30min/AAPL?apikey=7159bd2ccd38c07c5868c101f5b3160a")

    }

      useEffect(()=>{
        getData().then(res=>setData(res.data))
      },[])

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
     {/* <StockChart data={data}/> */}
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
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>
  )
}

export default TabComponent