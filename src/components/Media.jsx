import React from "react";
import instagram from "../icons/instagram-logo.svg"
import facebook from "../icons/logo-facebook.svg"
import twitter from "../icons/twitter-social-logotype.svg"


function Media(){
    return <div>
    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="bing"><img src={instagram} width="24" height="24" alt="instagram" /></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="bing"><img src={facebook} width="24" height="24" alt="facebook" /></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="bing"><img src={twitter} width="24" height="24" alt="twitter" /></a></li>
      </ul>
    </div>
    </div>
}

export default Media;
