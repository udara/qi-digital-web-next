import Head from "next/head";
// Components.
import Hero from "../components/Hero";
import SecureAndReliable from "../components/SecureAndReliable";
import Legacy from "../components/Legacy";
import Team from "../components/team/Team";
import Technology from "../components/Technology";
import Partners from "../components/Partners";
import Why from "../components/Why";
import ThoughtLeadership from "../components/ThoughtLeadership";
import Contact from "../components/Contact";

const index = () => {
    return (
        <>
            <Head>
                <title>Qi Digital | Crypto Payments</title>
                <meta
                    property="og:title"
                    content="A cryptocurrency payments solution for merchants and retailers."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.qidigital.com/" />
                <meta
                    property="og:image"
                    content="https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/og_image.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@QiDigitalLtd" />
                <meta
                    name="twitter:title"
                    content="A crypto payments gateway for businesses everywhere."
                />
                <meta
                    name="twitter:description"
                    content="A cryptocurrency payments solution for merchants and retailers."
                />
                <meta
                    name="twitter:image"
                    content="https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/twitter_card_image.png"
                />
            </Head>
            <Hero/>
            <SecureAndReliable/>
            <Legacy/>
            <Team/>
            <Technology/>
            <Partners/>
            <Why/>
            <ThoughtLeadership/>
            <Contact/>
        </>
    );
};

export default index;
