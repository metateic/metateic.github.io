import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Container from "@mui/joy/Container";
import { typographyClasses } from "@mui/joy/Typography";

export default function TwoSidedLayout({
  children,
  reversed,
  imgSource
}: React.PropsWithChildren<{ reversed?: boolean; imgSource: string }>) {
  return (
    <Container
      sx={(theme) => ({
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: reversed ? "column-reverse" : "column",
        alignItems: "center",
        py: 10,
        gap: 4,
        [theme.breakpoints.up(834)]: {
          flexDirection: "row",
          gap: 6
        },
        [theme.breakpoints.up(1199)]: {
          gap: 12
        },
        backgroundColor: "transparent"
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          maxWidth: "50ch",
          textAlign: "center",
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: "flex-start",
            textAlign: "initial"
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: "balance"
          }
        })}
      >
        {children}
      </Box>
      <AspectRatio
        className="bg-opacity-0"
        variant="plain"
        ratio={600 / 520}
        maxHeight={600}
        sx={(theme) => ({
          minWidth: 300,
          alignSelf: "stretch",
          [theme.breakpoints.up(834)]: {
            alignSelf: "initial",
            flexGrow: 1,
            "--AspectRatio-maxHeight": "600px",
            "--AspectRatio-minHeight": "400px"
          },
          flexBasis: "50%"
        })}
      >
        <img src={imgSource} alt=""/>
      </AspectRatio>
    </Container>
  );
}
