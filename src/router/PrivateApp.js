import { Navigate } from "react-router-dom";
import credentials from "../services";

export const PrivateApp = ({ children }) => {
  return !credentials.getUser() ? <Navigate to="/auth" /> : children;
};
