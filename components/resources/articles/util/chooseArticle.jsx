// Articles
import UsingCryptoPaymentsToBoostBusinessPerformance from "../UsingCryptoPaymentsToBoostBusinessPerformance";
import QiWelcomesDrMonomitaNandy from "../QiWelcomesDrMonomitaNandy";
import WhatIsBlockchainTechnology from "../WhatIsBlockchainTechnology";
import TheFutureOfECommerceInADecentralisedWorld from "../TheFutureOfECommerceInADecentralisedWorld";
import AnOverviewOfTheBitcoinLightningNetwork from "../AnOverviewOfTheBitcoinLightningNetwork";
import QiDigitalPartnersWithBrunelUniversityAIEdgeLab from "../QiDigitalPartnersWithBrunelUniversityLondonsAIEdgeLabForBlockchainInnovation";
import WhyAcceptingCryptoIsAMassivePowerPlayForMerchants from "../WhyAcceptingCryptoIsAMassivePowerPlayForMerchants";
import QiDigitalJoinsSelfregulatingTradeGroupCryptoUK from "../QiDigitalJoinsSelfregulatingTradeGroupCryptoUK";
import WhatIsWeb25AndWhereDoWeGoFromHere from "../WhatIsWeb25AndWhereDoWeGoFromHere";
const chooseArticle = (name) => {
  switch (name) {
    case "using-crypto-payments-to-boost-business-performance":
      return UsingCryptoPaymentsToBoostBusinessPerformance;
      break;
    case "qi-welcomes-dr-monomita-nandy":
      return QiWelcomesDrMonomitaNandy;
      break;
    case "what-is-blockchain-technology":
      return WhatIsBlockchainTechnology;
      break;
    case "the-future-of-ecommerce-in-a-decentralised-world":
      return TheFutureOfECommerceInADecentralisedWorld;
      break;
    case "an-overview-of-the-bitcoin-lightning-network":
      return AnOverviewOfTheBitcoinLightningNetwork;
      break;
    case "qi-digital-partners-with-brunel-university-ai-edge-lab":
      return QiDigitalPartnersWithBrunelUniversityAIEdgeLab;
      break;
    case "why-accepting-crypto-is-a-massive-power-play-for-merchants-everywhere":
      return WhyAcceptingCryptoIsAMassivePowerPlayForMerchants;
      break;
    case "qi-digital-joins-self-regulating-trade-group-cryptouk":
      return QiDigitalJoinsSelfregulatingTradeGroupCryptoUK;
      break;
    case "what-is-web-25-and-where-do-we-go-from-here":
      return WhatIsWeb25AndWhereDoWeGoFromHere;
      break;
    default:
      return null;
      break;
  }
};

export default chooseArticle;
