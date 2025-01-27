import React from 'react';
import networking_layers from '../images/networking_layers.jpg';
import stack from '../images/stack.jpg';


const component = () => (

    <div className='chapter'>


    
<h2 id='ch2'>2. A fully autonomous data network</h2>

     

        <p>To enable Secure Access For Everyone, SAFE is an &lsquo;autonomous data network&rsquo;. This means it is capable of networking and storage tasks like managing and optimizing workloads, routing, failover, authentication, access control and others without any human intervention. Opportunities for powerful groups to aggregate control or forbid access are minimized.</p>

       

        <p>SAFE infrastructure is not defined by a set of federated servers, VMs, owned storage locations or identifiable nodes - unlike the current Internet. Unlike blockchains, it is designed to store and manage live data rather than pointers to data and to transact in real-time. And unlike BitTorrent, it does not rely on centralized components of the Web to locate and track files.</p>

   

        <div className="Full-width-pic" align="center">

            <img className="Img" src={networking_layers} alt="Networking layers" align="center" />
        </div>

        <p width="80%" align="center" ><em>The SAFE Network complements three of the seven networking layers in the OSI model for improved security, privacy and autonomy.</em></p>

   

        <p>Many features in the SAFE Network are innovations, but there is no intention to reinvent the wheel. It builds on existing decentralized technologies such as BitTorrent and Kademlia and is based on the physical and data infrastructure of the Internet. Early development of SAFE happened in parallel with blockchain, so it has taken an alternative route to solve the decentralization puzzle.</p>

        <p>The SAFE Network can be seen as a secure, encrypted, intelligent layer that sits on top of the current Internet, complementing the top three layers in the OSI model and adding resources in the application layer. This enables secure, anonymous, decentralized data storage and networking.</p>

        <p>Going a little deeper, SAFE introduces some changes to the networking and application layers as shown below.</p>

    

        <p>The SAFE Network core libraries are written in the Rust programming language. The diagram below shows the basic hierarchy.</p>

        <div className="Full-width-pic" align="center">

            <img className="Img" src={stack} alt="Stack"  align="center" />
        </div>

         
 

        <h3>Crust</h3>

        <p>Crust (Connections in Rust) is a low-level networking library that is optimized for peer-to-peer connections and data transportation. It supports multiple protocols allowing ordinary PCs and smartphones to connect to each other and is cryptographically secure. In tests involving the community Crust successfully connected machines from all over the world (including China) with a high rate of success (over 20,000 attempted connections from 39 countries in a community test run in 2018).</p>

        <p>Experiments with Quinn, a Rust implementation of the QUIC transport protocol, are ongoing. It is likely that Quinn will be used to augment or even replace Crust in the future.</p>

        <h3>Routing</h3>

        <p>On top of Crust sits Routing. It is the overlay networking and routing layer which forms the &lsquo;brain&rsquo; of the SAFE Network. Its purpose is to form a decentralized Internet and route information within it.</p>

        <p>Routing is based on an algorithm that extends Kademlia DHT routing (see Chapter 4). It uses 32-byte XOR addresses to locate data on the network. It is mathematically guaranteed that messages can be routed from any part of the network to any other end.</p>

        <p>Routing works purely on the terms of Group Consensus (see Chapter 4). We don&rsquo;t trust a single entity, only a group decision with eventual consistency. In order to come to this eventual consistency, the routing layer uses the consensus mechanism PARSEC (See Chapter 7).</p>

        <p>Vaults and Clients are the way that users interact with the Network, either by providing resources in return for payment or by storing data and browsing the SAFE web. They are discussed further in the next chapter.</p>

        <p>All SAFE Network code is open source.</p>

       <h3>Tell me more&hellip;</h3>

        <p><a href="https://hub.safedev.org/core_technology/"> Core Technology (SAFE Network DevHub)</a></p>

        <p><a href="https://github.com/maidsafe/rfcs/blob/master/text/0043-async-safe-core/0043-async-safe-core.md"> SAFE core API (Github)</a></p>

    <p><a href="https://github.com/maidsafe/crust"> Crust- Reliable p2p network connections in Rust with NAT traversal (Github)</a></p>

        <p><a href="https://medium.com/safenetwork/the-successful-conclusion-of-the-crust-tests-29ed4a210214"> The Successful Conclusion of the Crust Tests</a></p>

    <p><a href="https://docs.rs/quinn/0.2.0/quinn/"> Quinn - QUIC protocol in Rust</a></p>

        <p>&nbsp;</p>

     
      
        
                
    </div>

);

export default component;