import { useContext } from "react";
import { AppContext } from "../../../store/context";

const useHandlers = () => {
  const {
    valueCalculator,
    setValueCalculator,
    setScreenCalculator,
    setSaveFirstDigitsOnSelectOperation,
    setOperationSelected,
    operationSelected,
    saveFirstDigitsOnSelectOperation,
  } = useContext(AppContext);

  const saveFirstDigits = () => {
    setSaveFirstDigitsOnSelectOperation(
      Number(valueCalculator.join().replaceAll(",", ""))
    );
    setValueCalculator([]);
  };

  const handleClickDigButton = (event: any) => {
    const ButtonClicked = event.target.innerText;

    setValueCalculator((prevstate: any) => {
      return [...prevstate, ButtonClicked];
    });
  };

  const handleClickRemoveDig = () => {
    setValueCalculator(valueCalculator.slice(0, -1));

    if (valueCalculator.length === 0) {
      setOperationSelected("");
    }
  };

  const handleClickMultiplie = () => {
    saveFirstDigits();
    setOperationSelected("multiplie");
  };

  const handleClickSum = () => {
    saveFirstDigits();
    setOperationSelected("sum");
  };

  const handleClickSubtract = () => {
    saveFirstDigits();
    setOperationSelected("subtract");
  };

  const handleResetOperation = () => {
    setScreenCalculator(null);
    setOperationSelected("");
    setValueCalculator([]);
    setSaveFirstDigitsOnSelectOperation(null);
  };

  const handleClickResult = () => {
    switch (operationSelected) {
      case "sum":
        const resultSum =
          Number(valueCalculator.join().replaceAll(",", "")) +
          saveFirstDigitsOnSelectOperation;
        setScreenCalculator(resultSum);
        break;
      case "multiplie":
        const resultMultiplie =
          Number(valueCalculator.join().replaceAll(",", "")) *
          saveFirstDigitsOnSelectOperation;
        setScreenCalculator(resultMultiplie);
        break;
      case "subtract":
        const resultSubtract =
          saveFirstDigitsOnSelectOperation -
          Number(valueCalculator.join().replaceAll(",", ""));
        setScreenCalculator(resultSubtract);
        break;
      default:
        break;
    }
  };

  return {
    handleClickDigButton,
    handleClickRemoveDig,
    handleClickMultiplie,
    handleClickSum,
    handleClickSubtract,
    handleResetOperation,
    handleClickResult,
  };
};

export default useHandlers;
