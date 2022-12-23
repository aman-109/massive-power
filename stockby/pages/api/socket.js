
// import axios from "axios"
// import { Server } from 'socket.io';
// const getData=async()=>{
//   let res= await axios("https://financialmodelingprep.com/api/v3/stock/list?apikey=3139067cf0700794db80a5ca039116d6")
//  console.log(res.data)
//   return res.data
// }

// const ioHandler = (req, res) => {

//   if (!res.socket.server.io) {
//     //console.log('*First use, starting socket.io');
//     const io = new Server(res.socket.server);

//     io.on('connection', (socket) => {
//       console.log('Connected socket.io');
//       socket.emit('a user connected');
      
//       setInterval(async()=>{
//         let data= await getData()
//         socket.emit('data', data);

//       },1000)

//       socket.on('hello', msg => {
//         setInterval(()=>{
//           let x= Math.floor(Math.random()*60)+40
//           socket.emit('hello', x);

//         },30000)
        
//       });
//       socket.on('aman',(m)=>{
//         //console.log(m)
//       })
//     });

//     res.socket.server.io = io;
//   }else {
//     console.log('socket.io already running');
//   }
//   res.end();
// }

// export const config = {
//   api: {
//     bodyParser: false
//   }
// };

// export default ioHandler