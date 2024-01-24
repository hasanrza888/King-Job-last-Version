import SearchBox from "./SearchBox";
import { setCompanyContacts,updateCompanyContacts } from "../../../../../features/employer/employerSlice";
import { getallcompanycontact } from "../../../../../services/api/company_api";
import { useEffect } from "react";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import { useSelector,useDispatch } from "react-redux";
import { setCurrentchat } from "../../../../../features/message/messageSlice";
import { getcurrentchat } from "../../../../../services/api/company_api";
const ChatboxContactList = () => {
    const dispatch = useDispatch();
    const {companycontacts} = useSelector(state=>state.employer)
    console.log(companycontacts)
    useEffect(()=>{
        const fetchcompanycontacts = async () => {
            try {
                const {data} = await getallcompanycontact();
                dispatch(setCompanyContacts(data.data))
                // console.log(data.data)
            } catch (error) {
                handleApiError(error);
            }
        };
        
        fetchcompanycontacts();
    },[dispatch])

    const selectCurrentChat = async (contact,chatId,logo,name) => {
        try {
            const {data} = await getcurrentchat(chatId);
            // console.log({...data,logo})
            dispatch(setCurrentchat({...data.data,userprofilelogo:logo,userName:name,_id:chatId}))
            dispatch(updateCompanyContacts({...contact,unreadMessages:{user:0,company:0}}))
        } catch (error) {
            handleApiError(error)
        }
    }
    return (
        <ul className="contacts">
            {
                companycontacts?.slice().sort((a,b)=>b.unreadMessages.company-a.unreadMessages.company)?.map((contact,index)=>(
                    <li>
                <a onClick={()=>selectCurrentChat(contact,contact?.chatId,contact?.userLogo,contact?.userName)} href="#">
                    <div className="d-flex bd-highlight">
                        <div className="img_cont">
                            <img
                                src={contact?.userLogo || "/images/resource/candidate-3.png"}
                                className="rounded-circle user_img"
                                alt="chatbox avatar"
                                width={90}
                                height={90}
                            />
                        </div>
                        <div className="user_info">
                            <span title={contact?.userName}>{contact?.userName?.slice(0,10)}...</span>
                            <p title={contact?.userJobTitle}>{contact?.userJobTitle?.slice(0,10)}...</p>
                        </div>
                        <span className="info">
                            {contact?.unreadMessages?.company>0 &&( <span className="count bg-success">{contact?.unreadMessages?.company}</span>)}
                        </span>
                    </div>
                </a>
            </li>
                ))
            }
            {/* End single Contact List */}
        </ul>
    );
};

export default ChatboxContactList;
