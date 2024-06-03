import Head from "next/head";
import { useState } from "react";
import { Box, Pagination, Text, Transition } from "@mantine/core";

export default function Home() {
  const [activePage, setPage] = useState(1);
  const items = [<Text>hogehoge</Text>, <Text>hugahuga</Text>];

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

        <Box style={{ height: "100vh", width: "100vw", position: "relative" }} className="slide">
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

        <Pagination
          p={20}
          total={items.length}
          value={activePage}
          onChange={setPage}
          mt="xl"
        />
      </main>
    </>
  );
}
