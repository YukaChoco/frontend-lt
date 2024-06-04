import { Box } from "@mui/material";

export default function JS2() {
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
          <span>JavaScript</span>
          <ul style={{ marginTop: "1rem" }}>
            <li>
              <span>React</span>
              <ul style={{ marginTop: "1rem" }}>
                <li>
                  <span>Vue.js</span>
                </li>
              </ul>
            </li>
            <li>
              <span>Vue.js</span>
              <ul style={{ marginTop: "1rem" }}>
                <li>
                  <span>Nuxt.js</span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </Box>
  );
}
