import { Box, Typography } from "@mui/material";

export default function Highlights() {
  // TODO: 押したら該当のスライドに飛ぶようにする
  return (
    <Box
      textAlign={"left"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h2>目次</h2>
      <ul>
        <li>
          <span>Webフロントとは</span>
        </li>
        <li>
          <span>モバイルとの違い</span>
        </li>
        <li>
          <span>私的Webフロントの楽しさ</span>
        </li>
        <li>
          <span>サイトを公開してみる</span>
        </li>
        <li>
          <span>抑えておきたい基礎知識</span>
        </li>
      </ul>
    </Box>
  );
}
