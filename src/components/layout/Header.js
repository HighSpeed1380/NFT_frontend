import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Header() {
  return (
    <header className="transparent scroll-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  <div id="logo">
                    <a>
                      <img alt="" src="/assets/images/logo-6.jpg" />
                    </a>
                  </div>
                </div>
                <div className="de-flex-col">
                  <input
                    id="quick_search"
                    className="xs-hide style-1 form-element"
                    name="quick_search"
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </div>
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <a href="/">
                      Home<span></span>
                    </a>
                  </li>
                  <li>
                    <a>
                      Countries<span></span>
                    </a>
                  </li>
                  <li>
                    <a>
                      Types<span></span>
                    </a>
                  </li>
                </ul>

                <div className="menu_side_area">
                  <Link to="/connect_wallet">
                    <a className="btn-main btn-wallet">
                      <i className="icon_wallet_alt"></i>
                      <span>Connect Wallet</span>
                    </a>
                  </Link>
                  <span id="menu-btn"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
