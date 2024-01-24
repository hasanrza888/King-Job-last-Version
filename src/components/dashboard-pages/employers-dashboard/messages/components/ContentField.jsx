import { handleApiError } from "../../../../../utils/apiErrorHandling";
import ChatHamburger from "./ChatHamburger";
import { useSelector,useDispatch } from "react-redux";
import { addMessage } from "../../../../../features/message/messageSlice";
import { sendmessage } from "../../../../../services/api/company_api";
import { useEffect, useState,useRef } from "react";
import socket from "../../../../../socket/socketService";
import { calculateTimeDifference } from "../../../../../utils/calculateTimeDifference";
const ChatBoxContentField = () => {
  const dispatch = useDispatch();
  const [content,setContent] = useState("")
  const {currentChat} = useSelector(state=>state.message);
  console.log(currentChat)
  const {user} = useSelector(state=>state.auth);
  const myid = user?._id;
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sendmsg = async (e) => {
    e.preventDefault();
    console.log(currentChat)
    try {
      const {data} = await sendmessage(currentChat?._id,{content});
      dispatch(addMessage(data.data))
      scrollToBottom();
    } catch (error) {
      handleApiError(error);
    }
  }
  useEffect(()=>{
    socket.on('message',(data)=>{
      const {chat} = data;
      if(currentChat && currentChat?._id === chat){
        dispatch(addMessage(data))
        scrollToBottom();
      }
      // console.log(data)
    })
    return () => {
      // Clean up socket listeners when the component unmounts
      socket.off('message');
    };
  },[dispatch,currentChat]);


  useEffect(()=>{
    scrollToBottom();
  },[currentChat?.messages])
  // if (!currentChat) {
  //   return (
  //     <div className="card message-card">
  //       <div className="card-header msg_head">
  //         <p>No Conversation</p>
  //       </div>
  //     </div>
  //   );
  // }
  if(currentChat){
  return (
    <div className="card message-card">
      <div className="card-header msg_head">
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img
              width={48}
              height={48}
              src={currentChat?.userprofilelogo || "/images/resource/candidate-8.png"}
              alt="candidates"
              className="rounded-circle user_img"
            />
          </div>
          <div className="user_info">
            <span>{currentChat?.userName}</span>
            <p>{currentChat?.receiverIsOnline && "Xətdə"}</p>
          </div>
        </div>

        <div className="btn-box">
          <button className="dlt-chat">Mesajları sil</button>
          <ChatHamburger />
        </div>
      </div>
      {/* End .cart-header */}
      
      <div className="card-body msg_card_body">
      {
        currentChat?.messages?.map((message,index)=>(
          
          <div className={message?.sender === myid ?"d-flex justify-content-end mb-2 reply" :"d-flex justify-content-start mb-2"}>
            <div className="img_cont_msg">
              <img
                width={48}
                height={48}
                src={message?.sender === myid ? currentChat?.myprofilelogo || "/images/resource/candidate-3.png" : currentChat?.userprofilelogo || "/images/resource/candidate-3.png"}
                alt="candidates"
                className="rounded-circle user_img_msg"
              />
              <div className="name">
                {message?.sender === myid ? user?.name :currentChat?.userName} <span className="msg_time">{calculateTimeDifference(message?.createdAt)}</span>
              </div>
            </div>
            <div className="msg_cotainer">
              {message?.text}
            </div>
          </div>
        ))
      }
      <div ref={messagesEndRef} />
      </div>
      {/* End .card-body */}

      <div className="card-footer">
        <div className="form-group mb-0">
          <form onSubmit={sendmsg}>
            <textarea
              className="form-control type_msg"
              placeholder="Mesaj yaz..."
              required
              onChange={(e)=>{setContent(e.target.value)}}
            ></textarea>
            <button
              type="submit"
              className="theme-btn btn-style-one submit-btn"
            >
              Göndər
            </button>
          </form>
        </div>
      </div>
      {/* End .card-footer */}
    </div>
  )};
};

export default ChatBoxContentField;
