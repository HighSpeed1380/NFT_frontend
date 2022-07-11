import React from "react";

export default function Connect_wallet() {
  return (
    <div>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section id="subheader" className="text-light">
          <div className="center-y relative text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1>Wallet</h1>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb30">
                <a className="box-url">
                  <span className="box-url-label">Most Popular</span>
                  <img
                    src="assets/images/wallet/1.png"
                    alt=""
                    className="mb20"
                  />
                  <h4>Metamask</h4>
                  <p>
                    Start exploring blockchain applications in seconds. Trusted
                    by over 1 million users worldwide.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
