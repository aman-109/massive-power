import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Watchlist } from "./watchlist";
import Navbar from "../Components/nav";
import DisplayData from "../Page-Section/body";
// let socket;


function useSocket() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    fetch('/api/socket').finally(() => {
      const socketio = io();
      socketio.on('connect', () => {
        console.log('hii');
        socketio.emit('hello');
        socketio.emit('aman',"mate");
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
  const socket = useSocket();
  // console.log(socket)
  const [data,setData]=useState([])
  const [Message,setMessage]=useState('')
  useEffect(() => {
    if (socket) {
      // socket.on('data',(d)=>{
      //   // console.log(d);
      //   setData(d)
      // })
      socket.on('hello', data => {
        // console.log('hello', data);
        setMessage(data);
      });
      socket.on('a user connected', () => {
        console.log('a user connected');
      });
    }
  }, [socket]);
  return (
    <>
      <Navbar />
      <DisplayData/>
      
      {/* <h1 >{Message}</h1> */}
    </>
  );
}
