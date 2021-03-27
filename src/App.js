import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'
import axios from './axios'

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/details')
    .then(response => {
      console.log(response.data)
      setMessages(response.data)
    })
  },[])


  useEffect(() => {
    const pusher = new Pusher('be134a202162a707608b', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) =>  {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages,newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages]);

 

  console.log(messages)

  return (
    <div className="App">
      <div className="app__body">
        <Sidebar/>
        <Chat messages ={messages} />
      </div>
   
    </div>
  );
}

export default App;
