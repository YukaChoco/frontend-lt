import { Box, Typography } from "@mui/material";

export default function WhatIsWebFront2() {
  return (
    <Box
      textAlign={"left"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h2>Webフロントとは</h2>
      <br />
      {/* TODO: 画像サイズをレスポンシブにする */}
      <img src="/region.png" height={300} alt="領域を説明する図" />
    </Box>
  );
}
