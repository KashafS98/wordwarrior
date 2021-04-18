import React from "react";
import { Helmet } from "react-helmet";
import IntroSection from "../components/IntroSection";
import PageLayout from "../layouts/pages";
import logo from '../images/icon.png'

export default function Home() {
  return (
    <PageLayout>
      <Helmet>
        <title>WordWarrior's</title>
        <meta name="image" content={logo} />
        <link rel="shortcut icon" type="image/png" href="image/icon.png"></link>
      </Helmet>
      <IntroSection />
    </PageLayout>
  );
}
