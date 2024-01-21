import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import { setCurrentchat } from "../../../../../features/message/messageSlice";
import { getcurrentchat } from "../../../../../services/api/company_api";
const ChatboxContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.candidate);
  const selectCurrentChat = async (chatId,logo,name) => {
    try {
        const {data} = await getcurrentchat(chatId);
        // console.log({...data,logo})
        dispatch(setCurrentchat({...data.data,userprofilelogo:logo,userName:name,_id:chatId}))
        
    } catch (error) {
        handleApiError(error)
    }
}
  return (
    <ul className="contacts">
      {contacts?.map((cnt, ind) => {
        return (
          <li>
            <a onClick={()=>selectCurrentChat(cnt?.chatId,cnt?.companyLogo,cnt?.companyName)} href="#">
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img
                    src={cnt?.companyLogo}
                    className="rounded-circle user_img"
                    alt="chatbox avatar"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="user_info">
                  <span>{cnt?.companyName}</span>
                  <p title={"Human Resources Department"}>{"Human Resources Department".slice(0,9)}</p>
                </div>
                <span className="info">
                  35 mins<span className="count">2</span>
                </span>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default ChatboxContactList;
