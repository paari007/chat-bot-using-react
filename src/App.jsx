import { useEffect, useState } from 'react';
import { ChatInput } from './components/ChatInput';
import  ChatMessages  from './components/ChatMessages';
import './App.css';
import { Chatbot } from 'supersimpledev';


function App(){
       const[chatMessages,setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || [] )


       useEffect(()=>{
            Chatbot.addResponses({
              arun : 'sotta,sotta sotta',
              vijay:"kusu moota",
              geetha:'geetha bhai zindha bhai'
            })
       },[])

       useEffect(()=>{
           localStorage.setItem('messages',JSON.stringify(chatMessages))
       },[chatMessages])

       return(
          <div className="app-container">
              {chatMessages.length === 0 && (
              <p className="welcome-message">
                Welcome to the chatbot project! Send a message using the textbox below.
              </p>
            )}

            <ChatMessages 
              chatMessages={chatMessages}
            />

             <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />

          </div>

        )  
       
    }

     
       

export default App
