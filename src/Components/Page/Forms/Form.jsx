import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Header from '../../Header';

import { useForm } from "react-hook-form";
export default function Form() {
  const [ open , Setopen] = useState(false);

  function handleClose(){
    Setopen(false);
  }
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset({ email: "", firstName: "", lastName: "", phone: "" });
    Setopen(true);
  };

  const currencies = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "User",
      label: "User",
    },
    {
      value: "Manger",
      label: "Manger",
    },
  ];
  return (
    <>
    <Header text={"Form"} />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "20px ",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 5,
          }}
        >
          <TextField
            label="Fristname"
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName) ? "This field is required" : null
            }
            {...register("firstName" ,  { required: true })}
            variant="filled"
          />
          <TextField
            label="lastname"
            error={Boolean(errors.lastName)}
            helperText={Boolean(errors.lastName)? "This field is required" : null}

            {...register("lastName", { required: true })}
            variant="filled"
          />
        </Box>
        <TextField
          label="Email"
          type="email"
          error = {Boolean(errors.Email)}
          helperText={Boolean(errors.Email)? "This field is required" : null}
          {...register("Email", { required: true })}
          variant="filled"
        />
        <TextField
          label="Content Number"
          type="number"
          error={Boolean(errors.phone)}
          helperText={Boolean(errors.phone)? "this Field id required" : null }

          variant="filled"
          {...register("phone", { required: true })}
        />
        <TextField
          label="Address 1"
          variant="filled"
          {...register("Address 1")}
        />
        <TextField
          label="Address 2"
          variant="filled"
          {...register("Address 2")}
        />
        <TextField
          id="filled-select-currency"
          select
          label="Role"
          defaultValue="User"
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",

            my: 3,
          }}
        >
          <Button
            type="submit"
            sx={{
              textTransform: "capitalize",
            }}
            variant="contained"
          >
            Create New User
          </Button>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        
      >
      <Alert severity="success">Data entered successfully</Alert>

      </Snackbar>
    </>
  );
}
