import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Container,
    Heading,
    Progress,
    Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Input,
  DrawerCloseButton,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useEffect, useRef, useState } from "react";
  import { BsStarFill, BsStar, BsChevronDown } from "react-icons/bs";
  import { IoMdNotificationsOutline } from "react-icons/io";
  import { useMedia } from "../../MediaQuery/UseMedia";
  import TabComponent from "../../Components/Tab-component";
  import {useRouter} from "next/router"
import Breadcrumbcomp from "../../Components/Breadcrumb";
import axios from "axios";
import Navbar from "../../Components/nav";




  const SinglePage = ({data}) => {
    const [liked, setLiked] = useState(false);
    const [buyqty,setBuyQty]=useState(0)
    // const [stock,setStock]=useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const router=useRouter()
    
    const { smallScreen, mediumScreen, largeScreen } = useMedia();

    const handleBuying=async(el,total)=>{
      let {companyName,symbol,image,price}=el
      let buyObj={quantity:buyqty,name:companyName,image:image,symbol:symbol,price:price,total_price:total}
      try{
        let res=await axios.post("/api/buy-stock",buyObj)
        if(res.data.status){
          router.push("/portfolio")
        }
        
      }
      catch(e){
        console.log(e)
      }
      // console.log(buyObj)
    }
    // console.log(data)

    return (
      <>
      <Navbar/>
    
            <Box bg="#23242A" color="white">
        <Container
          // mt={50}
          maxW={{ base: "container.sm", md: "container.md", lg: "container.xl" }}
          // border="1px solid"
        >
          {/* Breadcrumb */}
  
        <Breadcrumbcomp/>
  
        {
          data?.map((ele)=>(

            <Box key={ele.isin}>
              {/* Stock Details */}
              <Box
                display="grid"
                gap={10}
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  md: "repeat(1,1fr)",
                  lg: "800px 400px",
                }}
              >
                {/* Stock price details */}
                <Box >
                  <Box p={"10px 0px"}>
                    <Heading as="h2" size={{ base: "md", md: "md", lg: "md" }}>
                      {ele.symbol} {ele.companyName} 
                    </Heading>
                  </Box>
                  <Box p={"10px 0px"}>
                    <Heading as="h2" size={{ base: "lg", md: "xl", lg: "xl" }}>
                      $ {ele.price}
                    </Heading>
                  </Box>
                  <Box
                    // border="1px solid teal"
                    width="fit-content"
                    display="flex"
                    gap="10px"
                    p={"10px 10px"}
                  >
                    <Button
                      size="sm"
                      _hover="none"
                      border="1px solid gray"
                      bg="none"
                      width="fit-content"
                      onClick={() => setLiked(!liked)}
                    >
                      {liked ? (
                        <BsStarFill
                          fill="orange"
                          fontSize={{ base: "16px", md: "20px", lg: "24px" }}
                        />
                      ) : (
                        <BsStar
                          fontSize={{ base: "16px", md: "20px", lg: "24px" }}
                        />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      _hover="none"
                      border="1px solid gray"
                      bg="none"
                      width="fit-content"
                    >
                      <IoMdNotificationsOutline
                        fontSize={{ base: "16px", md: "20px", lg: "24px" }}
                      />
                    </Button>
                  </Box>
    
                  {/* Progress Bar */}
                  <Box
                    p={"10px 0px"}
                    width={!smallScreen ? "100%" : "50%"}
                    textAlign="center"
                  >
                    <Progress max={Number(ele.range.split("-").slice(-1))} colorScheme="blue" size="sm" value={ele.price} />
                    <Box display={"flex"} justifyContent="space-between">
                    <Text fontSize={!smallScreen ? "xs" : "sm"}>{ele.range.split("-",1)}</Text>
                    <Text fontSize={!smallScreen ? "xs" : "sm"}>24hr range</Text>
                    <Text fontSize={!smallScreen ? "xs" : "sm"}>{ele.range.split("-").slice(-1)}</Text>

                    </Box>
                  </Box>
                  <Box
                    display="grid"
                    gap={5}
                    gridTemplateColumns={{
                      base: "repeat(2,1fr)",
                      md: "repeat(2,1fr)",
                      lg: "repeat(2,1fr)",
                    }}
                  >
                    <Box >
                      <Box
                        p={2}
                        borderBottom={"1px solid #e5e7eb"}
                        display="flex"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text fontSize={!smallScreen ? "xs" : "md"}>
                          Market Cap
                        </Text>
                        <Text fontSize={!smallScreen ? "xs" : "md"}>{new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',}).format(ele.mktCap)}</Text>
                      </Box>
                      <Box
                        p={2}
                        borderBottom={"1px solid #e5e7eb"}
                        display="flex"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text fontSize={!smallScreen ? "xs" : "md"}>
                          Trading Volume
                        </Text>
                        <Text fontSize={!smallScreen ? "xs" : "md"}>{new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',}).format(ele.volAvg)}</Text>
                      </Box>
                      <Box
                        p={2}
                        borderBottom={"1px solid #e5e7eb"}
                        display="flex"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text fontSize={!smallScreen ? "xs" : "md"}>
                          Total Supply
                        </Text>
                        <Text fontSize={!smallScreen ? "xs" : "md"}>$3,55,22,34,567</Text>
                      </Box>
                    </Box>
                    <Box >
                      <Box
                        p={2}
                        borderBottom={"1px solid #e5e7eb"}
                        display="flex"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text fontSize={!smallScreen ? "xs" : "md"}>
                          Dcf diff.
                        </Text>
                        <Text fontSize={!smallScreen ? "xs" : "md"}>{ele.dcfDiff}</Text>
                      </Box>
                      <Box
                        p={2}
                        borderBottom={"1px solid #e5e7eb"}
                        display="flex"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Text fontSize={!smallScreen ? "xs" : "md"}>
                          cik
                        </Text>
                        <Text fontSize={!smallScreen ? "xs" : "md"}>{ele.cik}</Text>
                      </Box>
                     
                    </Box>
                  </Box>
                </Box>
    
                {/* Stock social details/community/conversion */}
                {!smallScreen ? (<Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="center">
                            See More....
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Box >
                          <Box
                            display="flex"
                            justifyContent={"space-around"}
                            alignItems="center"
                          >
                            <Box >
                              <Button
                               onClick={onOpen}
                               ref={btnRef}
                                rightIcon={<BsChevronDown />}
                                colorScheme={"blue"}
                                size={{ base: "sm", md: "md", lg: "md" }}
                              >
                                Buy
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
            <Input type="number" placeholder='Enter Quantity' value={buyqty} onChange={(e)=>setBuyQty(e.target.value)} />

            <Box p={3}>
            <Text fontSize={!smallScreen ? "sm" : "md"}>Total : {buyqty*ele.price}</Text>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={()=>handleBuying(ele,buyqty*ele.price)} colorScheme='blue'>Buy</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
                            </Box>
                            <Box >
                              <Button
                                rightIcon={<BsChevronDown />}
                                colorScheme={"blue"}
                                size={{ base: "sm", md: "md", lg: "md" }}
                              >
                                Sell{" "}
                              </Button>
                            </Box>
                          </Box>
    
                          <Box p={4} display={"flex"} alignItems="center" justifyContent="space-between">
                      <Text fontSize={!smallScreen ? "md" : "xl"}>Details</Text>
                    </Box>
                    <Box p={4} display={"flex"} alignItems="center" justifyContent="space-between">
                      <Text fontSize={!smallScreen ? "sm" : "md"}>Website</Text>
                      <Button colorScheme={"blue"} size={{ base: "sm", md: "md", lg: "md" }}>
                       {ele.website&&ele.website}
                      </Button>
                    </Box>
                    <Box p={4} display={"flex"} alignItems="center" justifyContent="space-between">
                      <Text fontSize={!smallScreen ? "sm" : "md"}>Exchange</Text>
                      <Button colorScheme={"blue"} size={{ base: "sm", md: "md", lg: "md" }}>
                        {ele.exchangeShortName && ele.exchangeShortName}
                      </Button>
                    </Box>
                    <Box p={4} display={"flex"} alignItems="center" justifyContent="space-between">
                      <Text fontSize={!smallScreen ? "sm" : "md"}>community</Text>
                      <Button colorScheme={"blue"} size={{ base: "sm", md: "md", lg: "md" }}>
                        Twitter
                      </Button>
                    </Box>
                        </Box>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>) : (<Box >
                    <Box
                      display="flex"
                      justifyContent={"space-around"}
                      alignItems="center"
                    >
                      <Box >
                        <Button
                        onClick={onOpen}
                        ref={btnRef}
                          rightIcon={<BsChevronDown />}
                          colorScheme={"blue"}
                          size={{ base: "sm", md: "md", lg: "md" }}
                        >
                          Buy{" "}
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
            <Input type="number" placeholder='Enter Quantity' value={buyqty} onChange={(e)=>setBuyQty(e.target.value)} />

            <Box p={3}>
            <Text fontSize={!smallScreen ? "sm" : "md"}>Total : {buyqty*ele.price}</Text>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={()=>handleBuying(ele,buyqty*ele.price)} colorScheme='blue'>Buy</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
                      </Box>
                      <Box >
                        <Button
                        onClick={onOpen}
                        ref={btnRef}
                          rightIcon={<BsChevronDown />}
                          colorScheme={"blue"}
                          size={{ base: "sm", md: "md", lg: "md" }}
                        >
                          Sell{" "}
                        </Button>
                      </Box>
                    </Box>
    
                    <Box p={4} display={"flex"} alignItems="center" justifyContent="space-between">
                      <Text fontSize={!smallScreen ? "md" : "xl"}>Details</Text>
                    </Box>
                    <Box p={4} display={"flex"} alignItems="center" justifyContent="space-between">
                      <Text fontSize={!smallScreen ? "sm" : "md"}>Website</Text>
                      {ele.website && <Button colorScheme={"blue"} size={{ base: "sm", md: "md", lg: "md" }}>
                       {ele.website&&ele.website}
                      </Button>}
                    </Box>
                    <Box p={4} display={"flex"} alignItems="center" justifyContent="space-between">
                      <Text fontSize={!smallScreen ? "sm" : "md"}>Exchange</Text>
                      <Button colorScheme={"blue"} size={{ base: "sm", md: "md", lg: "md" }}>
                        {ele.exchangeShortName && ele.exchangeShortName}
                      </Button>
                    </Box>
                    <Box p={4} display={"flex"} alignItems="center" justifyContent="space-between">
                      <Text fontSize={!smallScreen ? "sm" : "md"}>community</Text>
                      <Button colorScheme={"blue"} size={{ base: "sm", md: "md", lg: "md" }}>
                        Twitter
                      </Button>
                    </Box>
                  </Box>)}
    
    
    
    
              </Box>
    
              {/* Chart details */}
    
                <Box p={2}>
                        <TabComponent StockData={router.query.sym}/>
                </Box>
    
            </Box>
          ))
        }
        </Container>
      </Box>
      </>

    );
  };
  
  export default SinglePage;
  


  export async function getServerSideProps(context) {
    const {sym}=context.query
    // console.log(sym)
    const res = await fetch(`https://financialmodelingprep.com/api/v3/profile/${sym}?apikey=d19b0221790b4f7e16f9c579b5a01c7c`);
    const data = await res.json();
    // console.log(data)
    return {
      props: { data },
    };
  }