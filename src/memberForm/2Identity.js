import React from 'react';
import { useHistory } from "react-router-dom";
import { useData } from "../DataContext";
import { Controller, useForm } from "react-hook-form";
import { Form } from "../components/Form";
import {
  Checkbox,
  Grid,
  InputLabel,
  TextField
} from "@material-ui/core";
// import { yupResolver } from "@hookform/resolvers";
// import * as yup from "yup";
import ReactSelect from "react-select";
import Veteran from "../constants/veteranSelectOptions";

// const schema = yup.object().shape({
//   veteranStatus: yup
//     .string(),
//   identify: yup
//     .string(),
//   comment: yup.string()
//     .min(10, "Must be at least 3 characters")
// })


export const Identity = () => {
  const { setValues, data } = useData();
  const history = useHistory();
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      veteranStatus: data.veteranStatus,
      identify: data.identify,
      comments: data.comments
    },
    mode: "onBlur",
    // resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    history.push("./interests");
    setValues(data);
  };

  return (
    <React.Fragment>
      <Form>
      </Form>
    </React.Fragment >
  );
};
