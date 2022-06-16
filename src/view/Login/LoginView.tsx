import React, { useState } from "react";
import LayoutView from "../../Layout";
import { Box, Grid, Paper, Typography } from "@mui/material";
import mobileBanner from "../../assets/Images/bg-intro-mobile.png";
import desktopBanner from "../../assets/Images/bg-intro-desktop.png";
import InputField, { SnackBar } from "../../components";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import type { AlertColor } from "@mui/material/Alert/Alert";
import { loginUserApi } from "../../services/login";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ILoginInput, loginSchema } from "./formSchema";
import { loginUser } from "../../sharedslices/userSlice";

export default function LoginView() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginInput>({
    resolver: yupResolver(loginSchema),
  });

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);

  const [open, setOpen] = useState(false);

  let navigate = useNavigate();

  const onSubmit: SubmitHandler<ILoginInput> = async (data) => {
    dispatch(loginUser(data));
  };

  if (user.status == "success") {
    navigate("/main", { replace: true });
  }

  return (
    <LayoutView>
      <SnackBar
        open={user.status == "error"}
        setOpen={setOpen}
        severity="error"
        message={user.error}
      />
      <Box
        mt={10}
        mb={10}
        sx={{
          backgroundImage: {
            xs: `url(${mobileBanner})`,
            md: `url(${desktopBanner})`,
          },
          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "hsl(0, 100%, 74%)",
          padding: "3rem 0rem",
        }}
      >
        <Grid
          container
          sx={{
            marginTop: {
              sm: 5,
              md: 10,
            },
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "center",
              color: "white",
              paddingInline: "10px  ",
            }}
          >
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: 700 }}
            >
              Login
            </Typography>

            <Typography
              component="p"
              sx={{ textAlign: "center", marginTop: "10px", fontSize: "1rem" }}
            >
              Login By Username or Email Address
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                width: "60%",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                padding: "2.3rem 1.2rem",
                margin: "1.5rem auto",
                borderRadius: "10px",
              }}
            >
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputField
                    error={!!errors.username}
                    label="Username or Email"
                    variant="outlined"
                    helperText={!!errors.username && errors.username.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputField
                    error={!!errors.password}
                    label="Password"
                    variant="outlined"
                    type="password"
                    helperText={!!errors.password && errors.password.message}
                    {...field}
                  />
                )}
              />
              <LoadingButton
                loading={user.status == "loading"}
                variant="outlined"
                sx={{ marginTop: "10px" }}
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </LoadingButton>
              ,
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </LayoutView>
  );
}
