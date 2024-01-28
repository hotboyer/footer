import React from "react";
import Section from "./Section";
import Newsletter from "./Newsletter";
import Media from "./Media";

function Footer(){
    return <div class="container">
    <footer class="py-5">
      <div class="row">
        
  <Section />
  <Newsletter />
  <Media />
      </div>
    </footer>
  </div>
}

export default Footer;