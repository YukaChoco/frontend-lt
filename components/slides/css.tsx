import { Box, Typography } from "@mui/material";

export default function CSS() {
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
          <span>基本的に使用するもの</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>HTML</span>
            </li>
            <li>
              <span>CSS</span>
            </li>
            <li>
              <span>JavaScript / TypeScript</span>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
}
