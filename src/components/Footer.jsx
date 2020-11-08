import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
library.add(fab);
export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Skyes06"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} size="5x" />
            </a>
          </div>
          <div className="col-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://web.facebook.com/UzumakiAzis7/"
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} size="5x" />
            </a>
          </div>
          <div className="col-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/skyespirates"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="5x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
