import React, { useEffect, useState } from "react";
import LayoutView from "../../Layout";
import { Box, Grid, Paper, Typography, Container } from "@mui/material";
import mobileBanner from "../../assets/Images/bg-intro-mobile.png";
import desktopBanner from "../../assets/Images/bg-intro-desktop.png";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { registerUser } from "./registrationSlice";
import InputField, { SnackBar } from "../../components";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerUserApi } from "../../services/register";
import LoadingButton from "@mui/lab/LoadingButton";
import type { AlertColor } from "@mui/material/Alert/Alert";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import GoogleButton from "react-google-button";

//used underscore just to make it compatible with python backend

import { IRegisterInput, registrationSchema } from "./formSchema";
import {
  loginSocialUser,
  googleAccessTokenError,
} from "../../sharedslices/userSlice";
import { useNavigate } from "react-router-dom";

gapi.load("client:auth2", () => {
  gapi.client.init({
    clientId:
      "726510210867-kocdcsfiev6sa56uvcspiksgo9p6ned7.apps.googleusercontent.com",
    scope: "email",
  });
});

export default function RegistrationView() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegisterInput>({
    resolver: yupResolver(registrationSchema),
  });
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");
  const navigate = useNavigate();

  const responseGoogle = (response: any) => {
    dispatch(loginSocialUser({ access_token: response.accessToken }));
  };

  const responseGoogleError = ({ details }: any) => {
    dispatch(googleAccessTokenError(details));
  };

  const onSubmit: SubmitHandler<IRegisterInput> = async (data) => {
    delete data["passwordConfirmation"];
    try {
      setLoading(true);
      const res = await registerUserApi(data);
      setMessage("Verification Email is send to your registered email");
      setSeverity("success");
      reset();
    } catch (error) {
      setMessage(JSON.stringify(error));
      setSeverity("error");
    } finally {
      setLoading(false);
      setOpen(true);
    }
  };

  if (user.status == "success") {
    navigate("/main", { replace: true });
  }

  return (
    <LayoutView>
      {user.status == "error" ? (
        <SnackBar
          setOpen={setOpen}
          severity={user.status}
          message={user.error}
          open={true}
        />
      ) : (
        <SnackBar
          setOpen={setOpen}
          severity={severity}
          message={message}
          open={open}
        />
      )}

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
              paddingInline: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ textAlign: "center", fontWeight: 700 }}
            >
              Learn code concepts by giving quiz
            </Typography>

            <Typography
              component="p"
              sx={{ textAlign: "center", marginTop: "10px", fontSize: "1rem" }}
            >
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great but understanding how
              developers think is invaluable.
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
                name="first_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputField
                    error={!!errors.first_name}
                    label="FirstName"
                    variant="outlined"
                    {...field}
                    helperText={
                      !!errors.first_name && errors.first_name.message
                    }
                  />
                )}
              />
              <Controller
                name="last_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputField
                    error={!!errors.last_name}
                    label="LastName"
                    variant="outlined"
                    helperText={!!errors.last_name && errors.last_name.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputField
                    error={!!errors.username}
                    label="Username"
                    variant="outlined"
                    helperText={!!errors.username && errors.username.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputField
                    error={!!errors.email}
                    type="email"
                    label="Email"
                    variant="outlined"
                    {...field}
                    helperText={!!errors.email && errors.email.message}
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
              <Controller
                name="passwordConfirmation"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputField
                    error={!!errors.passwordConfirmation}
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    helperText={
                      !!errors.passwordConfirmation &&
                      errors.passwordConfirmation.message
                    }
                    {...field}
                  />
                )}
              />
              <LoadingButton
                loading={loading}
                variant="outlined"
                sx={{ marginTop: "10px" }}
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </LoadingButton>

              <GoogleLogin
                clientId="319472057262-vdfeg3ikhkvq04sdh2tehr6tlm1jgc6i.apps.googleusercontent.com"
                render={(renderProps) => (
                  <GoogleButton
                    style={{ width: "100%" }}
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Sign in with Google
                  </GoogleButton>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogleError}
                cookiePolicy={"single_host_origin"}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </LayoutView>
  );
}
