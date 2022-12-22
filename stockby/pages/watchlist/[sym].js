import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Container,
    Heading,
    Progress,
    Text,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { ChevronRightIcon } from "@chakra-ui/icons";
  import { BsStarFill, BsStar, BsChevronDown } from "react-icons/bs";
  import { IoMdNotificationsOutline } from "react-icons/io";
  import { useMedia } from "../../MediaQuery/UseMedia";
  import TabComponent from "../../Components/Tab-component";
  import {useRouter} from "next/router"
  const SinglePage = () => {
    const [liked, setLiked] = useState(false);
    const router=useRouter()
    // console.log(router.query.sym)
    const { smallScreen, mediumScreen, largeScreen } = useMedia();
    return (
      <Box bg="rgb(248 250 253)">
        <Container
          mt={50}
          maxW={{ base: "container.sm", md: "container.md", lg: "container.xl" }}
          border="1px solid"
        >
          {/* Breadcrumb */}
  
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
  
          <Box>
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
              <Box border={"1px solid red"}>
                <Box p={"10px 0px"}>
                  <Heading as="h2" size={{ base: "md", md: "md", lg: "md" }}>
                    Apple(AAPL)
                  </Heading>
                </Box>
                <Box p={"10px 0px"}>
                  <Heading as="h2" size={{ base: "lg", md: "xl", lg: "xl" }}>
                    $ 132.23
                  </Heading>
                </Box>
                <Box
                  border="1px solid teal"
                  width="fit-content"
                  display="flex"
                  gap="10px"
                  p={"10px 10px"}
                >
                  <Button
                    size="sm"
                    _hover="none"
                    border="1px solid gray"
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
                  <Progress colorScheme="blue" size="sm" value={10} />
                  <Text fontSize={!smallScreen ? "xs" : "sm"}>24hr range</Text>
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
                  <Box border="1px solid blue">
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
                      <Text fontSize={!smallScreen ? "xs" : "md"}>2,34,567</Text>
                    </Box>
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
                      <Text fontSize={!smallScreen ? "xs" : "md"}>2,34,567</Text>
                    </Box>
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
                      <Text fontSize={!smallScreen ? "xs" : "md"}>2,34,567</Text>
                    </Box>
                  </Box>
                  <Box border="1px solid blue">
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
                      <Text fontSize={!smallScreen ? "xs" : "md"}>2,34,567</Text>
                    </Box>
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
                      <Text fontSize={!smallScreen ? "xs" : "md"}>2,34,567</Text>
                    </Box>
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
                      <Text fontSize={!smallScreen ? "xs" : "md"}>2,34,567</Text>
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
                      <Box border={"1px solid red"}>
                        <Box
                          display="flex"
                          justifyContent={"space-around"}
                          alignItems="center"
                        >
                          <Box border={"1px solid"}>
                            <Button
                              rightIcon={<BsChevronDown />}
                              colorScheme={"blue"}
                              size={{ base: "sm", md: "md", lg: "md" }}
                            >
                              Buy{" "}
                            </Button>
                          </Box>
                          <Box border={"1px solid"}>
                            <Button
                              rightIcon={<BsChevronDown />}
                              colorScheme={"blue"}
                              size={{ base: "sm", md: "md", lg: "md" }}
                            >
                              Sell{" "}
                            </Button>
                          </Box>
                        </Box>
  
                        <Box display={"flex"} justifyContent="space-between">
                          <Text fontSize={!smallScreen ? "md" : "xl"}>
                            Details
                          </Text>
                        </Box>
                        <Box display={"flex"} justifyContent="space-between">
                          <Text fontSize={!smallScreen ? "sm" : "md"}>
                            Website
                          </Text>
                          <Button size={{ base: "sm", md: "md", lg: "md" }}>
                            Relevant community
                          </Button>
                        </Box>
                        <Box display={"flex"} justifyContent="space-between">
                          <Text fontSize={!smallScreen ? "sm" : "md"}>
                            Explorers
                          </Text>
                          <Button size={{ base: "sm", md: "md", lg: "md" }}>
                            Etherscan
                          </Button>
                        </Box>
                        <Box display={"flex"} justifyContent="space-between">
                          <Text fontSize={!smallScreen ? "sm" : "md"}>
                            community
                          </Text>
                          <Button size={{ base: "sm", md: "md", lg: "md" }}>
                            Twitter
                          </Button>
                        </Box>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>) : (<Box border={"1px solid red"}>
                  <Box
                    display="flex"
                    justifyContent={"space-around"}
                    alignItems="center"
                  >
                    <Box border={"1px solid"}>
                      <Button
                        rightIcon={<BsChevronDown />}
                        colorScheme={"blue"}
                        size={{ base: "sm", md: "md", lg: "md" }}
                      >
                        Buy{" "}
                      </Button>
                    </Box>
                    <Box border={"1px solid"}>
                      <Button
                        rightIcon={<BsChevronDown />}
                        colorScheme={"blue"}
                        size={{ base: "sm", md: "md", lg: "md" }}
                      >
                        Sell{" "}
                      </Button>
                    </Box>
                  </Box>
  
                  <Box display={"flex"} justifyContent="space-between">
                    <Text fontSize={!smallScreen ? "md" : "xl"}>Details</Text>
                  </Box>
                  <Box display={"flex"} justifyContent="space-between">
                    <Text fontSize={!smallScreen ? "sm" : "md"}>Website</Text>
                    <Button size={{ base: "sm", md: "md", lg: "md" }}>
                      Relevant community
                    </Button>
                  </Box>
                  <Box display={"flex"} justifyContent="space-between">
                    <Text fontSize={!smallScreen ? "sm" : "md"}>Explorers</Text>
                    <Button size={{ base: "sm", md: "md", lg: "md" }}>
                      Etherscan
                    </Button>
                  </Box>
                  <Box display={"flex"} justifyContent="space-between">
                    <Text fontSize={!smallScreen ? "sm" : "md"}>community</Text>
                    <Button size={{ base: "sm", md: "md", lg: "md" }}>
                      Twitter
                    </Button>
                  </Box>
                </Box>)}
  
  
  
  
            </Box>
  
            {/* Chart details */}
  
              <Box p={2} border="1px solid teal">
                      <TabComponent/>
              </Box>
  
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default SinglePage;
  