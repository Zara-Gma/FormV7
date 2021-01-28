import React from 'react';
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { Controller, useForm } from "react-hook-form";
import { Form } from "../components/Form";
import {
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Radio,
  RadioGroup
} from "@material-ui/core";
// import { yupResolver } from "@hookform/resolvers";
// import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// const schema = yup.object().shape({
//   over18: yup
//     .boolean()
//     .oneOf([true], "Must be 18 or older to register"),
//   experienceLevel: yup
//     .string(),
//   firstName: yup
//     .string().required("First name is a required field")
//     .matches(/^([^0-9]*)$/, "First name should not contain numbers")
//     .min(2, "Name must be at least 2 characters"),
//   lastName: yup
//     .string()
//     .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
//     .required("Last name is a required field")
//     .min(2, "Name must be at least 2 characters"),
//   email: yup
//     .string()
//     .email("Email should have correct format")
//     .required("Email is a required field"),
//   phoneNumber: yup
//     .string()
//     .matches(phoneRegExp, 'Phone number is not valid')
//     .min(10, "to short")
//     .max(10, "to long"),
// })

// resolver: (values: yupResolver),


export const PersonalInfo = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  // const { register, handleSubmit, control, errors } = useForm({
  //   defaultValues: {
  //     over18: data.over18,
  //     experienceLevel: data.experienceLevel,
  //     firstName: data.firstName,
  //     lastName: data.lastName,
  //     email: data.email,
  //     phoneNumber: data.phoneNumber
  //   },
  //   mode: "onBlur",
  //   // resolver: yupResolver(schema),
  // });

  const { formState: { register, errors } } = useForm({
    defaultValues: {
      // over18: data.over18,
      // experienceLevel: data.experienceLevel,
      // firstName: data.firstName,
      // lastName: data.lastName,
      // email: data.email,
      // phoneNumber: data.phoneNumber
    },
    mode: "onBlur",
    // resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    history.push("./identity");
    setValues(data);
  };

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Sign up and join CyberDEI! <br /> Please fill out as much information as you feel comfortable sharing. <br /><small>This information will only help us provide the best resources for you and the inclusive community we are trying to build.</small>
      </Typography><br />
<Form >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p className="over18">
              &#9888; Are you at least 18 years of age? (Must be 18 or older to register)
</p>
          </Grid>
        </Grid>
      </Form>
    </React.Fragment>
  );
}