import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import TwoSidedLayout from "../components/TwoSidedLayout";

export default function Teamwork() {
  return (
    <TwoSidedLayout imgSource="sharing-ideas.png">
      <Chip size="lg" variant="outlined" color="neutral">
        Empowering eachother
      </Chip>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Teamwork is the backbone of success.
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Take a look at our working relationship strategy, our mission is
        solutioning with clear communication.
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
          Detailed strategy
        </Button>
        <Button
          size="lg"
          variant="outlined"
          color="neutral"
          startDecorator={<PlayCircleOutlineIcon />}
        >
          Watch Video
        </Button>
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
        HeroLeft04
      </Typography>
    </TwoSidedLayout>
  );
}
