import React from "react";
import useCounter from "../../hooks/useCounter";
import I18n from "../I18n";
import ResetButton from "../counter/ResetButton";
import {Button} from "@mui/material";

const Counter = () => {
  const {count, add, reset} = useCounter();

  return <div>
    <div>
      <I18n name="countDisplay" values={{count}}>Count is {count}</I18n>
    </div>
    <Button onClick={add}>Add</Button>
    <ResetButton resetFn={reset} count={count}></ResetButton>
  </div>
}

export default Counter
