import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import mobileBanner from "../../../assets/Images/bg-pattern-intro-mobile.svg";

export default function HeroView() {
  return (
    <>
      <Box
        style={{
          color: "white",

          borderRadius: "0 0 0 100px",
          overflow: "hidden",
          position: "relative",
          background:
            "linear-gradient(-45deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
        }}
        sx={{
          height: 700,
        }}
      >
        <Box
          style={{
            position: "absolute",
            transform: "rotate(15deg)",
            left: -360,
            top: -50,
          }}
        >
          <img src={mobileBanner} width="1324" height="1323" />
        </Box>

        <Box
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            justifyContent: "center",
          }}
        >
          <Typography
            style={{
              fontWeight: 500,
              paddingInline: "1rem",
              textAlign: "center",
            }}
            variant="h2"
          >
            A modern quiz platform
          </Typography>
          <Typography
            mt={2}
            style={{
              paddingInline: "1rem",
              textAlign: "center",
            }}
            variant="h4"
          >
            Develop your coding knowledge
          </Typography>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
}
