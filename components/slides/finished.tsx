import { Box, Typography } from "@mui/material";

export default function Finished() {
  return (
    <Box
      textAlign={"left"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h2>さいごに</h2>

      <Typography fontSize={24} fontWeight={"bold"}>めっちゃ楽しいから、ぜひなんか作ろ</Typography>
    </Box>
  );
}
