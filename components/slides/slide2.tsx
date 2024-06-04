import { Box, Typography } from "@mui/material";

export default function Slide2() {
  return (
    <Box>
      {/* h1タグの幅だけ余白を作る */}
      <Box height="5vh" />
      <Typography pt={4} fontSize={20}>
        watnow 4回生 藤堂 ゆうか
      </Typography>
    </Box>
  );
}
