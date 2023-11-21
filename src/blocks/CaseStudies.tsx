import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Star from "@mui/icons-material/Star";
import TwoSidedLayout from "../components/TwoSidedLayout";

export default function CaseStudies() {
  return (
    <TwoSidedLayout imgSource="case-studies.png">
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        Strong foundations require key principles.
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Honesty and Transparency.
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Take a look at how we approach solutioning. From initial anaylisis to
        post rollout monitoring.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          my: 2,
          flexWrap: "wrap",
          "& > *": { flex: "auto" }
        }}
      >
        <Button size="lg" endDecorator={<ArrowForward/>}>
          Case studies
        </Button>
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          textAlign: "center",
          alignSelf: "stretch",
          columnGap: 4.5,
          "& > *": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            flex: 1
          },
          [theme.breakpoints.up(834)]: {
            textAlign: "left",
            "& > *": {
              flexDirection: "row",
              gap: 1.5,
              justifyContent: "initial",
              flexWrap: "nowrap",
              flex: "none"
            }
          }
        })}
      >
        <div>
          <Typography
            fontSize="xl4"
            fontWeight="lg"
            endDecorator={<Star sx={{ color: "warning.300" }} />}
          >
            4.9
          </Typography>
          <Typography textColor="text.secondary">
            Over <b>5k</b> positive <br /> customer reviews.
          </Typography>
        </div>
        <div>
          <Typography fontSize="xl4" fontWeight="lg">
            2M
          </Typography>
          <Typography textColor="text.secondary">
            Global <br /> Transactions.
          </Typography>
        </div>
      </Box>
      <Typography
        level="body-xs"
        sx={{
          position: "absolute",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      ></Typography>
    </TwoSidedLayout>
  );
}
