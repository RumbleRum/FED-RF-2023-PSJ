// MainArea 컴포넌트

import { useEffect } from "react";
import { ScrollReveal } from "../func/jquery.scroll-reveal";


// 제이쿼리
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

export function MainArea1() {
 
  useEffect((e)=>{
        ScrollReveal(e);
  });

  return (
    <>
      <section className="main inbox video-box">
        <video id="mvid" src="./images/videoplayback.mp4" autoPlay loop muted></video>
        <div className="ep ep1 first-bx">
          <div className="flex-box">
            <div className="col-12 ep1-1"></div>
            <div className="partbox col-12 ep1-2">
              <h1 className="js-reveal">This is</h1>
            </div>
            <div className="partbox col-12 ep1-2">
              <h1 className="js-reveal">Our World</h1>
            </div>
            <div className=" col-3 ep1-3">
              <h2 className="js-reveal">A JOURNEY BY:</h2>
            </div>
            <div className=" col-3 ep1-3">
              <h2 className="js-reveal">HILTON</h2>
            </div>
            <div className=" col-3 ep1-3">
              <h2 className="js-reveal">CROCKFORDS</h2>
            </div>
            <div className=" col-3 ep1-3">
              <h2 className="js-reveal">CONRAD</h2>
            </div>
            <div className="partbox col-4 ep1-4">
              <h1>
                © 2023 Expedia, Inc., an expedia group company. All Rights
                Reserved
              </h1>
            </div>
            <div className="partbox col-4 ep1-4">
              <h1></h1>
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
