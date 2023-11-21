/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowDown from "@mui/icons-material/ArrowDownward";
import TwoSidedLayout from "../components/TwoSidedLayout";

export default function Intro() {
  return (
    <TwoSidedLayout imgSource="small-steps.png">
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        The power to do more, with less.
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Small steps, in the right direction.
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Our goal is to make small changes, with the right impact.
      </Typography>
      <Button size="lg" endDecorator={<ArrowForward/>}>
        Get Started
      </Button>
      <Typography>
        Already a member? <Link fontWeight="lg">Sign in</Link>
      </Typography>

      <Typography
        level="body-xs"
        sx={{
          position: "absolute",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        <ArrowDown />
      </Typography>
    </TwoSidedLayout>
  );
}
