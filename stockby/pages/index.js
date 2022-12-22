import { useEffect } from 'react'
import io from 'Socket.IO-client'
import { Watchlist } from '../component-vh/watchlist'

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
       <Watchlist/>
    </>
  );
}
