// Components.
import Link from 'next/link'
import axios from 'axios';
import Head from "next/head";
import MarkdownIt from "markdown-it"

import Contact from "../../components/Contact";


// Import images.
const arrow_head =
    "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg";
const share =
    "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/share-icon.svg";
import logoWhite from "../../assets/logo-white.svg";

const Article = ({article}) => {
    const md = new MarkdownIt({html: true});
    const htmlBodyContent = md.render(article[0].attributes.body)
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

                <div
                    className="w-fit flex justify-between sm:text-[14pt] text-[12pt] tracking-wider font-SourceSansPro font-base text-white opacity-70">
                    <div className="cursor-pointer grid content-center sm:px-3 px-1.5">
                        <Link href="/articles">
                            ARTICLES
                        </Link>
                    </div>

                    <div className="cursor-pointer grid content-center sm:pl-3 pl-1.5">
                        <Link href="/contact">
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
                <title>{article[0].attributes.title}</title>
            </Head>
            <div className="relative h-[70px]">{nav}</div>

            <div className="font-SourceSansPro max-w-[700px] mx-auto px-5 mt-[46px] lg:px-0">
                <div className="font-semibold mb-3 ml-0.5 text-[#c3bdad] text-base">
                    Category:{" "}
                    <span className="text-black font-extrabold">
            {article[0].attributes.category}
          </span>
                </div>

                <div className="text-[32pt] md:text-[36pt] font-CormorantGaramond leading-tight">
                    {article[0].attributes.title}
                </div>

                <div
                    className="mt-8 mb-7 sm:flex justify-between border-b border-t border-neutral-300 sm:py-3 py-5 px-2">
                    <div className="flex">
                        <img
                            src={'https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/mann_team.jpg'}
                            className="rounded-full w-12 h-12 bg-neutral-100 mr-3"
                        />

                        <div>
                            <h2 className="font-normal text-lg leading-6">
                                {article[0].attributes.author.data.attributes.name}{" "}
                                <span className="text-neutral-400">
                  - {article[0].attributes.publishedAt}
                </span>
                            </h2>

                            <h3 className="text-[#9b0a69]">{'7 mins'}</h3>
                        </div>
                    </div>
                    {/*
          <div className="flex justify-end">
            <img className="h-7 mt-2 cursor-pointer" src={share} />
          </div> */}
                </div>

                <img src={'https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/graphics.jpg'}/>

                <section className="resources-article-body mt-10"
                         dangerouslySetInnerHTML={{__html: htmlBodyContent}}></section>

            </div>

            <div className="max-w-[1480px] mx-auto lg:px-20 md:px-12 px-6 py-20">
                <div className="flex w-full justify-start md:justify-end">
                    <div className="font-SourceSansPro border-t border-gray-500 pt-4 text-[16px] font-semibold">
                        <div className="flex justify-between cursor-pointer w-[250px] md:w-[350px]">
                            <div
                                className="relative border border-t-mid-grey mt-[17px] border-l-0 border-r-0 border-b-0 w-full">
                                <img
                                    src={arrow_head}
                                    className="h-6 absolute left-0 -top-3 rotate-180"
                                />
                            </div>

                            <p className="p-1 ml-5 md:flex flex-none">
                                <Link href="/articles">Back to articles</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Contact/>
        </>
    );
};

export default Article;

const ProductionUrl = 'https://strap-test-9zlo8.ondigitalocean.app';
const localUrl = 'http://localhost:1337';

export async function getStaticProps({params}) {

    const postsRes = await axios.get(`${ProductionUrl}/api/articles?filters[slug][$eq]=${params.slug}&populate[author][populate][0]=image`);

    return {
        props: {
            article: postsRes.data.data
        }
    }
}

export async function getStaticPaths() {
    const articleRes = await axios.get(`${ProductionUrl}/api/articles?populate[author][populate][0]=image&sort[1]=publisedAt%3Aasc`);

    const paths = articleRes.data.data.map((article) => {
        return {params: {slug: article.attributes.slug}}
    });

    return {
        paths: paths,
        fallback: false
    }
}


