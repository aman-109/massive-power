import {
  Box,
  Button,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  FormLabel,
  Textarea,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
//import io from "socket.io-client";
import { AddIcon, UpDownIcon, MinusIcon } from "@chakra-ui/icons";
import { React, useRef } from "react";

// function useSocket() {
//   const [socket, setSocket] = useState(null);
//   useEffect(() => {
//     fetch('/api/socket').finally(() => {
//       const socketio = io();
//       socketio.on('connect', () => {
//         console.log('hii');
//         socketio.emit('hello');
//         socketio.emit('aman',"mate");
//       });
//       // socketio.on('disconnect', () => {
//       //   console.log('disconnect');
//       // });
//       setSocket(socketio);
//     });
//     // function cleanup() {
//     //   socket.disconnect();
//     // }
//     // return cleanup;
//   }, []);
//   return socket;
// }

export default function Watchlist() {
  //const socket = useSocket();
  const [change , setChange] = useState(0);
  const [changes , setChanges] = useState(0);
  const [value, setValue] = useState(0);
  const [Bank, setBank] = useState(0);
  const [get, setGet] = useState([]);
  const [Message, setMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  // useEffect(() => {
  //   if (socket) {
  //     socket.on('data',(d)=>{
  //       //console.log(d);
  //       setData(d)
  //     })
  //     socket.on('hello', data => {
  //       // console.log('hello', data);
  //       setMessage(data);
  //     });
  //     socket.on('a user connected', () => {
  //       console.log('a user connected');
  //     });
  //   }
  // }, [socket]);
  // const getData = async () => {
  //   let res = await axios(
  //     "https://financialmodelingprep.com/api/v3/stock/list?apikey=3139067cf0700794db80a5ca039116d6"
  //   );
  //   setGet(res.data);
  //   //return res.data;
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  const Incount = () => {
    setValue(Math.random() * (17910 - 17580 + 1) + 17580);
    setChange(Math.random() * (2 - 1.2 + 1) + 1.2)
  };

  useEffect(() => {
    setInterval(() => {
      Incount();
    }, 2000);
  }, []);

  const Oncount = () => {
    setBank(Math.random() * (41810 - 40710 + 1) + 40710);
    setChanges(Math.random() * (5 - 2.2 + 1) + 1.2)
  };

  useEffect(() => {
    setInterval(() => {
      Oncount();
    }, 2500);
  }, []);

  return (
    <>
      <Box bg="#23242A" p={5}>
        <Accordion
          defaultIndex={[1]}
          allowMultiple
          border="none"
          m="auto"
          w="96%"
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" color="white">
                  {/* Overview */}
                </Box>
                <AccordionIcon color="white" fontSize={50} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="white">
              <Text fontSize={35} color="white" fontWeight="bold">
                Overview
              </Text>
              <Flex display="flex" flexDirection="row" gap="100px" ml={20} mt={5}>
                <Box fontSize={30}>
                  <Text> StockBy 50</Text>
                  <Text color="red">{value.toFixed(2)}  ({-change.toFixed(2)}%)</Text>
                </Box>
                <Box>
                  <Image w="14vw" borderRadius="10px" src="https://media.istockphoto.com/id/1309866775/vector/stock-market-graph-background-concept-of-business-investment-stock-future-trading.jpg?s=612x612&w=0&k=20&c=FfY-xJPsLUeEXVxnWiIsBkIHYeElig25rPAzwRdtle4="/>
                </Box>
                <Box fontSize={30}>
                  <Text> StockBy Bank</Text>
                  <Text color="green">{Bank.toFixed(2)} (+{changes.toFixed(2)}%)</Text>
                </Box>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Text ml={8} fontSize={35} color="white" fontWeight="bold">
          {/* Watchlists */} Marketwatch
        </Text>

        <Box
          align="left"
          mt={6}
          ml={5}
          w={{ base: "98%", sm: "98%", md: "80%", lg: "55%" }}
        >
          <SimpleGrid columns={[2, 3, 4, 5]} spacing="20px">
            <Button colorScheme="teal" variant="outline" borderRadius={50}>
              Watchlist 1
            </Button>
            <Button colorScheme="teal" variant="outline" borderRadius={50}>
              Watchlist 2
            </Button>
            <Button colorScheme="teal" variant="outline" borderRadius={50}>
              Watchlist 3
            </Button>
            <Button colorScheme="teal" variant="outline" borderRadius={50}>
              Watchlist 4
            </Button>
            <Button
              colorScheme="teal"
              variant="outline"
              borderRadius={50}
              gap="3px"
              px="50px"
              w="200px"
            >
              <AddIcon />
              Create New Watchlist
            </Button>
          </SimpleGrid>
        </Box>

        <TableContainer w="90vw" margin="auto" mt={10} color="white">
          <Table variant="simple">
            <TableCaption color="white">
              Stock Market Detail Analysis Chart
            </TableCaption>
            <Thead>
              <Tr>
                <Th color="white">
                  Symbol <UpDownIcon />{" "}
                </Th>
                <Th color="white">
                  Stock Name <UpDownIcon />
                </Th>
                <Th color="white">
                  % change <UpDownIcon />
                </Th>
                <Th color="white">
                  market cap <UpDownIcon />
                </Th>
                <Th color="white">
                  Price <UpDownIcon />
                </Th>
                <Th color="white">
                  52 weeks Range <UpDownIcon />
                </Th>
                <Th isNumeric color="white">
                  Stock Details <UpDownIcon />
                </Th>
              </Tr>
            </Thead>
            {/* {get?.map((el) => ( */}

            <Tbody>
              <Tr>
                <Td color="#496AA0">el.symbol</Td>
                <Td color="#496AA0">el.name</Td>
                <Td>2.5</Td>
                <Td>25M</Td>
                <Td>el.price</Td>
                <Td>
                  <RangeSlider
                    defaultValue={[0, 140]}
                    min={0}
                    max={200}
                    step={20}
                    w="80%"
                  >
                    <RangeSliderTrack bg="red.100">
                      <RangeSliderFilledTrack bg="green" />
                    </RangeSliderTrack>

                    <RangeSliderThumb boxSize={6} index={1} bg="#FF0000" />
                  </RangeSlider>
                  <Flex display="flex" flexDirection="row" gap={50}>
                    <Text color="green">100</Text>
                    <Text color="green"> 110.5</Text>
                  </Flex>
                </Td>
                <Td isNumeric color="white">
                  {/* <Button
                      colorScheme="teal"
                      variant="outline"
                      _hover={{ backgroundColor: "grey", color: "white" }}
                       //onClick={onOpen}
                    >
                      Stock Detail
                    </Button> */}
                  <Button
                    leftIcon={<AddIcon />}
                    colorScheme="teal"
                    onClick={onOpen}
                  >
                    Stock Detail
                  </Button>
                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    bg="#23242A"
                    initialFocusRef={firstField}
                    onClose={onClose}
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton bg="#23242A" color="white" />
                      <DrawerHeader
                        borderBottomWidth="1px"
                        bg="#23242A"
                        color="white"
                      >
                        TATASTEEL STOCK
                      </DrawerHeader>

                      <DrawerBody bg="#23242A" color="white">
                        <Stack spacing="24px">
                          <Box>
                            <FormLabel htmlFor="username">
                              110.5 (+0.50)
                            </FormLabel>
                          </Box>
                          <Box>
                            <Image src="https://s3.ap-south-1.amazonaws.com/staticassets.zerodha.net/support-portal/2022/03/14/Article/60O0GK20_heiken_to_candles.gif" />
                          </Box>
                          <Box>
                            <Flex display="flex" flexDirection="row" gap={8}>
                              <Flex
                                display="flex"
                                flexDirection="column"
                                gap={1}
                              >
                                <Text>Open</Text>
                                <Text>105</Text>
                              </Flex>
                              <Flex
                                display="flex"
                                flexDirection="column"
                                gap={1}
                              >
                                <Text>High</Text>
                                <Text>105</Text>
                              </Flex>
                              <Flex
                                display="flex"
                                flexDirection="column"
                                gap={1}
                              >
                                <Text>Low</Text>
                                <Text>105</Text>
                              </Flex>
                              <Flex
                                display="flex"
                                flexDirection="column"
                                gap={1}
                              >
                                <Text>Prev.close</Text>
                                <Text>105</Text>
                              </Flex>
                            </Flex>
                          </Box>
                          <Box>
                            <Flex display="flex" flexDirection="row" gap={8}>
                              <Flex
                                display="flex"
                                flexDirection="column"
                                gap={2}
                              >
                                <Text>Volume</Text>
                                <Text>Avg. trade price</Text>
                                <Text>Last traded quantity</Text>
                                <Text>Lower circuit</Text>
                                <Text>Upper circuit</Text>
                              </Flex>
                              <Flex
                                display="flex"
                                flexDirection="column"
                                gap={2}
                                textAlign="right"
                              >
                                <Text>3,15,51,392</Text>
                                <Text>107.83</Text>
                                <Text>200</Text>
                                <Text>98.50</Text>
                                <Text>120.30</Text>
                              </Flex>
                            </Flex>
                          </Box>
                        </Stack>
                      </DrawerBody>

                      <DrawerFooter
                        borderTopWidth="1px"
                        bg="#23242A"
                        color="white"
                      >
                        <Button
                          variant="outline"
                          mr={3}
                          onClick={onClose}
                          bg="#319795"
                        >
                          Cancel
                        </Button>
                        <Button bg="#319795">View</Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </Td>
              </Tr>
            </Tbody>
            {/* ))} */}
            <Tfoot>
              <Tr>
                <Th color="white">Symbol</Th>
                <Th color="white">Stock Name</Th>
                <Th color="white">% change</Th>
                <Th color="white">market cap</Th>
                <Th color="white">price</Th>
                <Th color="white">52 weeks Range</Th>
                <Th isNumeric color="white">
                  Stock Details
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <Text fontSize={30} color="white" mt={10} textAlign="center">
          Frequently Asked Questions
        </Text>
        <Accordion
          defaultIndex={[1]}
          allowMultiple
          border="none"
          w="85vw"
          m="auto"
        >
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="white"
                      fontSize={20}
                    >
                      What is a brokerage calculator?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="20px" color="white" />
                    ) : (
                      <AddIcon fontSize="20px" color="white" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="black" bg="white">
                  A brokerage calculator is an online tool aimed to help the
                  traders/clients know the exact charges that they might incur
                  when conducting a trade.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="white"
                      fontSize={20}
                    >
                      How is brokerage calculated?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="20px" color="white" />
                    ) : (
                      <AddIcon fontSize="20px" color="white" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="black" bg="white">
                  You will be charged brokerage of ₹20 per order or 2.5%
                  (whichever is lower) for buying stocks and selling them after
                  a few days, weeks, or months. This is called an equity
                  delivery order. These charges will be applicable to all
                  customers onboarded on or after 21 September 2021. For
                  equity/commodity/currency futures and options brokerage, you
                  can refer to our brokerage charges list Chargeslist
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="white"
                      fontSize={20}
                    >
                      What are STT charges?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="20px" color="white" />
                    ) : (
                      <AddIcon fontSize="20px" color="white" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="black" bg="white">
                  For equity delivery, STT is 0.1% on both buying & selling of
                  shares. For equity intraday, STT is 0.1% on both buying &
                  selling.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="white"
                      fontSize={20}
                    >
                      How to calculate broker commission?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="20px" color="white" />
                    ) : (
                      <AddIcon fontSize="20px" color="white" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="black" bg="white">
                  You will be charged brokerage of ₹20 per order or 2.5%
                  (whichever is lower) for buying stocks and selling them after
                  a few days, weeks, or months. This is called an equity
                  delivery order. These charges will be applicable to all
                  customers onboarded on or after 21 September 2021. For
                  equity/commodity/currency futures and options brokerage, you
                  can refer to our brokerage charges list
                  https://upstox.com/chargeslist/ For buying and selling stocks
                  on the same day, known as equity intraday order, you will be
                  charged brokerage of ₹20 per order or 0.05% (whichever is
                  lower) for both buy and sell orders. For
                  equity/commodity/currency futures and options brokerage, you
                  can refer to our brokerage charges list
                  https://upstox.com/chargeslist/ In addition to equity delivery
                  & equity intraday, brokerage for equity futures is ₹20 per
                  executed order or 0.05% (whichever is lower) and brokerage for
                  equity options is flat ₹20 per executed order. We do not
                  charge any commission/brokerage on Mutual Funds and IPO’s.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="white"
                      fontSize={20}
                    >
                      How to calculate delivery charges?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="20px" color="white" />
                    ) : (
                      <AddIcon fontSize="20px" color="white" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="black" bg="white">
                  You will be charged brokerage of ₹20 per order or 2.5%
                  (whichever is lower) for buying stocks and selling them after
                  a few days, weeks, or months. This is called an equity
                  delivery order. These charges will be applicable to all
                  customers onboarded on or after 21 September 2021. For
                  equity/commodity/currency futures and options brokerage, you
                  can refer to our brokerage charges list –
                  https://upstox.com/chargeslist/
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="white"
                      fontSize={20}
                    >
                      What are state stamp duty charges?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="20px" color="white" />
                    ) : (
                      <AddIcon fontSize="20px" color="white" />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="black" bg="white">
                  For equity delivery, stamp duty charges are 0.015% or ₹1500 /
                  crore on the buy side. For equity intraday, stamp duty charges
                  are 0.003% or ₹300 / crore on the buy side. For equity
                  futures, stamp duty charges are 0.002% or ₹200 /crore on the
                  buy side and for equity options stamp duty charges are 0.003%
                  or ₹300 / crore on the buy side. You can also check the stamp
                  charges here –
                  https://upstox.com/calculator/brokerage-calculator/
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
}
// function ManualClose() {
//   const { isOpen, onOpen, onClose } = useDisclosure()

//   return (
//     <>
//       <Button onClick={onOpen}>Open Modal</Button>

//       <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Create your account</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}>
//             <Lorem count={2} />
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3}>
//               Save
//             </Button>
//             <Button onClick={onClose}>Cancel</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
