import { useEffect } from 'react'
import io from 'Socket.IO-client'

export default function Home() {
  useEffect(() => {socketInitializer()}, [])

  // const socketInitializer = async () => {
  //   await fetch('/api/socket')
  //   socket = io()

  //   socket.on('connect', () => {
  //     console.log('connected')
  //   })
  // }
  return (
    <>
    <h1>Homepage</h1>
   
    </>
  )
}
