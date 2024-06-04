import { Box, Divider, Typography } from "@mui/material";

export default function Highlights() {
  // TODO: 押したら該当のスライドに飛ぶようにする
  return (
    <Box
      textAlign={"left"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h2>Webアプリとモバイルアプリの違い</h2>
      <Box className="web-mobile-container">
        <Box border={2}>
          <h3>Webアプリ</h3>

          <ul>
            <li>
              <span>誰でもアクセスできる</span>
            </li>
            <li>
              <span>PCでもスマホでもアクセスできる</span>
            </li>
            <li>
              <span>アップデートが簡単にできる</span>
            </li>
          </ul>
        </Box>
        <Box border={2}>
          <h3>モバイルアプリ</h3>
          <ul>
            <li>
              <span>オフラインでもアクセスできる</span>
            </li>
            <li>
              <span>カメラ、GPS、センサーなどのデバイス機能を活用できる</span>
            </li>
            <li>
              <span>
                一度アプリを入れたら、リピートして使ってくれる可能性が高い
              </span>
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
