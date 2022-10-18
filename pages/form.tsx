import Layout from "../components/Layout";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField
} from "@mui/material";
import {useState} from "react";

const FormPage = () => {
  const [value, setValue] = useState({name: 'Test', agree: false, gender: null});

  // const updateValue = (e) => {
  //   const name = e.target.name;
  //   value[name] = e.target.value;
  // };

  return (
    <Layout>
      <div>
        <TextField required label="Name" value={value.name} onChange={(e) => setValue({...value, name: e.target.value})}></TextField>
        <FormControlLabel control={<Checkbox value={value.agree} onChange={(e) => setValue({...value, agree: e.target.checked})}/>}
                          label="Agree"></FormControlLabel>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup value={value.gender} onChange={(e) => setValue({...value, gender: e.target.value})}>
            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select label="Gender" value={value.gender} onChange={(e) => setValue({...value, gender: e.target.value})}>
            <MenuItem value={null}>--Select--</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div>{JSON.stringify(value)}</div>
    </Layout>
  );
}

export default FormPage
