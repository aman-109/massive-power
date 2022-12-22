import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

let init = {
  name: "",
  email: "",
  password: "",
  age: "",
};

let userSignup = async (data) => {
  let res = await axios.post("/api/user/signup", data);
  return res.data;
};

export default function signup() {
  const [state, setState] = useState(init);
  const router = useRouter();
  //On Change function
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  // Click function
  let handleClick = async (data) => {
    if (
      data.email == "" ||
      data.password == "" ||
      data.name == "" ||
      data.age == ""
    ) {
      return alert("Please enter all details");
    }
    let res = await userSignup(data);
    console.log(res);
    if (res.status === false) {
      alert(res.message);
    } else {
      alert(res.message);
      router.push("/login");
    }
    setState(init);
  };
  let { email, password, name, age } = state;
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
          Create your StockBy account
        </Text>
        <Text fontSize={"md"}>
          Already have an account?
          <span style={{ color: "#e03030" }}>
            <Link href="/login"> Log In.</Link>
          </span>
        </Text>
      </Box>
      <Box>
        <FormControl display={"flex"} flexDirection="column" gap={"20px"}>
          <Box>
            <FormLabel>Name</FormLabel>
            <Input
              placeholder="Enter Name"
              type={"name"}
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Box>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter Email"
              type={"email"}
              name="email"
              value={email}
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
          </Box>

          <Box>
            <FormLabel>Age</FormLabel>
            <Input
              placeholder="Enter Age"
              type={"age"}
              name="age"
              value={age}
              onChange={handleChange}
            />
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
