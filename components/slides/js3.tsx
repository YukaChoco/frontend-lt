import { Box } from "@mui/material";

export default function JS3() {
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
          <span>JavaScript</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>基礎を学びたい</span>
            </li>
          </ul>
        </li>
        <li>
          <span>Reactとかのフレームワーク</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>簡単にそれっぽいサイトを作りたい</span>
            </li>
            <li>
              <span>開発環境を整える(準備)が必要</span>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
}
