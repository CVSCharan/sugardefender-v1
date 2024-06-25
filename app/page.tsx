import styles from "./page.module.css";
import MainPage from "./components/MainPage/MainPage";
import SecondPage from "./components/SecondPage/SecondPage";
import FirstPage from "./components/FirstPage/FirstPage";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Sugar Defender</title>
      </Head>
      <Script
        src="https://richinfo.co/richpartners/in-page/js/richads-ob.js?pubid=929555&siteid=347784"
        strategy="afterInteractive"
      />
      <MainPage />
      <SecondPage />
      <FirstPage />
    </main>
  );
}
