import Head from "next/head";
import React from "react";

type MetaTagProps = {
  title: string;
};

export default function MetaTag({ title }: MetaTagProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Meal Service By Akeel" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
