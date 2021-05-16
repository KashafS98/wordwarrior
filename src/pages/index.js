import React from "react";
import { Helmet } from "react-helmet";
import IntroSection from "../components/IntroSection";
import PageLayout from "../layouts/pages";
import logo from '../images/icon.png'
import Cover1 from "../components/Cover-1";
import MoreAboutMe from "../components/MoreAboutMe";

export default function Home() {
  return (
    <PageLayout>
      <Helmet>
        <title>WordWarrior's</title>
        <meta name="image" content={logo} />
        <link rel="shortcut icon" type="image/png" href="image/icon.png"></link>
      </Helmet>
      <IntroSection />
      <MoreAboutMe/>
       {/* <Cover1/> */}
    </PageLayout>
  );
}
