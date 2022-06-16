import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import mainBanner from "../../../assets/Images/illustration-laptop-mobile.svg";

export default function OpenSourceSection() {
  return (
    <Box
      mt={20}
      sx={{
        border: "1px solid black",
        background:
          "linear-gradient(-45deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%))",
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
          }}
        >
          <Box
            component="img"
            sx={{
              display: "block",
              height: {
                xs: "100%",
              },
              width: {
                xs: "100%",
              },

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
              color: "white",
              fontWeight: "bold",
              paddingInline: {
                xs: "20px",
                lg: "5px",
              },
            }}
          >
            Free, Open Source
          </Typography>

          <Typography
            component="p"
            sx={{
              textAlign: {
                xs: "center",
                md: "revert",
              },
              marginTop: "2px",
              color: " white",
              paddingInline: {
                xs: "20px",
                lg: "5px",
              },
            }}
          >
            It is the open source projects,Read the contributing guide to learn
            about our development process, how to propose bug fixes and
            improvements, and how to build and test your changes.Contributing to
            codequiz is about more than just issues and pull requests! There are
            many other ways to support codequiz beyond contributing to the code
            base.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
