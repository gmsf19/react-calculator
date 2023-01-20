import { Box, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/context";
import useHandlers from "./hooks/useHandlers";
import { StyledButton } from "./styles";

const Buttons = () => {
  const { setScreenCalculator, valueCalculator } = useContext(AppContext);

  const {
    handleClickDigButton,
    handleClickMultiplie,
    handleClickSubtract,
    handleClickSum,
    handleResetOperation,
    handleClickRemoveDig,
    handleClickResult,
  } = useHandlers();

  useEffect(() => {
    setScreenCalculator(String(valueCalculator.join().replaceAll(",", "")));
  }, [valueCalculator]);

  return (
    <Box
      display='grid'
      flexDirection='column'
      gap='20px'
      gridTemplateColumns='1fr 1fr 1fr 1fr'
    >
      <StyledButton onClick={handleClickDigButton}>7</StyledButton>
      <StyledButton onClick={handleClickDigButton}>8</StyledButton>
      <StyledButton onClick={handleClickDigButton}>9</StyledButton>

      <StyledButton onClick={handleClickMultiplie}>X</StyledButton>

      <StyledButton onClick={handleClickDigButton}>4</StyledButton>
      <StyledButton onClick={handleClickDigButton}>5</StyledButton>
      <StyledButton onClick={handleClickDigButton}>6</StyledButton>

      <StyledButton onClick={handleClickSum}>+</StyledButton>

      <StyledButton onClick={handleClickDigButton}>1</StyledButton>
      <StyledButton onClick={handleClickDigButton}>2</StyledButton>
      <StyledButton onClick={handleClickDigButton}>3</StyledButton>

      <StyledButton onClick={handleClickSubtract}>-</StyledButton>

      <StyledButton onClick={handleClickDigButton}>0</StyledButton>
      <StyledButton onClick={handleResetOperation}>{"C"}</StyledButton>
      <StyledButton onClick={handleClickRemoveDig}>←</StyledButton>
      <StyledButton onClick={handleClickResult}>=</StyledButton>
    </Box>
  );
};

export default Buttons;
