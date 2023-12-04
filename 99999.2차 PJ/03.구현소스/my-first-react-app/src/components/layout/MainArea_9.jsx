// MainArea 컴포넌트

// 메인 css
// import './css/main.css';

export function MainArea9() {
  // cat 속성으로 메뉴분류 전달

  const spArr = [
    "DawgHouse_Logo",
    "casual_dining_logo_2",
    "casual_dining_logo_3",
    "casual_dining_logo_4",
    "casual_dining_logo_5",
    "casual_dining_logo_2",
    "casual_dining_logo_3",
    "casual_dining_logo_4",
    "casual_dining_logo_5",
    "casual_dining_logo_2",
  ];

  return (
    <>
      <section className="main inbox">
        <div className="ep ep9">
          <div className="flex-box">
            <div className="partbox col-7 ep9-1">
              <div className="sul-box">
                <ul>
                  <li>
                    <h1>
                      TUCK INTO OVER 40 INTERNATIONAL FOOD <br />
                      AND BEVERAGE OPTIONS.
                    </h1>
                  </li>
                  <li>
                    <h2>CASUAL DINING</h2>
                    <p>
                      Kick back and enjoy a bite at the chilled eateries
                      peppered throughout Resorts <br />
                      World Las Vegas. Poolside dining? A Nashville sports bar?
                      How about a social <br />
                      gaming bar? We’ve got your cravings covered.
                    </p>
                  </li>
                </ul>
              </div>
              <nav className="sul-box2">
                '
                <ul>
                  <li>
                    <a href="#">CASUAL DINING</a>
                  </li>
                  <li>
                    <a href="#">FINE DINING</a>
                  </li>
                  <li>
                    <a href="#">FAMOUS FOODS</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="partbox col-5 ep9-2">
              <img src="./images/map/dfood1.jpg" alt="식사1" />
              <div id="slider">
                <div className="image-box">
                  {spArr.map((v, i) => (
                    <div key={i}>
                      <img src={"./images/slide/"+v+".png"} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- 따라다니는 원 --> */}
      <div className="mover"></div>
    </>
  );
} ///////// MainArea 컴포넌트 ////////////
