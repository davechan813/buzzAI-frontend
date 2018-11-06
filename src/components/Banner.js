import React from 'react'
import { NavLink } from 'react-router-dom';
//import './Banner.css'

// const banner = (props) => {
//   return (
//     <div id="banner">
//       <div className="inner">
//         <h2 className="CompanyName">VUSEARCH</h2>
//         <p>AI-DRIVEN MARKETING PLATFORM</p>
//         <ul className="actions">
//           <li><NavLink to="/buzz" exact className="button special">START</NavLink></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

import './dist/css/style.css';


class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />
  <title>vuSearch</title>
  <link
    href="https://fonts.googleapis.com/css?family=Hind+Vadodara:400,700|Mukta:500,700"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="dist/css/style.css" />
  <div className="body-wrap boxed-container">
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <a href="#">
                <svg
                  width={48}
                  height={32}
                  viewBox="0 0 48 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>vuSearch</title>
                  <defs>
                    <linearGradient
                      x1="0%"
                      y1="100%"
                      y2="0%"
                      id="logo-a"
                    >
                      <stop
                        stopColor="#007CFE"
                        stopOpacity={0}
                        offset="0%"
                      />
                      <stop stopColor="#007DFF" offset="100%" />
                    </linearGradient>
                    <linearGradient
                      x1="100%"
                      y1="50%"
                      x2="0%"
                      y2="50%"
                      id="logo-b"
                    >
                      <stop
                        stopColor="#FF4F7A"
                        stopOpacity={0}
                        offset="0%"
                      />
                      <stop stopColor="#FF4F7A" offset="100%" />
                    </linearGradient>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <rect
                      fill="url(#logo-a)"
                      width={32}
                      height={32}
                      rx={16}
                    />
                    <rect
                      fill="url(#logo-b)"
                      x={16}
                      width={32}
                      height={32}
                      rx={16}
                    />
                  </g>
                </svg>
              </a>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title h2-mobile mt-0 is-revealing">
                vuSearch
              </h1>
              <p className="hero-paragraph is-revealing">
                AI-Driven Marketing Platform
              </p>
              <p className="hero-cta is-revealing">
                <a
                  className="button button-primary button-shadow"
                  href="#"
                >
                  Get Started
                </a>
              </p>
            </div>
            <div className="hero-illustration is-revealing">
              <svg
                width={528}
                height={413}
                viewBox="0 0 528 413"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    x1="50%"
                    y1="100%"
                    x2="50%"
                    y2="0%"
                    id="hero-illustration-a"
                  >
                    <stop
                      stopColor="#A7FDE8"
                      stopOpacity={0}
                      offset="0%"
                    />
                    <stop stopColor="#6EFACC" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="100%"
                    y1="50%"
                    x2="0%"
                    y2="50%"
                    id="hero-illustration-b"
                  >
                    <stop
                      stopColor="#FF4F7A"
                      stopOpacity={0}
                      offset="0%"
                    />
                    <stop stopColor="#FF4F7A" offset="100%" />
                  </linearGradient>
                  <radialGradient
                    fx="50%"
                    fy="50%"
                    r="100%"
                    id="hero-illustration-c"
                  >
                    <stop stopColor="#6EFACC" offset="0%" />
                    <stop
                      stopColor="#6EFACC"
                      stopOpacity={0}
                      offset="100%"
                    />
                  </radialGradient>
                  <linearGradient
                    x1="0%"
                    y1="100%"
                    y2="0%"
                    id="hero-illustration-d"
                  >
                    <stop
                      stopColor="#007CFE"
                      stopOpacity={0}
                      offset="0%"
                    />
                    <stop stopColor="#007DFF" offset="100%" />
                  </linearGradient>
                  <linearGradient
                    x1="50%"
                    y1="0%"
                    x2="50%"
                    y2="100%"
                    id="hero-illustration-e"
                  >
                    <stop
                      stopColor="#FF4F7A"
                      stopOpacity={0}
                      offset="0%"
                    />
                    <stop stopColor="#FF4F7A" offset="100%" />
                  </linearGradient>
                  <filter
                    x="-500%"
                    y="-500%"
                    width="1000%"
                    height="1000%"
                    filterUnits="objectBoundingBox"
                    id="dropshadow-1"
                  >
                    <feOffset
                      dy={16}
                      in="SourceAlpha"
                      result="shadowOffsetOuter"
                    />
                    <feGaussianBlur
                      stdDeviation={24}
                      in="shadowOffsetOuter"
                      result="shadowBlurOuter"
                    />
                    <feColorMatrix
                      values="0 0 0 0 0.12 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.2 0"
                      in="shadowBlurOuter"
                    />
                  </filter>
                </defs>
                <g
                  transform="translate(0 -1)"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    transform="translate(128 290)"
                    fill="url(#hero-illustration-a)"
                  >
                    <path d="M62.225 0l1.415 1.414L1.414 63.64 0 62.225zM66.468 4.243l1.414 1.414L5.657 67.882l-1.414-1.414zM70.71 8.485L72.126 9.9 9.899 72.125 8.485 70.71zM74.953 12.728l1.415 1.414-62.226 62.226-1.414-1.415zM79.196 16.97l1.414 1.415L18.385 80.61l-1.414-1.414zM83.439 21.213l1.414 1.414-62.226 62.226-1.414-1.414zM87.681 25.456l1.414 1.414L26.87 89.095l-1.414-1.414zM91.924 29.698l1.414 1.415-62.225 62.225-1.415-1.414z" />
                    <path d="M91.924 29.698l1.414 1.415-62.225 62.225-1.415-1.414zM96.167 33.941l1.414 1.414-62.226 62.226-1.414-1.414zM100.41 38.184l1.413 1.414-62.225 62.225-1.414-1.414zM104.652 42.426l1.414 1.415-62.225 62.225-1.415-1.414zM108.894 46.669l1.415 1.414-62.226 62.226-1.414-1.415zM113.137 50.912l1.414 1.414-62.225 62.225-1.414-1.414zM117.38 55.154l1.414 1.415-62.225 62.225-1.415-1.414zM121.622 59.397l1.415 1.414-62.226 62.226-1.414-1.415z" />
                    <g>
                      <path d="M100.811 0l-1.414 1.414 62.225 62.226 1.415-1.415zM96.569 4.243l-1.415 1.414 62.226 62.225 1.414-1.414zM92.326 8.485L90.912 9.9l62.225 62.226 1.414-1.414zM88.083 12.728l-1.414 1.414 62.225 62.226 1.415-1.415zM83.84 16.97l-1.414 1.415 62.226 62.225 1.414-1.414zM79.598 21.213l-1.414 1.414 62.225 62.226 1.414-1.414zM75.355 25.456l-1.414 1.414 62.226 62.225 1.414-1.414zM71.113 29.698l-1.415 1.415 62.226 62.225 1.414-1.414z" />
                      <path d="M71.113 29.698l-1.415 1.415 62.226 62.225 1.414-1.414zM66.87 33.941l-1.414 1.414 62.225 62.226 1.414-1.414zM62.627 38.184l-1.414 1.414 62.226 62.225 1.414-1.414zM58.385 42.426l-1.414 1.415 62.225 62.225 1.414-1.414zM54.142 46.669l-1.414 1.414 62.225 62.226 1.415-1.415zM49.9 50.912l-1.415 1.414 62.226 62.225 1.414-1.414zM45.657 55.154l-1.414 1.415 62.225 62.225 1.414-1.414zM41.414 59.397L40 60.811l62.225 62.226 1.415-1.415z" />
                    </g>
                  </g>
                  <g
                    transform="matrix(1 0 0 -1 326 124)"
                    fill="url(#hero-illustration-a)"
                  >
                    <path d="M62.225 0l1.415 1.414L1.414 63.64 0 62.225zM66.468 4.243l1.414 1.414L5.657 67.882l-1.414-1.414zM70.71 8.485L72.126 9.9 9.899 72.125 8.485 70.71zM74.953 12.728l1.415 1.414-62.226 62.226-1.414-1.415zM79.196 16.97l1.414 1.415L18.385 80.61l-1.414-1.414zM83.439 21.213l1.414 1.414-62.226 62.226-1.414-1.414zM87.681 25.456l1.414 1.414L26.87 89.095l-1.414-1.414zM91.924 29.698l1.414 1.415-62.225 62.225-1.415-1.414z" />
                    <path d="M91.924 29.698l1.414 1.415-62.225 62.225-1.415-1.414zM96.167 33.941l1.414 1.414-62.226 62.226-1.414-1.414zM100.41 38.184l1.413 1.414-62.225 62.225-1.414-1.414zM104.652 42.426l1.414 1.415-62.225 62.225-1.415-1.414zM108.894 46.669l1.415 1.414-62.226 62.226-1.414-1.415zM113.137 50.912l1.414 1.414-62.225 62.225-1.414-1.414zM117.38 55.154l1.414 1.415-62.225 62.225-1.415-1.414zM121.622 59.397l1.415 1.414-62.226 62.226-1.414-1.415z" />
                    <g>
                      <path d="M100.811 0l-1.414 1.414 62.225 62.226 1.415-1.415zM96.569 4.243l-1.415 1.414 62.226 62.225 1.414-1.414zM92.326 8.485L90.912 9.9l62.225 62.226 1.414-1.414zM88.083 12.728l-1.414 1.414 62.225 62.226 1.415-1.415zM83.84 16.97l-1.414 1.415 62.226 62.225 1.414-1.414zM79.598 21.213l-1.414 1.414 62.225 62.226 1.414-1.414zM75.355 25.456l-1.414 1.414 62.226 62.225 1.414-1.414zM71.113 29.698l-1.415 1.415 62.226 62.225 1.414-1.414z" />
                      <path d="M71.113 29.698l-1.415 1.415 62.226 62.225 1.414-1.414zM66.87 33.941l-1.414 1.414 62.225 62.226 1.414-1.414zM62.627 38.184l-1.414 1.414 62.226 62.225 1.414-1.414zM58.385 42.426l-1.414 1.415 62.225 62.225 1.414-1.414zM54.142 46.669l-1.414 1.414 62.225 62.226 1.415-1.415zM49.9 50.912l-1.415 1.414 62.226 62.225 1.414-1.414zM45.657 55.154l-1.414 1.415 62.225 62.225 1.414-1.414zM41.414 59.397L40 60.811l62.225 62.226 1.415-1.415z" />
                    </g>
                  </g>
                  <path d="M0 0h528v414H0z" />
                  <path
                    fill="#FFF"
                    d="M0 63h528v297H0z"
                    style={{
                      mixBlendMode: "multiply",
                      filter: "url(#dropshadow-1)"
                    }}
                  />
                  <path fill="#FFF" d="M0 63h528v297H0z" />
                  <path
                    fill="url(#hero-illustration-b)"
                    d="M408 230h80v48h-80z"
                  />
                  <path
                    d="M0 0h4v4H0V0zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zm0 12h4v4H0v-4zM12 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM24 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM36 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM48 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zM60 0h4v4h-4V0zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4zm0 12h4v4h-4v-4z"
                    transform="rotate(45 -118.861 431.981)"
                    fill="url(#hero-illustration-c)"
                  />
                  <path
                    fill="#FFF"
                    d="M288 254h160v160H288z"
                    style={{
                      mixBlendMode: "multiply",
                      filter: "url(#dropshadow-1)"
                    }}
                  />
                  <path fill="#FFF" d="M288 254h160v160H288z" />
                  <path
                    d="M248 79h88v24c0 35.346-28.654 64-64 64h-24V79z"
                    fill="url(#hero-illustration-d)"
                  />
                  <path
                    d="M348 132c0 26.51-21.49 48-48 48 0-26.51 21.49-48 48-48z"
                    fill="url(#hero-illustration-e)"
                    transform="matrix(1 0 0 -1 0 312)"
                  />
                  <path
                    fill="#FFF"
                    d="M200 31h88v88h-88z"
                    style={{
                      mixBlendMode: "multiply",
                      filter: "url(#dropshadow-1)"
                    }}
                  />
                  <path fill="#FFF" d="M200 31h88v88h-88z" />
                  <path fill="#F6F8FA" d="M24 248l88 88H24z" />
                  <rect
                    fill="url(#hero-illustration-d)"
                    x={335}
                    y={242}
                    width={32}
                    height={32}
                    rx={16}
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</div>

		);
	}
}

export default Banner;
