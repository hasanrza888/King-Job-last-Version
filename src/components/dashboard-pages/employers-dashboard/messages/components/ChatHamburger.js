import { useDispatch } from "react-redux";
import { chatSidebarToggle } from "../../../../../features/toggle/toggleSlice";

export default function ChatHamburger() {
  const dispatch = useDispatch();

  const chatToggle = () => {
    dispatch(chatSidebarToggle());
  };
  return (
    <>
      <button onClick={chatToggle} className="toggle-contact">
        <i class="icon las la-address-card"></i>
      </button>
    </>
  );
}
