import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
// import Navbar from "../Components/nav";
import Footer from "../Components/footer";
import MyCarousal from "../Components/caraosal";
import GridBlurredBackdrop from"../Components/testimonial";

const DisplayData = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTableData = async () => {
    setLoading(true);
    await axios
      .get(
        "https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=fa7f182d5bf84c4653a1b53f2f6a8a25"
      )
      .then((res) => {
        setTable(res.data);
        setLoading(false);
      });
  };

  const handleNewsData = async () => {
    setLoading(true);
    await axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2022-11-23&sortBy=publishedAt&apiKey=9066ba643db0428fa5f1062abcb897f0"
      )
      .then((res) => {
        console.log(res.data.articles);
        setData(res.data.articles);
        setLoading(false);
      });
  };
  // console.log(data);
  useEffect(() => {
    handleTableData();
    handleNewsData();
  }, []);
  return (
    <>
      <Box
        width={{ base: "", lg: "90%", lg: "100%" }}
        bgImage={
          "https://m.foolcdn.com/media/dubs/images/Intro_slide_-_digital_stock_chart_going_up_-_s.width-880.jpg"
        }
        height={"400px"}
      >
        {/* <Navbar /> */}
      </Box>
      <Box bgColor={"lightgreen"}>
        <TableContainer
          shadow="lg"
          width={{ base: "95%", lg: "90%" }}
          m="auto"
          overflowY="auto"
          maxHeight="300px"
        >
          <Box bgColor={"lightcyan"} opacity={"85%"}>
            <Table variant="simple">
              <Thead position="sticky" top={0} bg="black">
                <Tr>
                  <Th color={"white"}>Symbol</Th>
                  <Th color={"white"}>NAME</Th>
                  <Th isNumeric color={"white"}>
                    PRICE
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {table.length > 0 &&
                  table.map((elem) => {
                    return (
                      <Tr>
                        <Td>
                          <Text>{elem.symbol}</Text>
                        </Td>
                        <Td>
                          {" "}
                          <Text color={"blue"}>{elem.reportedCurrency}</Text>
                        </Td>
                        <Td isNumeric color={"red"}>
                          {" "}
                          <Text>{elem.netIncome}</Text>
                        </Td>
                      </Tr>
                    );
                  })}
              </Tbody>
            </Table>
          </Box>
        </TableContainer>
      </Box>
      <Box bgColor={"lightsalmon"}>
        <Box mt={{ base: "40px", md: "35px", lg: "50px" }}>
          <Heading textAlign={"center"} color="black">
            Top News
          </Heading>
          <MyCarousal data={data} />
        </Box>
      </Box>
      <GridBlurredBackdrop />
      <br />

      <Footer />
    </>
  );
};
export default DisplayData;
