import styles from "./page.module.css";
import MainPage from "./components/MainPage/MainPage";
import SecondPage from "./components/SecondPage/SecondPage";
import FirstPage from "./components/FirstPage/FirstPage";
import Head from "next/head";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <script
          src="https://richinfo.co/richpartners/in-page/js/richads-ob.js?pubid=929555&siteid=347784"
          async
        ></script>
      </Head>
      <MainPage />
      <SecondPage />
      <FirstPage />
    </main>
  );
}
