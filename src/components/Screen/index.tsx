import { Box } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../store/context";
import { ScreenText } from "./styles";

interface ScreenProps {
  value: any;
}

const Screen = ({ value }: ScreenProps) => {
  const { screenCalculator } = useContext(AppContext);
  return (
    <ScreenText>{Number(screenCalculator).toLocaleString("pt-BR")}</ScreenText>
  );
};

export default Screen;
