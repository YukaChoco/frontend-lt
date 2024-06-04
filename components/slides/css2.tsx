import { Box } from "@mui/material";

export default function CSS2() {
  return (
    <Box
      textAlign={"left"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h2>抑えておきたい基礎知識</h2>

      <h3>どれを選べばいい？</h3>
      <ul>
        <li>
          <span>CSS</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>基礎を学びたい</span>
            </li>
            <li>
              <span>自由に作りたいものが表現できる</span>
            </li>
          </ul>
        </li>
        <li>
          <span>CSSフレームワーク</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>直感的にHTMLに書き込める</span>
            </li>
            <li>
              <span>※ CSSの知識がないと手を付けづらい</span>
            </li>
          </ul>
        </li>
        <li>
          <span>UIライブラリ</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>簡単にそれっぽいサイトを作りたい</span>
            </li>
            <li>
              <span>※ デザインがUIライブラリに依存してしまう</span>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
}
