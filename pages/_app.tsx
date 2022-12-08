import "../styles/globals.css";
import "../styles/Hero.css";
import "../styles/Card.css";
import "../styles/Scrollbar.css";
import "../styles/SlickDots.css";
import type { AppProps } from "next/app";
import Topbar from "../components/common/Topbar";
import Navbar from "../components/common/Navbar";
import PreFooter from "../components/common/PreFooter";
import Footer from "../components/common/Footer";
import ProgressBar from "../components/common/ProgressBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [progress, setProgress] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

    //eslint-disable-next-line
  }, [router.query]);

  return (
    <>
      <ProgressBar progress={progress} />
      <Topbar />
      <Navbar />
      <Component {...pageProps} />
      <PreFooter />
      <Footer />
    </>
  );
}
