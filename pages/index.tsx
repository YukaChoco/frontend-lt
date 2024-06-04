import Head from "next/head";
import { useState } from "react";
import { Box, Pagination } from "@mui/material";
import slides from "@/components/slides";
import { Transition } from "@mantine/core";

export default function Home() {
  const [activePage, setPage] = useState(1);

  const titleStyle = {
    top: activePage === 1 ? "30vh" : "0",
    fontSize: activePage !== 1 ? "2rem" : undefined,
  };

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
        <h1 style={titleStyle}>フロントエンドの楽しさ</h1>

        {/* h1タグの幅だけ余白を作る */}
        <Box height="5vh" />

        <Box style={{ position: "relative" }} className="slide">
          {slides.map((slide, index) => (
            <Transition
              key={index}
              mounted={index === activePage - 1}
              transition="fade"
              duration={400}
              timingFunction="ease"
            >
              {(styles) => (
                <Box style={{ ...styles, position: "absolute" }} key={index}>
                  {slide}
                </Box>
              )}
            </Transition>
          ))}
        </Box>

        {/* pagenationでCurrentPageを表示。 */}
        <Pagination
          count={slides.length}
          page={activePage}
          onChange={(_, page) => setPage(page)}
        />
      </main>
    </>
  );
}
