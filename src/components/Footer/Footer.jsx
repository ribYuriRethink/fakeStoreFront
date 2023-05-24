import "./Footer.css";
import { Infos } from "./Infos";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <footer className="footer display_flex">
        <div className="container_footer display_flex">
          <div className="brand display_flex">
            <h3>Greenmind</h3>
            <p>We help you find your dream plant</p>
            <div className="social_brand display_flex">
              <button type="button" className="social_button">
                <GrFacebookOption className="social_icon" />
              </button>
              <button type="button" className="social_button">
                <AiFillInstagram className="social_icon" />
              </button>
              <button type="button" className="social_button">
                <BsTwitter className="social_icon" />
              </button>
            </div>
          </div>

          <div className="container_infos">
            <Infos
              className="info_component"
              title="Information"
              text1="About"
              text2="Product"
              text3="Blog"
            />
            <Infos
              className="info_component"
              title="Company"
              text1="Community"
              text2="Career"
              text3="Our story"
            />
            <Infos
              className="info_component"
              title="Contact"
              text1="Getting Started"
              text2="Pricing"
              text3="Resources"
            />
          </div>
        </div>

        <p>2023 all Right Reserved Term of use GREENMIND</p>
      </footer>
    </>
  );
};
