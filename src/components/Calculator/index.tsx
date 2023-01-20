import { Box } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "../../store/context";
import Buttons from "../Buttons";
import Screen from "../Screen";

const Calculator = () => {
  const { valueCalculator } = useContext(AppContext);
  return (
    <Box
      sx={{
        background: "#363636",
        maxWidth: "460px",
        padding: "20px",
        boxShadow: "0 0 20px black",
      }}
    >
      <Screen value={valueCalculator} />
      <Buttons />
    </Box>
  );
};

export default Calculator;
