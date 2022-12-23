import {Box,Flex,IconButton,useDisclosure,Stack,Text,Image, Tooltip, Button} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import {FaUserCircle} from "react-icons/fa"
import{BsCartCheckFill}from "react-icons/bs"
import { deleteCookie, getCookie, getCookies } from 'cookies-next';
// import{Link}from "@chakra-ui/react"
import Link from "next/link"
import { useState } from 'react';
import{useRouter} from "next/router";
export default function Navbar( ) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router =useRouter()
  let Token=(getCookie("token"));
  var jwt = require("jsonwebtoken");
  var decode = jwt.decode(Token)
  const handleLogout=()=>{
    deleteCookie("token")
    router.push("/login");
  }
  // console.log(decode)
    return (
      <>
        <Box px={4}  className='ChackraNavBar' shadow='lg' padding='10px' bgColor={"lightblue"}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton color='black' size='md' bg='white' icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize='30px'/>} aria-label='Open Menu' display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>
              
            <Flex width={{base : "20%", md :'13%', lg : '10%'}} justifyContent={'center'} >
             <Link href="/"><Image bgColor={"#ADD8E6"} src='https://i.ibb.co/0tR2KrT/Whats-App-Image-2022-12-22-at-2-17-13-PM.jpg'  width='85px' m='auto'/></Link>
            </Flex>

              <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{base : '', md : '90%', lg : '95%'}} justifyContent='space-around' alignItems='center' padding='10px'>
                <Box width={{base :'', md: '40%', lg: '60%'}}></Box>
               <Flex width={{base : "", md  : '60%', lg :'40%'}} justifyContent='space-around' fontSize='16px' alignItems='center'>
               <Tooltip bg='black' color='white' label='Buy'><Link href='/buystocks'><Text>BUY STOCKS</Text></Link></Tooltip>
               <Tooltip bg='black' color='white' label='Stocks'><Link href='/watchlist'><Text>STOCKS</Text></Link></Tooltip>
               {decode?<Button bgColor={"#ADD8E6"} onClick={handleLogout}>Logout</Button>:<Tooltip bg='black' color='white' label='Sign Up'><Link href='/signup'><Text>SIGN UP</Text></Link></Tooltip>}
               <Tooltip bg='black' color='white' label='Cart'><Link href="/cart"><Text fontSize='25px'><BsCartCheckFill/></Text></Link></Tooltip>
              <Tooltip bg='black' color='white' label={decode?decode.name:'Profile'}><Link href="#"><Text fontSize='25px'><FaUserCircle/></Text></Link></Tooltip>
              </Flex>
              </Flex>
          </Flex> 
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }} >
              <Stack as={'nav'} spacing={4}>
                  <Link href="/buystocks"><Text>Buy Stocks</Text></Link>
                  <Link href="/watchlist"><Text>Stocks</Text></Link>
                  <Link href="/signup"><Text>Sign Up</Text></Link>
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }