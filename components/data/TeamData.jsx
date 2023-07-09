import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Import images.
const Mann =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/mann_team.jpg";
const MannLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/mann_lazy.jpg";
const Graham =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/graham_grey.jpg";
const GrahamLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/graham_grey_lazy.jpg";
const Sanjay =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/sanjay.jpg";
const SanjayLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/sanjay_lazy.jpg";
const Natalie =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/natalie.jpg";
const NatalieLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/natalie_lazy.jpg";
const Philip =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/philip.jpg";
const PhilipLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/philip_lazy.jpg";
const Ben =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/ben.jpg";
const BenLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/ben_lazy.jpg";
const Brunel =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/brunel.jpg";
const BrunelLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/brunel_lazy.jpg";
const Co =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/co-innovate.jpg";
const CoLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/co-innovate_lazy.jpg";
const Enterprise =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/enterprise_nation.jpg";
const EnterpriseLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/enterprise_nation_lazy.jpg";
const Gov =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/hm_government.jpg";
const GovLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/hm_government_lazy.jpg";
const HSBC = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/hsbc.jpg";
const HSBCLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/hsbc_lazy.jpg";
const Worldpay =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/worldpay.jpg";
const WorldpayLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/worldpay_lazy.jpg";
const Global =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/global.jpg";
const GlobalLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/global_lazy.jpg";
const Cashflows =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/cashflows.jpg";
const CashflowsLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/cashflows_lazy.jpg";
const Pollinate =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/pollinate.jpg";
const PollinateLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/pollinate.jpg";
const HBR = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/hbr.jpg";
const HBRLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/hbr_lazy.jpg";
const Barclays =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/barclays.jpg";
const BarclaysLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/barclays.jpg";
const Lloyds =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/lloyds.jpg";
const LloydsLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/lloyds_lazy.jpg";
const Experian =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/experian.jpg";
const ExperianLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/experian_lazy.jpg";
const TD =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/tradedoubler.jpg";
const TDLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/tradedoubler_lazy.jpg";
const TBG = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/tbg.jpg";
const TBGLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/tbg_lazy.jpg";
const Scale = "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/scale.jpg";
const ScaleLazy =
  "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/scale_lazy.jpg";

