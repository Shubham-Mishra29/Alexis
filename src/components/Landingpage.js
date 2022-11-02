import React from 'react'
import AdditionalServices from './AdditionalServices';
import Carousel from "./Carousel";
import Clients from './Clients';
import Content4 from './Content4';
import CoreCapabilities from './CoreCapabilities';
import { countries } from "./Data";
import Footer from './Footer';
import Map from './Map';
import Quotes from './Quotes';
import WhatDoYou from './WhatDoYou';
import WhatOurClientSays from './WhatOurClientSays/WhatOurClientSays';
import WhoWeAre from "./WhoWeAre";

const Landingpage = () => {
  return (
    <div>
      <Carousel images={countries} />
      <WhoWeAre/>
      <Content4/>
      <Quotes/>
      <CoreCapabilities/>
      <AdditionalServices/>
      <WhatDoYou/>
      <WhatOurClientSays/>
      <Clients/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Landingpage