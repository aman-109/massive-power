import NavLink from "../Components/Utils/navlink"
import { Box, Divider, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
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


const cart = () => {
  let Token=(getCookie("token"));
  var jwt = require("jsonwebtoken");
  var decode = jwt.decode(Token)
  console.log(decode)
  
  return (
    <>
    <Navbar/>
     <Flex
      bgColor={"blue.300"}
      height="100vh"
      width={{
        base: 'full',
        sm: 'xs',
      }}
      direction="column"
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
      <Spacer />
      <Flex>
      <Text></Text>
      </Flex>
    </Flex>
    <Box>
      
    </Box>
     
    </>
  )
}

export default cart