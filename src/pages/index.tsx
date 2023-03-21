import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Intro from "@/components/Intro";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Meals By Akeel</title>
        <meta name="description" content="Meal Service By Akeel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-gray-400 bg-akeel_navy body-font">
        <Intro />
        <Link
          href={"/menu"}
          className="flex ml-auto text-white bg-akeel_yellow border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
        >
          Order Now
        </Link>
      </main>
    </>
  );
}
