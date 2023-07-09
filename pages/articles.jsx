import Link from 'next/link'
import Head from "next/head";
import axios from 'axios';

// Components.
import Contact from "../components/Contact";
import ArticleSummary from "../components/resources/ArticleSummary";
import articlesArray from "../components/resources/articles/articlesArray";

// Import images.
import logoWhite from "../assets/logo-white.svg";

const Articles = ({articles}) => {

  const renderedArticles = articles.map((article, index) => {
    return (
      <ArticleSummary
          key={article.attributes.title}
          number={index + 1}
          title={article.attributes.title}
          summary={article.attributes.summary}
          author={article.attributes.author.data.attributes.name}
          createdAt={article.attributes.publishedAt}
          readTime={'5 mins'}
          authorThumb={'https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/mann_team.jpg'}
          link={article.attributes.slug}
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
        <title>Qi-Digital - Articles</title>
      </Head>
      <div className="w-full item-center">
        <div className="relative h-[70px]">{nav}</div>

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
  const ProductionUrl = 'https://strap-test-9zlo8.ondigitalocean.app';
  const localUrl = 'http://localhost:1337';

  const postsRes = await axios.get(`${ProductionUrl}/api/articles?populate[author][populate][0]=image&sort[1]=publisedAt%3Aasc`);
  return {
    props: {
      articles: postsRes.data.data
    }
  };
}
