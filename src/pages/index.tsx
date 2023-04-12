import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import Intro from "@/components/Intro";
import Header from "@/components/Header";
import MetaTag from "@/components/MetaTag";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MetaTag title="Meals By Akeel" />
      <main className="text-gray-400 min-h-screen bg-akeel_navy body-font">
        <Header />
        <Intro />
        <Link
          href={"/selection"}
          className="ml-auto text-white bg-akeel_yellow border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
        >
          Order Now
        </Link>
      </main>
    </>
  );
}
