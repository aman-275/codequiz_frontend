import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import mainBanner from "../../../assets/Images/illustration-editor-mobile.svg";

export default function MainView() {
  return (
    <Box mt={10}>
      <Typography
        variant="h4"
        sx={{
          color: "hsl(208, 49%, 24%)",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Designed for the Students
      </Typography>

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
          }}
        >
          <Box
            component="img"
            sx={{
              display: "block",
              height: {
                xs: "100%",
                // sm: "60%",
                // md: "60%",
                // lg: "70%",
              },
              width: {
                xs: "100%",
                // lg: "70%",
              },
              // width: "100%",
              objectFit: "cover",
            }}
            alt="editor-desk"
            src={mainBanner}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingInline: {
              lg: "70px",
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: {
                xs: "center",
                md: "revert",
              },
              color: "hsl(208, 49%, 24%)",
              fontWeight: "bold",
              paddingInline: {
                xs: "20px",
                lg: "5px",
              },
            }}
          >
            Introducing an exiciting quiz portal
          </Typography>

          <Typography
            component="p"
            sx={{
              textAlign: {
                xs: "center",
                md: "revert",
              },
              marginTop: "2px",
              color: " #363636",
              paddingInline: {
                xs: "20px",
                lg: "5px",
              },
            }}
          >
            CodeQuiz is a exceedingly intuitive interface which let you focus on
            creating quiz. It allow you to set questions with options as a
            answer and let users to interact with it. It helps users to learn
            new new technology in a creative way.A quiz is a form of game or
            mind sport in which players attempt to answer questions correctly
            about a certain or variety of subjects
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
