import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <img
        className="footer__logo"
        src="src/assets/skiddle-logo-footer.png"
        alt=""
      />
      <div className="footer__events">
        <h1 className="footer__events--link">Gigs</h1>
        <h1 className="footer__events--link">Clubs</h1>
        <h1 className="footer__events--link">Festivals</h1>
        <h1 className="footer__events--link">Things to do</h1>
      </div>
      <p className="footer__quote">
        “On your side since 2001, because we believe true fans deserve a fairer
        and smarter way to discover events they love.”
      </p>
      <h1 className="footer__heading">why use Skiddle?</h1>
      <ul className="footer__list">
        <li className="footer__list--point">Rated 5 stars on <span className="point__green"> reviews.co.uk</span> </li>
        <li className="footer__list--point">Official Primary Ticket outlet</li>
        <li className="footer__list--point">Over 17 million tickets sold</li>
        <li className="footer__list--point">Established 2001</li>
        <li className="footer__list--point">
          Over 4.3 million happy customers
        </li>
        <li className="footer__list--point">Support the <span className="point__green"> Fanfair Alliance</span> </li>
        <li className="footer__list--point">
          Skiddle Supports - <span className="point__green">Together, we are More Than A Ticket</span>
        </li>
      </ul>

      <div className="footer__more-info">
        <div className="more-info__group">
          <p className="more-info__group--link">Home</p>
          <p className="more-info__group--link">Terms and Conditions</p>
          <p className="more-info__group--link">Privacy</p>
          <p className="more-info__group--link">Cookie Policy</p>
        </div>

        <div className="more-info__group">
          <p className="more-info__group--link">About us</p>
          <p className="more-info__group--link">Order history / Print tickets</p>
          <p className="more-info__group--link">Contact us</p>
          <p className="more-info__group--link">Jobs</p>
        </div>

        <div className="more-info__group">
          <p className="more-info__group--link">Website Status</p>
          <p className="more-info__group--link">Developer API</p>
          <p className="more-info__group--link">Ticket affiliate program</p>
          <p className="more-info__group--link">Become a skiddle ticket rep</p>
        </div>

        <div className="more-info__group">
          <p className="more-info__group--link">Sell tickets online</p>
          <p className="more-info__group--link">Skiddle FAQs</p>
          <p className="more-info__group--link">Sell tickets on facebook</p>
          <p className="more-info__group--link">Sell festival tickets</p>
        </div>
      </div>

      <div className="footer__social-media">
        <img className="footer__social-media--links" src="src/assets/social-media-logos/twitter-logo.png" alt="twitter logo" />
        <img className="footer__social-media--links" src="src/assets/social-media-logos/spotify-white-icon.webp" alt="Spotify logo" />
        <img className="footer__social-media--links" src="src/assets/social-media-logos/mixcloud-logo.png" alt="Mixcloud logo" />
        <img className="footer__social-media--links" src="src/assets/social-media-logos/instagram-logo.png" alt="Instagram logo" />
        <img className="footer__social-media--links" src="src/assets/social-media-logos/facebook-logo.jpeg" alt="Facebook logo" />
      </div>

      <div className="footer__page-split"></div>

      <p className="footer__copyright" >© 2001 - 2024 Skiddle Ltd | Skiddle is a registered trademark | ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
