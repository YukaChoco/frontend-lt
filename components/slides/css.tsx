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

      <h3>CSS・UIライブラリ</h3>
      <ul>
        <li>
          <span>CSSのフレームワーク</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>TailwindCSS</span>
            </li>
            <li>
              <span>Bootstrap</span>
            </li>
          </ul>
        </li>
        <li>
          <span>UIライブラリ</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>Material UI (MUI)</span>
            </li>
            <li>
              <span>ChakraUI</span>
            </li>
            <li>
              <span>Mantine</span>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
}
