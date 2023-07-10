import Link from 'next/link'
import Head from "next/head";
import axios from 'axios';

// Components.
import MainTop from "../components/navigation/MainTop";
import Contact from "../components/Contact";
import ArticleSummary from "../components/resources/ArticleSummary";

// Import images.
import logoWhite from "../assets/logo-white.svg";
import moment from "moment";

const Articles = ({articles}) => {

  const renderedArticles = articles.map((article, index) => {
    const title = article?.attributes?.title ?? null;
    const imgUrl = article?.attributes?.image?.data?.attributes?.url ?? null
    const summary = article?.attributes?.summary ?? null
    const category = article?.attributes?.category ?? null
    const authorName = article?.attributes?.author?.data?.attributes?.name ?? null
    const publisedAt = article?.attributes?.publisedAt ?? null
    const authorImgUrl = article.attributes?.author?.data?.attributes?.image?.data?.attributes?.url ?? null
    const slug = article?.attributes?.slug ?? null
    const body = article?.attributes?.body ?? 0;
    const readingTime = Math.round((body.split(" ").length / 200));

    return (
      <ArticleSummary
          key={article.attributes.slug}
          number={index + 1}
          title={title}
          summary={summary}
          author={authorName}
          createdAt={publisedAt}
          readTime={`${readingTime} mins`}
          authorThumb={authorImgUrl}
          link={slug}
      />
    );
  });

  const nav = (
    <div className="fixed z-20 h-[70px] bg-black inset-x-0 top-0 w-full">
      <div className="flex justify-between mx-auto h-full max-w-[1480px] lg:px-20 md:px-12 px-6">
        <Link href="/">
          <div
            className="w-11 h-11 mt-3 bg-contain bg-no-repeat cursor-pointer"
            style={{
              backgroundImage: `url(${logoWhite})`,
            }}
          ></div>
        </Link>

        <div className="w-fit flex justify-between sm:text-[14pt] text-[12pt] tracking-wider font-SourceSansPro font-base text-white opacity-70">
          <div className="cursor-pointer grid content-center sm:px-3 px-1.5">
            <Link href="/articles">
              ARTICLES
            </Link>
          </div>

          <div className="cursor-pointer grid content-center sm:pl-3 pl-1.5">
            <Link href="/#contact" scroll={false}>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Qi Digital | Crypto Payments - Articles</title>
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
      <div className="w-full item-center">
        <div className="relative h-[70px]">
          <MainTop transitionHeight={0}/>
        </div>

        <div className="max-w-[1480px] mx-auto lg:px-20 md:px-12 px-6 mb-24">
          <div className="text-[32pt] md:text-[36pt] font-CormorantGaramond leading-tight mt-16 mb-12">
            Articles
          </div>

          <div className="container mx-auto resources-content-bg mb-8">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 gap-y-10">
              {renderedArticles}
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </>
  );
};

export default Articles;

export async function getStaticProps() {
  const strapiEndpoint = process.env.STRAPI_ENDPOINT
  const postsRes = await axios.get(`${strapiEndpoint}/api/articles?populate[author][populate][0]=image&sort[1]=publisedAt%3Aasc`);
  return {
    props: {
      articles: postsRes.data.data
    }
  };
}
