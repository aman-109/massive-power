import NavLink from "../Components/Utils/navlink"
import { Box, Divider, Flex, Heading, Image, Spacer, Stack, Text } from '@chakra-ui/react'
import {
  FaRegBell,
  FaRegChartBar,
  FaRegHeart,
  FaRegPaperPlane,
  FaRegQuestionCircle,
  FaUser,
} from 'react-icons/fa'
import { getCookie, getCookies } from 'cookies-next';
import Navbar from "../Components/nav";
import { useEffect, useState } from "react";
import axios from "axios"


const cart = () => {
  const[port,setPort]=useState([])
  const[loading,setLoading]=useState(false);
  
  let Token=(getCookie("token"));
  var jwt = require("jsonwebtoken");
  var decode = jwt.decode(Token)
  // console.log(decode)
  const handlePortfolio=async()=>{
    await axios.get("/api/user-portfolio").then((res)=>{
      
      console.log(res)
      setPort(res.data.data.purchased_stock)
      
    })

  }
  useEffect(()=>{
    handlePortfolio()
  },[])
  console.log(port,"PORT")
  
  return (
    <>
    
    <Navbar/>
    <Flex margin={"auto"} >
     <Flex
      bgColor={"blue.300"}
      height="100vh"
      width={{
        base: 'full',
        sm: 'xs',
      }}
      direction="row"
      borderRightWidth="1px"
      px={6}
      py={8}
    >
      <Box mb={8}>
      </Box>
      <Stack spacing={6}>
        <Stack>
         {decode?<Heading>{decode.name}</Heading>:<NavLink label="People" icon={FaUser} isActive ></NavLink>}
          {decode? <Text>{decode.email}</Text>:<NavLink label="Favorites" icon={FaRegHeart} />}
          {decode?<Text fontSize='3xl'>{decode.username}</Text>:<NavLink label="Workflow" icon={FaRegPaperPlane} />}
          <NavLink label="Statistics" icon={FaRegChartBar} />
        </Stack>
        <Divider />
        <Stack>
          <NavLink label="Notifications" icon={FaRegBell} />
          <NavLink label="Help Center" icon={FaRegQuestionCircle} />
        </Stack>
      </Stack>
      </Flex>
      
      <Flex width={"70%"} bgColor={"lightseagreen"} marginLeft={"20px"} >
        <Stack>
      <Heading textAlign={"center"} marginLeft={"350px"}>User Portfolio</Heading>

      <Box>
      {port.length>0 && port.map((el)=>(
        <Box  key={el._id}width={"40%"} margin={"auto"} marginTop={"15px"} justifyContent={"center"} paddingLeft={"20px"} alignItems={"center"} boxShadow={"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"} bgColor={"lightcyan"}>
          <Image src={el.stock_id.image}/>
          <Text>Name:{el.stock_id.name}</Text>
          <Text>Price:{el.stock_id.price}</Text>
          <Text>Symbol:{el.stock_id.symbol}</Text>
          <Text>Quantity:{el.stock_id.quantity}</Text>
          <Text>Total Price:{el.stock_id.total_price}</Text>
        </Box>
      ))}
      </Box>
      </Stack>
      </Flex>
    
    </Flex>
    <Box>
      
    </Box>
     
    </>
  )
}

export default cart
// image
// : 
// "kdkdkdkdkdk"
// name
// : 
// "apple1"
// price
// : 
// 100
// quantity
// : 
// 5
// symbol
// : 
// "AAPL1"
// total_price
// : 
// 500