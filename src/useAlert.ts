import { useContext } from "react";
import { AlertContext, AlertContextProps } from "./Context";

const useAlert = (): AlertContextProps => {
  const alertContext = useContext(AlertContext);
  return alertContext;
};

export default useAlert;
