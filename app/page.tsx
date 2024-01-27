import "./globals.css";
export default function Home() {
  return (
    <body>
      <header>
        <img alt="" src="" />
      </header>
      <div className="header-video-container">
        <img alt="tarc logo" src="/logos/tarc-fitness-logo.png" />
      </div>
      <div className="brand-grid-display">
        <a className="square" href="" target="_blank">
          <div className="grid-box coming-soon">
            <img alt="Rotiform" src="/logos/coming-soon.svg" />
          </div>
        </a>
        <a className="square" href="" target="_blank">
          <div className="grid-box coming-soon">
            <img alt="JP Insider" src="/logos/coming-soon.svg" />
          </div>
        </a>
        <a className="square" href="" target="_blank">
          <div className="grid-box coming-soon">
            <img
              alt="APR by JP Performance"
              src="/logos/coming-soon.svg"
            />
          </div>
        </a>
        <a className="square" href="/" target="_blank">
          <div className="grid-box coming-soon">
            <img alt="Carffee" src="/logos/coming-soon.svg" />
          </div>
        </a>
      </div>

      <div className="information-flex-display">
        <div className="information-contact">
          <a href="mailto:Info@tarc-fitness.de" target="_blank">
            <div className="contact-button-2">
              <div className="top-line">Kontaktier uns</div>
              <div className="bottom-line"></div>
            </div>
          </a>
        </div>
      </div>
      
      <div className="social-media-icons">
        <a href="https://instagram.com/tarc.fitness" target="_blank">
          <div className="instagram">
            <img alt="Instagram" src="/icons/instagram-icon.svg" />
          </div>
        </a>
      </div>
      
    </body>
  );
}
