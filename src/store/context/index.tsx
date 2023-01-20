import { createContext, Dispatch, SetStateAction, useState } from "react";

type StatesContextType = {
  valueCalculator: number[];
  setValueCalculator: Dispatch<SetStateAction<any>>;
  screenCalculator: number;
  setScreenCalculator: Dispatch<SetStateAction<any>>;
  operationSelected: string;
  setOperationSelected: Dispatch<SetStateAction<string>>;
  saveFirstDigitsOnSelectOperation: any;
  setSaveFirstDigitsOnSelectOperation: Dispatch<SetStateAction<any>>;
};

export const AppContext = createContext({} as StatesContextType);

const ContextProvider = ({ children }: any) => {
  const [valueCalculator, setValueCalculator] = useState([]);
  const [screenCalculator, setScreenCalculator] = useState<any>();
  const [operationSelected, setOperationSelected] = useState("");
  const [
    saveFirstDigitsOnSelectOperation,
    setSaveFirstDigitsOnSelectOperation,
  ] = useState<any>();
  return (
    <AppContext.Provider
      value={{
        valueCalculator,
        setValueCalculator,
        screenCalculator,
        setScreenCalculator,
        operationSelected,
        setOperationSelected,
        saveFirstDigitsOnSelectOperation,
        setSaveFirstDigitsOnSelectOperation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
