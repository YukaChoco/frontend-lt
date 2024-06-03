import Head from "next/head";
import { useState } from "react";
import { Pagination, Text } from "@mantine/core";

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

        {items[activePage - 1]}
        <Pagination
          total={items.length}
          value={activePage}
          onChange={setPage}
          mt="sm"
        />
      </main>
    </>
  );
}
