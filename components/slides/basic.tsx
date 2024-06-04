import { Box, Typography } from "@mui/material";

export default function Basic() {
  return (
    <Box
      textAlign={"left"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h2>抑えておきたい基礎知識</h2>
      <ul>
        <li>
          <span>Webフロントとは</span>
        </li>
        <li>
          <span>Webアプリとモバイルアプリの違い</span>
        </li>
        <li>
          <span>Webフロントの楽しさ</span>
        </li>
        <li>
          <span>抑えておきたい基礎知識</span>
        </li>
      </ul>
    </Box>
  );
}
