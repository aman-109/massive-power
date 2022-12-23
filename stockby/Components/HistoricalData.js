import { Box,   Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useMedia } from "../MediaQuery/UseMedia"


const HistoricalData = ({map}) => {
  const [data,setData]=useState([])
    const { smallScreen,mediumScreen,largeScreen }=useMedia()
    // console.log(map)

    useEffect(()=>{
      axios(`https://financialmodelingprep.com/api/v3/historical-chart/5min/${map}?apikey=d19b0221790b4f7e16f9c579b5a01c7c`)
      .then(res=>setData(res.data))
    },[])
    // console.log(data.slice(0,20))
  return (
    <Box >
         <Box p={4} display={"flex"} alignItems="center" justifyContent="space-between">
                      <Text fontSize={!smallScreen ? "md" : "xl"}>Historical Data</Text>
         </Box>

         {/* Table History */}
         <Box >
         <TableContainer>
  <Table variant='striped' colorScheme='teal' color="red.300">
    <Thead>
      <Tr>
        <Th color="white"> Date</Th>
        <Th color="white" >Volume</Th>
        <Th color="white" >Open</Th>
        <Th color="white" >Close</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        data?.map((ele)=>(

      <Tr key={ele.date}>
        <Td>{ele.date}</Td>
        <Td>{ele.volume}</Td>
        <Td >${ele.open}</Td>
        <Td >${ele.close}</Td>
      </Tr>
        ))
      }
     
    </Tbody>
  </Table>
</TableContainer>
         </Box>
    </Box>
  )
}

export default HistoricalData