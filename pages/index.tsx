import Head from "next/head";
import { useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";
import { Transition } from "@mantine/core";

export default function Home() {
  const [activePage, setPage] = useState(1);
  const items = [
    <Typography>hogehoge</Typography>,
    <Typography>hugahuga</Typography>,
    <Typography>helloWorld</Typography>,
    <Typography>hogehoge</Typography>,
    <Typography>hugahuga</Typography>,
    <Typography>helloWorld</Typography>,
    <Typography>hogehoge</Typography>,
    <Typography>hugahuga</Typography>,
    <Typography>helloWorld</Typography>,
    <Typography>hogehoge</Typography>,
    <Typography>hugahuga</Typography>,
    <Typography>helloWorld</Typography>,
  ];

  return (
    <>
      <Head>
        <title>フロントエンドの楽しさ</title>
        <meta
          name="description"
          content="学生IT団体watnowにおける、新入生向け技術紹介LT会で用いたスライド用ページです。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>フロントエンドの楽しさ</h1>

        <Box style={{ position: "relative" }} className="slide">
          {items.map((item, index) => (
            <Transition
              key={index}
              mounted={index === activePage - 1}
              transition="fade"
              duration={400}
              timingFunction="ease"
            >
              {(styles) => (
                <Box style={{ ...styles, position: "absolute" }} key={index}>
                  {item}
                </Box>
              )}
            </Transition>
          ))}
        </Box>

        {/* pagenationでCurrentPageを表示。 */}
        <Pagination
          count={items.length}
          page={activePage}
          onChange={(_, page) => setPage(page)}
        />
      </main>
    </>
  );
}
