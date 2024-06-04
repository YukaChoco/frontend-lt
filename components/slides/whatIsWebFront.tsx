import { Box, Typography } from "@mui/material";

export default function WhatIsWebFront() {
  return (
    <Box
      textAlign={"left"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h2>Webフロントとは</h2>
      <h3>サービスづくりにおける領域</h3>
      <Box border={2} padding={"12px 80px"} textAlign={"left"}>
        <ul>
          <li>
            <span>企画</span>
          </li>
          <li>
            <span>デザイン</span>
          </li>
          <li>
            <span>Webフロントエンド</span>
          </li>
          <li>
            <span>モバイル</span>
          </li>
          <li>
            <span>バックエンド</span>
          </li>
          <li>
            <span>インフラ</span>
          </li>
          <li>
            <span>マーケティング</span>
          </li>
        </ul>
      </Box>
    </Box>
  );
}
