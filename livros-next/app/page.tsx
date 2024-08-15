
import Head from "next/head";
import { Menu } from "@/componentes/Menu";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main className="main justify-content-center p-5">
        <h1 className="title text-center">Página Inicial</h1>
      </main>
    </>
  );
}
