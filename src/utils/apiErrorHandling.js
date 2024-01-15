import { toast } from "react-toastify";

export const handleApiError = (error) => {
  if (error.response && error.response.data) {
    toast.error(error.response.data.message);
  } else {
    console.error(error);
  }
};