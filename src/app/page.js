`"use clinte"`

import Image from "next/image";
import Header from './../components/Header/index';
import Article from './../components/Articles/index';

export default function Home() {
  return (
    <div>
      <Header />
      <Article />
    </div>
  );
}
