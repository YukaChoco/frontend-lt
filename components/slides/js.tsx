import { Box, Typography } from "@mui/material";

export default function JS() {
  return (
    <Box
      textAlign={"left"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <h2>抑えておきたい基礎知識</h2>

      <h3>JavaScript</h3>
      <ul>
        <li>
          <span>JavaScriptのフレームワーク</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>React</span>
            </li>
            <li>
              <span>Vue.js</span>
            </li>
          </ul>
        </li>
        <li>
          <span>Reactフレームワーク</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>Next.js </span>
            </li>
          </ul>
        </li>
        <li>
          <span>Vue.jsのフレームワーク</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>Nuxt.js</span>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
}
