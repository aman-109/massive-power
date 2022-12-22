import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

let userLogin = async (data) => {
  let res = await axios.post("/api/user/login", data);
  return res.data;
};

let init = {
  user_id: "",
  password: "",
};

export default function login() {
  const [state, setState] = useState(init);
  const router = useRouter();

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleClick = async (data) => {
    if (data.user_id == "" || data.password == "") {
      return alert("Please enter all details");
    }

    let res = await userLogin(data);
    if (res.status === false) {
      alert(res.message);
    } else {
      alert("login successfull");
      router.push("/");
    }
    setState(init);
  };

  let { user_id, password } = state;
  return (
    <Box
      w={{ base: "95%", sm: "95%", md: "60%", lg: "35%" }}
      m="auto"
      boxShadow={
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      }
      p={{
        base: "20px 20px",
        sm: "20px 20px",
        md: "50px 50px",
        lg: "50px 50px",
      }}
      mt={"100px"}
      bg="#161616"
      color={"white"}
    >
      <Box textAlign="center" mb={"20px"}>
        <Text
          fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "2xl" }}
          fontWeight="bold"
        >
          Log in to your StockBy account
        </Text>
        <Text fontSize={"md"}>
          Don't have an account?
          <span style={{ color: "#e03030" }}>
            <Link href="/signup"> Sign up.</Link>
          </span>
        </Text>
      </Box>
      <Box>
        <FormControl display={"flex"} flexDirection="column" gap={"25px"}>
          <Box>
            <FormLabel>User Id</FormLabel>
            <Input
              placeholder="Enter User Id"
              type={"user_id"}
              name="user_id"
              value={user_id}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Enter Password"
              type={"password"}
              name="password"
              value={password}
              onChange={handleChange}
            />
            <Text fontSize={"sm"} _hover={{ textDecorationLine: "underline" }}>
              Forgot Password?
            </Text>
          </Box>
          <Box>
            <Button
              w={"100%"}
              onClick={() => handleClick(state)}
              borderRadius="none"
              bg={"#e03030"}
              color="white"
            >
              Submit
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
}

// background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(83,1,1,1) 100%);
