import { Box } from "@mui/material";

export default function SlideQR() {
  return (
    <Box
      textAlign={"left"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h2>今日のスライド</h2>
      <img src="/slideQR.svg" height={400} alt="今日のスライドが載っているサイトのQRコード" />
    </Box>
  );
}
