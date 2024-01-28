import React from "react";


function Newsletter(){
    return <div className="row">
         <div class="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" class="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
              <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
    </div>
}

export default Newsletter;