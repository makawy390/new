// import { Switch } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeMode } from "../../rtk/reducer/createSlice";
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";

const SwitchApp = () => {
  const dispatch = useDispatch();
  // const label = { inputProps: { "aria-label": "Switch demo" } };
  const [checked, setChecked] = useState(false);
  const handleChangeMode = (e) => {
    setChecked(e.value);
    dispatch(changeMode());
  };
  return (
    <>
      {/* <Switch
        sx={{ position: "fixed", right: 0 }}
        {...label}
        color="info"
        defaultChecked
        onClick={() => dispatch(changeMode())}
      /> */}
      <InputSwitch checked={checked} onChange={(e) => handleChangeMode(e)} />
    </>
  );
};

export default SwitchApp;
