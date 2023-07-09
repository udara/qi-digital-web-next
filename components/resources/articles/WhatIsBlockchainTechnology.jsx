const WhatIsBlockchainTechnology = [
  {
    link: "what-is-blockchain-technology",
    image:
      "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/blockchanin.jpg",
    title: "What Is Blockchain Technology?",
    author: "Naya Kaur",
    authorThumb:
      "https://qi-web-assets.nyc3.cdn.digitaloceanspaces.com/team/mann_team.jpg",
    category: "Blockchain",
    readTime: "3 min read",
    createdAt: "3 Jan 2023",
    summary:
      "Blockchain technology is more or less taking over the digital world. We can all agree that digital technology is growing rapidly and the blockchain itself has the potential to disrupt almost every industry, not just financial – which is why blockchain is a real big deal.",

    body: (
      <>
        <p className="paragraph">
          To help simplify the understanding of blockchain technology, we’ve
          created a step-to-step guide that explains all the fundamentals and
          distinctive characteristics of blockchain. By the end of this article,
          we’re hoping you will have enough knowledge on what blockchain
          technology is and how it works.
        </p>
        <p className="header">What Is Blockchain Technology?</p>
        <p className="paragraph">
          Blockchain technology is defined as an “open, censorship resistant
          method for managing records by the public”. It is considered to be a
          solution for centralised organisations and their technological
          infrastructure as it is used as a ledger (a database) which is
          maintained by the public. This ledger is distributed across multiple
          networks on the Internet.
        </p>
        <p className="paragraph">
          Imagine a chain of blocks that are all connected in a chain-like
          format. Each ‘block’ contains some form of data and is secured using
          cryptography. You could think of this chain as a database that stores
          information. By default, blockchain technology doesn’t modify data so
          no data gets altered or deleted.
        </p>
        <p className="header">
          What are the main characteristics of Blockchain Technology?
        </p>
        <p className="paragraph">
          There are four main characteristics in blockchain technology that we
          must fully understand before we learn how information is passed on
          from one point to another. Blockchain technology consists of:
        </p>
        <p className="paragraph">
          1. Peer-to-peer networks (P2P): P2P networks consist of a group of
          devices that collectively store and share files. Every user on the
          network is called a “node” and works individually to exchange
          cryptocurrencies/digital currencies via a distributed network. P2P
          networks also help to provide a shared and trusted ledger of
          transactions, where immutable and encrypted copies of information are
          stored on every node in the network. As there are no intermediaries
          involved, it makes the network fault tolerant and collusion resistant.
        </p>
        <p className="paragraph">
          2. Cryptography: Cryptography is the study and practice of keeping
          secret information away from adversaries. One of the reasons
          blockchain technology is so secure is because of cryptography as it
          prevents third parties from viewing private data through encryption.
          This is controlled by public and private keys, which is explained
          further in this article.
        </p>
        <p className="paragraph">
          3. Consensus algorithms: A consensus algorithm is a common agreement
          between all the nodes about the state of the ledger. A consensus
          algorithm helps to achieve reliability in the blockchain network and
          establish trust between unknown peers in a distributed computing
          environment. This could include coming to an agreement or
          collaboration to test the validity of information.
        </p>
        <p className="paragraph">
          4. Rewards and punishment: Rewards are given to people who help
          maintain a good record and reputation whilst working alongside others
          to add blocks to the chain. This reward is given as a coin/token, so
          whenever a consensus is reached, people are given a form of digital
          currency (e.g. Bitcoin, Litecoin and Ethereum). However, if people try
          to manipulate the system, they will be punished by losing their
          computational power and their coins. This “rewards and punishment
          system” is supported psychologically and plays a role subconsciously
          as it changes the idea of having to follow something to following
          something because it works in your best interest. This system is
          derived from the “game theory”, which is the study of strategic
          decision making, and people are only now discovering how powerful it
          is in creating decentralised networks. The game theory suggests that
          nodes should work together and promote teamwork and honesty as it will
          provide the best outcome and highest level of rewards.
        </p>
        <p className="header">How does Blockchain Technology work?</p>
        <p className="paragraph">
          {" "}
          We now know that, blockchain is a distributed and decentralised
          network that provides immutability, security, and transparency. There
          is no central authority present to validate and verify the
          transactions, yet every transaction in the blockchain is considered to
          be completely secured and verified. This is possible because of the
          presence of the consensus protocol which is a core part of any
          blockchain network. We also know that people receive rewards and
          punishments depending on whether they chose to work together or not.
          Now the big question is “how do these characteristics link together in
          the blockchain?”.
        </p>
        <p className="paragraph">
          Firstly, blockchain stores all the information in a ledger system. Any
          kind of data exchange is called a “transaction”. As mentioned earlier,
          every single user on the network is called a “node,” and they get a
          copy of the updated ledger. Usually, a user will request for a
          transaction in the network and they will get two keys, either a public
          or private. The user can only transact using a private key and use a
          public key to send money to a person. After the request, a block with
          all the information of the transaction gets created. In reality,
          everything in the block is encrypted to promote security. Once it’s
          created, it will be broadcasted to all the nodes in the network. In
          blockchain technology you need verification from other nodes that what
          you claimed is valid, so the other nodes use a consensus algorithm to
          validate the information. Once your block gets validated, the block
          will get a spot on the chain and everyone is rewarded.
        </p>
      </>
    ),
  },
];

export default WhatIsBlockchainTechnology;
