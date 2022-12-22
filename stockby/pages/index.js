import { useEffect } from "react";
import io from "socket.io-client";

let socket;

export default function Home() {
  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("connected");
    });
    socket.emit("get", "hii");
  };
  return (
    <>
      <h1>Homepage</h1>
    </>
  );
}
