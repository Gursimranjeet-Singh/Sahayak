import React, { useState } from "react";

import "./home.css";

const imgarr = [
  process.env.PUBLIC_URL + "/demohome.jpg",
  process.env.PUBLIC_URL + "/logo512.png",
  process.env.PUBLIC_URL + "/demohome.jpg",
  process.env.PUBLIC_URL + "/logo512.png",
];

export default function Home() {
  const [current, newcurrent] = useState(0);

  const changeimghomeright = () => {
    newcurrent((current + 1 + imgarr.length) % imgarr.length);
  };

  const changeimghomeleft = () => {
    newcurrent((current - 1 + imgarr.length) % imgarr.length);
  };

  return (
    <>
      
      <div id="homecontent">
        <div id="homeimage">
          <div
            id="hmimgcnt"
            style={{ backgroundImage: `url(${imgarr[current]})` }}
          ></div>
          <button id="lfthmimgbtn" onClick={changeimghomeleft}></button>
          <button id="rghthmimgbtn" onClick={changeimghomeright}></button>
        </div>

        <div id="homevmo">
          <div id="vmoh2">
            <h2>Welcome to Shayak</h2>
          </div>
          <div id="vmo">
            <div id="v">
              <h2>Vision</h2>
              <p>
                Embrace the ideals of all people living together harmoniously in
                a barrier-free world without fear of exclusion and
                discrimination
              </p>
            </div>
            <div id="m">
              <h2>Mission</h2>
              <p>
                Embrace the ideals of all people living together harmoniously in
                a barrier-free world without fear of exclusion and
                discrimination
              </p>
            </div>
            <div id="o">
              <h2>Objective</h2>
              <p>
                Embrace the ideals of all people living together harmoniously in
                a barrier-free world without fear of exclusion and
                discrimination
              </p>
            </div>
          </div>
        </div>

        <div id="homewwd">
          <div id="homewwdleft">
            <div id="iconandheadingl">
              <div></div>
              <p>National Centre for Accessible Environments</p>
            </div>
            <p id="contentl">
              lorem ipsum dolor sit amet, consectetur adipiscing elit, lorem
              ipsum dolor sit amet, consectetur adipiscing elit,lorem ipsum
              dolor sit amet, consectetur adipiscing elit,lorem ipsum dolor sit
              amet, \
              <a>
                <i className="fa fa-arrow-circle-right"></i>
              </a>
            </p>
          </div>
          <div id="homewwdright">
            <div id="iconandheading2">
              <div></div>
              <p>National Centre for Accessible Environments</p>
            </div>
            <p id="content2">
              lorem ipsum dolor sit amet, consectetur adipiscing elit,lorem
              ipsum dolor sit amet, consectetur adipiscing elit,lorem ipsum
              dolor sit amet, consectetur adipiscing elit,lorem ipsum dolor sit
              amet, \
              <a>
                <i className="fa fa-arrow-circle-right"></i>
              </a>
            </p>
          </div>
        </div>

        <div id="videoandwherewework">
          <div id="video">
            <h2>Awareness</h2>
            <video  controls>
              <source
                src="https://www.youtube.com/embed/VIDEO_ID"
                type="video/youtube"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div id="wherewework">
            <h2>We Work In</h2>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
