// MainArea 컴포넌트

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

// 메인 css
// import './css/main.css';

export function MainArea1() {
  


  return (
    <>
      <section className="main inbox video-box">
        <video id="mvid" src="./images/videoplayback2.mp4" autoPlay loop muted></video>
        <div className="ep ep1 first-bx">
          <div className="flex-box">
            <div className="col-12 ep1-1"></div>
            <div className="partbox col-12 ep1-2">
              <h1 className="ani-text">This is</h1>
            </div>
            <div className="partbox col-12 ep1-2">
              <h1>Our World</h1>
            </div>
            <div className=" col-3 ep1-3">
              <h2>A JOURNEY BY:</h2>
            </div>
            <div className=" col-3 ep1-3">
              <h2>HILTON</h2>
            </div>
            <div className=" col-3 ep1-3">
              <h2>CROCKFORDS</h2>
            </div>
            <div className=" col-3 ep1-3">
              <h2>CONRAD</h2>
            </div>
            <div className="partbox col-4 ep1-4">
              <h1>
                © 2023 Expedia, Inc., an expedia group company. All Rights
                Reserved
              </h1>
            </div>
            <div className="partbox col-4 ep1-4">
            <FontAwesomeIcon icon={faTiktok} fontSize={'25px'} className="fam" />
            <FontAwesomeIcon icon={faInstagram} fontSize={'25px'} className="fam" />
            <FontAwesomeIcon icon={faYoutube} fontSize={'25px'} className="fam" />
            </div>
            <div className="partbox col-1 ep1-4">
              <h1>Privacy Policy</h1>
            </div>
            <div className="partbox col-1 ep1-4">
              <h1>Terms of Use</h1>
            </div>
            <div className="partbox col-2 ep1-4">
              <h1>Do not sell my personal information</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} ///////// MainArea 컴포넌트 ////////////
