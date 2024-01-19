import { logout } from "../services/api/auth_api";
import { useDispatch } from "react-redux";
import { clearUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { handleApiError } from "../utils/apiErrorHandling";
import {toast} from 'react-toastify'
const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutUser = async () => {
    try {
      const { data } = await logout();
      navigate('/login');
      dispatch(clearUser());
      toast.success("Successfully logged out", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      window.location.reload();
    } catch (error) {
      handleApiError(error);
    }
  };

  return logoutUser;
};

export default useLogout;