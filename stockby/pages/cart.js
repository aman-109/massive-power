import NavLink from "../Components/Utils/navlink"
import { Box, Divider, Flex, Spacer, Stack } from '@chakra-ui/react'
import {
  FaRegBell,
  FaRegChartBar,
  FaRegHeart,
  FaRegPaperPlane,
  FaRegQuestionCircle,
  FaUser,
} from 'react-icons/fa'
import { getCookie, getCookies } from 'cookies-next';

const cart = () => {
  let Token=(getCookie("token"));
  var jwt = require("jsonwebtoken");
  var decode = jwt.decode(Token)
  return (
    <>
     <Flex
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
          <NavLink label="People" icon={FaUser} isActive ></NavLink>
          <NavLink label="Favorites" icon={FaRegHeart} />
          <NavLink label="Workflow" icon={FaRegPaperPlane} />
          <NavLink label="Statistics" icon={FaRegChartBar} />
        </Stack>
        <Divider />
        <Stack>
          <NavLink label="Notifications" icon={FaRegBell} />
          <NavLink label="Help Center" icon={FaRegQuestionCircle} />
        </Stack>
      </Stack>
      <Spacer />
      
    </Flex>
     
    </>
  )
}

export default cart