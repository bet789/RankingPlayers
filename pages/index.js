import Head from "next/head";
import TrangChu from "./trang-chu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>New88 - Bảng Xếp Hạng Bắn Cá, Nổ Hũ</title>
        <meta
          name="description"
          content="New88 - Bảng Xếp Hạng Bắn Cá, Nổ Hũ"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TrangChu />
    </div>
  );
}
