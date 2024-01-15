import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
const ChatboxContactList = () => {
  const { contacts } = useSelector((state) => state.candidate);
  return (
    <ul className="contacts">
      {contacts?.map((cnt, ind) => {
        return (
          <li>
            <a href="#">
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