const TeamData = [
  <div>
    <div className="lg:mx-24 md:mx-16 text-neutral-800 font-base">
      <div className="lg:flex mx-auto max-w-[900px]">
        <div className="mt-2 mb-4 flex-none w-[260px] h-[260px]">
          <LazyLoadImage
            src={Mann}
            placeholdersrc={MannLazy}
            alt={"Mann Matharu"}
            effect="blur"
          />
        </div>

        <div className="xl:pr-16 lg:ml-8 text-black">
          <div className="text-[35pt] mt-5 md:mt-0 font-CormorantGaramond leading-none">
            Mann Matharu
          </div>
          <div className="mb-3 text-2xl mt-3 font-CormorantGaramond font-bold">
            Founder & Chief Executive Officer
          </div>
          <p className="text-sm">
            British-born entrepreneur, Mann is a future technologist and the
            visionary behind Qi. He is also the chief architect of Qi’s core
            platform and service. He has over 22 years’ experience in the world
            of digital development and transformation and has supported hundreds
            of startups/SMLEs over the years.
          </p>
          <p className="text-sm mt-3">
            He currently holds a Board Advisory role and is a guest lecturer at
            Brunel University London (Business School) and is a Brand Ambassador
            with co-innovate. In addition he volunteers as a Mentor with HM
            Government’s ‘Help to Grow’ initiative via Enterprise Nation to
            support businesses start, grow and scale.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-around gap-8 mx-auto max-w-[900px] mt-6 pt-4 border border-t-neutral-400 border-l-0 border-r-0 border-b-0 mt-3">
        <div>
          <LazyLoadImage
            src={Brunel}
            placeholdersrc={BrunelLazy}
            alt={"Brunel logo"}
            effect="blur"
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
          />
        </div>
        <div>
          <LazyLoadImage
            src={Co}
            placeholdersrc={CoLazy}
            alt={"Co-innovate logo"}
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            effect="blur"
          />
        </div>
        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Enterprise}
            placeholdersrc={EnterpriseLazy}
            alt={"Enterprise Nation logo"}
            effect="blur"
          />
        </div>
        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Gov}
            placeholdersrc={GovLazy}
            alt={"HM Government logo"}
            effect="blur"
          />
        </div>
      </div>
    </div>
  </div>,
  <div>
    <div className="lg:mx-24 md:mx-16 text-neutral-800 font-base">
      <div className="lg:flex mx-auto max-w-[900px]">
        <div className="mt-2 mb-4 flex-none w-[260px] h-[260px]">
          <LazyLoadImage
            src={Graham}
            placeholdersrc={GrahamLazy}
            alt={"Graham Umney"}
            effect="blur"
          />
        </div>

        <div className="xl:pr-16 lg:ml-8 text-black">
          <div className="text-[35pt] mt-5 md:mt-0 font-CormorantGaramond leading-none">
            Graham Umney
          </div>
          <div className="mb-3 text-2xl mt-3 font-CormorantGaramond font-bold">
            Chief Commercial Officer
          </div>
          <p className="text-sm">
            A banker by trade, Graham has built his reputation as a Payments
            industry professional with over 35 years’ experience. Renowned for
            his commercial insight, business and legal knowledge, Graham joined
            Qi to form a strong partnership with Mann as one of the core members
            of the leadership team.
          </p>
          <p className="text-sm mt-3">
            With an extensive CV drawn from large corporate names such as HSBC,
            Worldpay, and Global Payments, and a host of challenger and nimble
            ‘payments’ start up businesses, Graham acts as consultant CCO
            heading up the commercial arm of Qi.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-around gap-8 mx-auto max-w-[900px] mt-6 pt-4 border border-t-neutral-400 border-l-0 border-r-0 border-b-0 mt-3">
        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={HSBC}
            placeholdersrc={HSBCLazy}
            alt={"HSBC logo"}
            effect="blur"
          />
        </div>

        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Worldpay}
            placeholdersrc={WorldpayLazy}
            alt={"Worldpay logo"}
            effect="blur"
          />
        </div>

        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Global}
            placeholdersrc={GlobalLazy}
            alt={"Globalpayments logo"}
            effect="blur"
          />
        </div>
      </div>
    </div>
  </div>,

  <div>
    <div className="lg:mx-24 md:mx-16 text-neutral-800 font-base">
      <div className="lg:flex mx-auto max-w-[900px]">
        <div className="mt-2 mb-4 flex-none w-[260px] h-[260px]">
          <LazyLoadImage
            src={Sanjay}
            placeholdersrc={SanjayLazy}
            alt={"Sanjay Agarwala"}
            effect="blur"
          />
        </div>

        <div className="xl:pr-16 lg:ml-8 text-black">
          <div className="text-[35pt] mt-5 md:mt-0 font-CormorantGaramond leading-none">
            Sanjay Matos Agarwala
          </div>
          <div className="mb-3 text-2xl mt-3 font-CormorantGaramond font-bold">
            Head of Finance
          </div>
          <p className="text-sm">
            Sanjay is a Certified Chartered Accountant, Finance and Payments
            professional with world-leading understanding of payments economics
            and the acquiring ecosystem. Sanjay has worked at payments companies
            Worldpay, Pollinate International, and Cashflows in senior roles.
            His experience includes platform design and architecture having
            worked on the various platforms of the above, as well as data
            management, and both commercial finance and financial accounting.
          </p>
          <p className="text-sm mt-3">
            Prior to his payments career, Sanjay worked within Investment
            Banking, (Power Sector M&A) and joined the Qi team as Head of
            Finance.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-around gap-8 mx-auto max-w-[900px] mt-6 pt-4 border border-t-neutral-400 border-l-0 border-r-0 border-b-0 mt-3">
        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Worldpay}
            placeholdersrc={WorldpayLazy}
            alt={"Worldpay logo"}
            effect="blur"
          />
        </div>

        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Cashflows}
            placeholdersrc={CashflowsLazy}
            alt={"Cashflows logo"}
            effect="blur"
          />
        </div>

        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Pollinate}
            placeholdersrc={PollinateLazy}
            alt={"Pollinate logo"}
            effect="blur"
          />
        </div>
      </div>
    </div>
  </div>,

  <div>
    <div className="lg:mx-24 md:mx-16 text-neutral-800 font-base">
      <div className="lg:flex mx-auto max-w-[900px]">
        <div className="mt-2 mb-4 flex-none w-[260px] h-[260px]">
          <LazyLoadImage
            src={Natalie}
            placeholdersrc={NatalieLazy}
            alt={"Natalie Cooper"}
            effect="blur"
          />
        </div>

        <div className="xl:pr-16 lg:ml-8 text-black">
          <div className="text-[35pt] mt-5 md:mt-0 font-CormorantGaramond leading-none">
            Natalie Cooper
          </div>
          <div className="mb-3 text-2xl mt-3 font-CormorantGaramond font-bold">
            Head of Communications
          </div>
          <p className="text-sm">
            Storyteller, wordsmith & creative brand guardian evangelist. A
            successful, award-winning investigative business journalist, editor,
            content marketer and Head of Communications for over 20 years.
          </p>
          <p className="text-sm mt-3">
            Natalie has travelled the world interviewing leaders, entrepreneurs,
            and visionaries, led creative teams and built global brands in the
            B2B publishing space, having worked internationally in the US, Asia,
            Europe and Australia.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-around gap-8 mx-auto max-w-[900px] mt-6 pt-4 border border-t-neutral-400 border-l-0 border-r-0 border-b-0 mt-3">
        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={HBR}
            placeholdersrc={HBRLazy}
            alt={"Harvard Business Review logo"}
            effect="blur"
          />
        </div>
      </div>
    </div>
  </div>,

  <div>
    <div className="lg:mx-24 md:mx-16 text-neutral-800 font-base">
      <div className="lg:flex mx-auto max-w-[900px]">
        <div className="mt-2 mb-4 flex-none w-[260px] h-[260px]">
          <LazyLoadImage
            src={Philip}
            placeholdersrc={PhilipLazy}
            alt={"Philip Hall"}
            effect="blur"
          />
        </div>

        <div className="xl:pr-16 lg:ml-8 text-black">
          <div className="text-[35pt] mt-5 md:mt-0 font-CormorantGaramond leading-none">
            Philip Hall
          </div>
          <div className="mb-3 text-2xl mt-3 font-CormorantGaramond font-bold">
            Senior Commercial Partner Manager
          </div>
          <p className="text-sm">
            Philip brings with him over 30 years Banking and Payments sector
            experience. Most recently he served as a Relationship Manager at
            Barclaycard working with strategic customers requiring omni-channel
            payment solutions. Prior to that Philip was Corporate Account
            Director at Worldpay, managing a portfolio of customers with card
            turnover of up to £650m per annum. He also spent 4 years at HSBC
            Merchant Services where he was Head of Corporate Relationships.
          </p>
          <p className="text-sm mt-3">
            Philip joined Qi Digital as their Commercial Partner Manager in
            January 2022. In his spare time, Philip is a keen cyclist and
            supports his local TimeBank by offering his time and skills in DIY
            and Gardening to help people in his local community.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-around gap-8 mx-auto max-w-[900px] mt-6 pt-4 border border-t-neutral-400 border-l-0 border-r-0 border-b-0 mt-3">
        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Barclays}
            placeholdersrc={BarclaysLazy}
            alt={"Barclays logo"}
            effect="blur"
          />
        </div>

        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Worldpay}
            placeholdersrc={WorldpayLazy}
            alt={"Worldpay logo"}
            effect="blur"
          />
        </div>

        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Global}
            placeholdersrc={GlobalLazy}
            alt={"Global logo"}
            effect="blur"
          />
        </div>

        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Lloyds}
            placeholdersrc={LloydsLazy}
            alt={"Lloyds logo"}
            effect="blur"
          />
        </div>
      </div>
    </div>
  </div>,

  <div>
    <div className="lg:mx-24 md:mx-16 text-neutral-800 font-base">
      <div className="lg:flex mx-auto max-w-[900px]">
        <div className="mt-2 mb-4 flex-none w-[260px] h-[260px]">
          <LazyLoadImage
            src={Ben}
            placeholdersrc={BenLazy}
            alt={"Ben Cole"}
            effect="blur"
          />
        </div>

        <div className="xl:pr-16 lg:ml-8 text-black">
          <div className="text-[35pt] mt-5 md:mt-0 font-CormorantGaramond leading-none">
            Ben Cole
          </div>
          <div className="mb-3 text-2xl mt-3 font-CormorantGaramond font-bold">
            Head of Product
          </div>
          <p className="text-sm">
            Ben is a highly experienced Product Owner with a deep understanding
            of consumer behaviour online. He has worked at a strategic level for
            global brands in Finance and Retail, including Capital One,
            Aldermore Bank, Swiftcover, Nike, Carphone Warehouse, Vodafone and
            more. Ben's career spans Design, Marketing and Technology.
          </p>
          <p className="text-sm mt-3">
            At the intersection of these three disciplines lies his unique
            perspective on the development of new tech products and services.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-around gap-8 mx-auto max-w-[900px] mt-6 pt-4 border border-t-neutral-400 border-l-0 border-r-0 border-b-0 mt-3">
        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Experian}
            placeholdersrc={ExperianLazy}
            alt={"Experian logo"}
            effect="blur"
          />
        </div>

        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={TD}
            placeholdersrc={TDLazy}
            alt={"TradeDoubler logo"}
            effect="blur"
          />
        </div>

        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={Scale}
            placeholdersrc={ScaleLazy}
            alt={"Scale logo"}
            effect="blur"
          />
        </div>

        <div>
          <LazyLoadImage
            wrapperClassName="mt-5 h-[60px] cursor-pointer"
            src={TBG}
            placeholdersrc={TBGLazy}
            alt={"TBG Digital logo"}
            effect="blur"
          />
        </div>
      </div>
    </div>
  </div>,
];

export default TeamData;
