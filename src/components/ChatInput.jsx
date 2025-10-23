 import LoadingSpinner from '../assets/loading-spinner.gif';
 import { Chatbot } from 'supersimpledev';
 import {  useState } from 'react';
 import dayjs from 'dayjs';
 import './ChatInput.css';
 
 export function ChatInput({chatMessages,setChatMessages}){
    
      const [inputText,setInputText] = useState('');
      const [isLoading,setIsLoading] = useState(false);

     

     
      
      
      function getInput(event){
        setInputText(event.target.value)
      } 

      async function sendData(){

          if(isLoading || inputText === '' ){
            return ;
          }


       setIsLoading(true);

         const userInput = [
            ...chatMessages,
            {
              message: inputText,
              sender : 'user',
              id : crypto.randomUUID(),
              time: dayjs().valueOf()
            }
          ];


          setInputText('');

         
  


          setChatMessages([
            ...userInput,
            {
               message: <img className="loading-spinner"  src={LoadingSpinner} />,
              sender : 'robot',
              id : crypto.randomUUID()
            }
          ]);
          


            const response = await Chatbot.getResponseAsync(inputText);
            
            setChatMessages([
            ...userInput,
            {
              message: response,
              sender : 'robot',
              id : crypto.randomUUID(),
              time: dayjs().valueOf()
            }
          ]);

        setIsLoading(false);


            
      }


      function enterKey(event){
        
        if(event.key === 'Enter'){
            sendData();
        }
      }


      function clearData(){
        setChatMessages([])
        
      }
        return(
          <div className="chat-input-container">
            <input 
              placeholder="Send a message to Chatbot" 
              size="30"
              onChange={getInput}
              value = {inputText}
              onKeyDown={enterKey}
              className ="chat-input"
            />
            <button onClick={sendData} className="send-button" >Send</button>
             <button onClick={clearData} className='clear-button'>Clear</button>
          </div>
         )
    }