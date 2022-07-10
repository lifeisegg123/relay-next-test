import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Test = dynamic(() => import("../Test"), { ssr: false });

const Home: NextPage = () => {
  return (
    <Suspense fallback="loading">
      <Test />
    </Suspense>
  );
};

export default Home;
