import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Watchlist } from "./watchlist";
import Navbar from "../Components/nav";
import DisplayData from "../Page-Section/body";
// let socket;


function useSocket(url) {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    fetch(url).finally(() => {
      const socketio = io();
      socketio.on('connect', () => {
        console.log('hii');
        socketio.emit('hello');
      });
      // socketio.on('disconnect', () => {
      //   console.log('disconnect');
      // });
      setSocket(socketio);
    });
    // function cleanup() {
    //   socket.disconnect();
    // }
    // return cleanup;
  }, []);
  return socket;
}

export default function Home() {
  const socket = useSocket('/api/socketio');
  console.log(socket)
  const [Message,setMessage]=useState('')
  useEffect(() => {
    if (socket) {
      socket.on('hello', data => {
        console.log('hello', data);
        setMessage(data);
      });
      // socket.on('a user connected', () => {
      //   setUser('a user connected');
      // });
    }
  }, [socket]);
  return (
    <>
      <Navbar />
      <DisplayData/>
      
      <h1 >{Message}</h1>
    </>
  );
}
