import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
    return(
        <nav className="footer">
            <div className="footer-content">
                <div className="copyright_text">
                © 2023 OTM, Inc. One to Many, and any associated logos are trademarks, service marks, and/or registered trademarks of OTM, Inc.
                </div>
            </div>
        </nav>
    );
}

export default Footer;