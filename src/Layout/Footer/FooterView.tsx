import { Box, Grid, Typography } from "@mui/material";
import React from "react";
// import mainBanner from "../../../assets/Images/illustration-laptop-mobile.svg";

export default function FooterView() {
  return (
    <Box
      sx={{
        background: "hsl(240, 10%, 16%)",
        paddingBottom: "50px",
      }}
    >
      <Grid
        container
        sx={{
          padding: "10px",
          marginTop: {
            sm: 5,
            md: 10,
          },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            component="p"
            sx={{
              textAlign: {
                xs: "center",
              },
              marginTop: "2px",
              color: " white",
            }}
          >
            Copyright @2022 All rights reserved
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            paddingInline: {
              lg: "70px",
            },
          }}
        >
          <Typography
            component="p"
            sx={{
              marginTop: "10px",
              textAlign: {
                xs: "center",
              },

              color: " white",
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
