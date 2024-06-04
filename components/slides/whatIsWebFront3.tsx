import { Box } from "@mui/material";

export default function WhatIsWebFront3() {
  return (
    <Box
      textAlign={"left"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h2>Webフロントとは</h2>
      <br />
      <h3>フロントエンドが担当すること</h3>

      <Box border={2} padding={"12px 80px"} textAlign={"left"}>
        <ul>
          <li>
            <span>UIの配置</span>
            <ul>
              <li>
                <span>UI: テキスト・ボタン・ヘッダーなど</span>
              </li>
            </ul>
          </li>
          <li>
            <span>ロジックを書く</span>
            <ul>
              <li>フロントで処理 or バックエンドを使って処理</li>
            </ul>
          </li>
        </ul>
      </Box>
    </Box>
  );
}
