import { Box, Grid, Typography } from "@mui/material";

export default function Happy() {
  return (
    <Box
      textAlign={"left"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h2>Webフロントの楽しさ</h2>

      <ul>
        <li>
          <span>ウェブの最適化 = ゲーム</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>サイトの速度を上げる</span>
            </li>
            <li>
              <span>SEOを極める</span>
            </li>
          </ul>
        </li>
        <br />
        <li>
          <span>UI/UXをこだわる</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>視覚的なフィードバック</span>
            </li>
            <li>
              <span>デザイン・アニメーションを極める</span>
            </li>
          </ul>
        </li>
        <br />
        <li>
          <span>その他</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span
                style={{ fontWeight: "bold", borderBottom: "1px solid white" }}
              >
                作りたいものを気軽に作って公開できる
              </span>
            </li>
            <li>
              <span
                style={{ fontWeight: "bold", borderBottom: "1px solid white" }}
              >
                人に自慢できる
              </span>
            </li>
            <li>
              <span>可能性は無限大</span>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
}
