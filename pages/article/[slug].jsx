// Components.
import Link from 'next/link'
import axios from 'axios';
import Head from "next/head";
import MarkdownIt from "markdown-it"
import moment from 'moment';

import Contact from "../../components/Contact";


// Import images.
const arrow_head =
    "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/arrow_head.svg";
const share =
    "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/share-icon.svg";
import logoWhite from "../../assets/logo-white.svg";
import MainTop from "../../components/navigation/MainTop";

const Article = ({article}) => {
    const md = new MarkdownIt({html: true});


    const title = article[0]?.attributes?.title ?? null;
    const imgUrl = article[0]?.attributes?.image?.data?.attributes?.url ?? null
    const summary = article[0]?.attributes?.summary ?? null
    const category = article[0]?.attributes?.category ?? null
    const slug = article[0]?.attributes?.slug ?? null
    const publishedAt = article[0].attributes.publisedAt ?? null
    const authorName = article[0].attributes?.author?.data?.attributes?.name ?? null
    const authorImgUrl = article[0].attributes?.author?.data?.attributes?.image?.data?.attributes?.url ?? null
    const body = article[0]?.attributes?.body ?? 'Content not available';
    const readingTime = Math.round((body.split(" ").length / 200));
    const htmlBodyContent = md.render(body);
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    property="og:title"
                    content={title}
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`https://www.qidigital.com/article/${slug}/`}>
                <meta
                    property="og:image"
                    content={imgUrl}
                />

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@QiDigitalLtd"/>
                <meta
                    name="twitter:title"
                    content={title}
                />
                <meta
                    name="twitter:description"
                    content={summary}
                />
                <meta
                    name="twitter:image"
                    content={imgUrl}
                />
            </Head>

            <div className="relative h-[70px]">
                <MainTop transitionHeight={0}/>
            </div>

            <div className="font-SourceSansPro max-w-[700px] mx-auto px-5 mt-[46px] lg:px-0">
                <div className="font-semibold mb-3 ml-0.5 text-[#c3bdad] text-base">
                    Category:{" "}
                    <span className="text-black font-extrabold">
            {category}
          </span>
                </div>

                <div className="text-[32pt] md:text-[36pt] font-CormorantGaramond leading-tight">
                    {title}
                </div>

                <div
                    className="mt-8 mb-7 sm:flex justify-between border-b border-t border-neutral-300 sm:py-3 py-5 px-2">
                    <div className="flex">
                        <img
                            src={authorImgUrl}
                            className="rounded-full w-12 h-12 bg-neutral-100 mr-3"
                        />

                        <div>
                            <h2 className="font-normal text-lg leading-6">
                                {authorName}{" "}
                                <span className="text-neutral-400">
                                - {moment(publishedAt, 'YYYY-MM-DD').format('D MMM YY')}
                                </span>
                            </h2>

                            <h3 className="text-[#9b0a69]">{`${readingTime} mins`}</h3>
                        </div>
                    </div>
                </div>
                <img src={imgUrl}/>

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

const strapiEndpoint = process.env.STRAPI_ENDPOINT

export async function getStaticProps({params}) {

    const postsRes = await axios.get(`${strapiEndpoint}/api/articles?filters[slug][$eq]=${params.slug}&populate[author][populate][0]=image&populate[image]=*`);

    return {
        props: {
            article: postsRes.data.data
        }
    }
}

export async function getStaticPaths() {
    const articleRes = await axios.get(`${strapiEndpoint}/api/articles?sort[1]=publisedAt%3Aasc`);

    const paths = articleRes.data.data.map((article) => {
        return {params: {slug: article.attributes.slug}}
    });

    return {
        paths: paths,
        fallback: false
    }
}


