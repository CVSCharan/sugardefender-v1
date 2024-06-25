import styles from "./page.module.css";
import MainPage from "./components/MainPage/MainPage";
import SecondPage from "./components/SecondPage/SecondPage";
import FirstPage from "./components/FirstPage/FirstPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainPage />
      <SecondPage />
      <FirstPage />
    </main>
  );
}
