import { useRef,useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'

function useAutoScroll(dependencies) {
      
        const containerRef = useRef(null);

        useEffect(() => {
          const containerElem = containerRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [dependencies]);

        return containerRef;
      }


     function ChatMessages({chatMessages}){

     const chatMessagesRef = useAutoScroll([chatMessages]);
     
      return (
        <div className="chat-messages-container"
        ref={chatMessagesRef}>
         
           {chatMessages.map((chat)=>{
             return (
                <ChatMessage 
                  message={chat.message} 
                  sender={chat.sender} 
                  key={chat.id}
                   time={chat.time}
                />
              )
           })}
        </div>
      )

        

    }


    export default ChatMessages;