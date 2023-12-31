import * as React from "react";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import TwoSidedLayout from "../components/TwoSidedLayout";

export default function TechPortfolio() {
  return (
    <TwoSidedLayout imgSource="portfolio.png">
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        For broad horizons.
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        The right tech for a bright future.
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Discover limitless possibilities with metateic, where our commitment to
        open-source technologies empowers diverse demographics, fosters
        innovation, and ensures sustainable development for a connected and
        inclusive future.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          my: 2,
          "& > *": { flex: "auto" }
        }}
      >
        <Button size="lg" variant="outlined" color="neutral">
          Learn More
        </Button>
        <Button size="lg" endDecorator={<ArrowForward/>}>
          Get Started
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          textAlign: "left",
          "& > *": {
            flexShrink: 0
          }
        }}
      >
        <AvatarGroup size="lg">
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
        <Typography textColor="text.secondary">
          Join a community of over <b>10K</b> <br />
          designers and developers.
        </Typography>
      </Box>

      <Typography
        level="body-xs"
        sx={{
          position: "absolute",
          top: "2rem",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
      </Typography>
    </TwoSidedLayout>
  );
}
