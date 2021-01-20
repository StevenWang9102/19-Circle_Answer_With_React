import { useState } from "react";
import { TextOnRing } from "./textOnRing";
import mag from './img/Magnifier.svg'
import vis from './img/VisitArrow.svg'
import wrong1 from './img/wrong1.png'

const colorMap = [
  [
    "white", "white", "white",  "white", "white", "white", "gray",
    "gray", "gray",
  ],
  [
    "red",
    "white",
    "white",
    "white",
    "white",
    "white",
    "gray",
    "gray",
    "gray",
  ],
  ["red", "red", "white", "white", "white", "white", "gray", "gray", "gray"],
  ["red", "red", "red", "white", "white", "white", "gray", "gray", "gray"],
  ["red", "red", "red", "red", "white", "white", "gray", "gray", "gray"],
  ["red", "red", "red", "red", "red", "white", "gray", "gray", "gray"],
  ["red", "red", "red", "red", "red", "red", "gray", "gray", "gray"],
  ["red", "red", "red", "red", "red", "red", "red", "gray", "gray"],
  ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
  ["red", "red", "red", "red", "red", "red", "red", "red", "red"],
];

export const MainCircle = () => {

  const [currentColors, setColorList] = useState(colorMap[0]);

  const innnerRing = {
    zIndex: 211,
    border: "2px solid red",
    position: "absolute",
    clip: "rect(0 1000px 440px 50px)",
    opacity: 0.2,
    top: 0,
    left: 0,
  };

  const innnerRingLeft = {
    zIndex: 211,
    border: "2px solid red",
    position: "absolute",
    clip: "rect(450px 445px 1000px 50px)",
    opacity: 0.2,
    top: 0,
    left: 0,
  };

  const innnerRingRight = {
    zIndex: 211,
    border: "2px solid red",
    position: "absolute",
    clip: "rect(450px 1000px 1000px 455px)",
    opacity: 0.2,
    top: 0,
    left: 0,
  };

  const outerRing = {
    zIndex: 1,
    // border: "2px solid blue",
    position: "absolute",
    opacity: 0.4,
    top: 0,
    left: 0,
  };

  const button = {
    cursor: "pointer",
    zIndex: 6000,
    marginLeft: 500,
  };

  const nameStyle = {
    position: 'absolute',
    fontSize: 18,
    top: 290,
    left: 295,
  }

  const svg = {
    display: "block",
    overflow: "visible",
  };

  const getColor = (position) => {
    return currentColors[position];
  };

  const getOffSet = (offset) => {
    return {
      zIndex: 10,
      position: "absolute",
      opacity: 1,
      strokeDasharray: "150 2000",
      strokeDashoffset: offset,
      top: 0,
      left: 0,
    };
  };

  var counter = 0;
  const getName = () => {
    var counter = 0
    currentColors.forEach(each => {
      if (each == 'red') counter++
    })
    if (counter === 0 ) return 'Broken'
    else if (counter === 8 ) return 'Broken'
    else  return `Lit${counter}`
  };

  const isPositionRed = (position) => {
    var counter = 0
    if(currentColors[position-1]==='red') return true
    else return false
   };


  const myWrong={
    position: 'absolute',
    top: 150,
    left: 150,
    zIndex: 20000,
  }

  const opacityStyle = {width:40, zIndex: 20000}
  const opacityStyleNull = {width: 40, zIndex: 20000, opacity: 0}
  
  return (
    <>
      <button
        style={button}
        onClick={() => {
          window.setInterval(function () {
            if (counter === 7) {
              counter = 0;
            } else {
              counter = counter + 1;
              setColorList(colorMap[counter]);
            }
            console.log('counter2', counter);
          }, 1400);
          console.log('counter1', counter);
        }}>
        Start
      </button>

      <div>
        <svg
          className='innerRing'
          height='1000'
          width='1000'
          style={innnerRing}>
          <circle
            cx='450'
            cy='450'
            r='118'
            stroke='white'
            stroke-width='60'
            fill='#6095BBF7'
          />
        </svg>

        <svg
          className='innerRing'
          height='1000'
          width='1000'
          style={innnerRingLeft}>
          <circle
            cx='450'
            cy='450'
            r='118'
            stroke='white'
            stroke-width='60'
            fill='#6095BBF7'
          />
        </svg>

        <svg
          className='innerRing'
          height='1000'
          width='1000'
          style={innnerRingRight}>
          <circle
            cx='450'
            cy='450'
            r='118'
            stroke='white'
            stroke-width='60'
            fill='#6095BBF7'
          />
        </svg>

        <svg height='1000' width='1000' style={outerRing}>
          <circle
            cx='450'
            cy='450'
            r='200'
            stroke='white'
            stroke-width='80'
            fill-opacity='0'
          />
        </svg>

        
        <div className='myWrong' style={myWrong}>
          <ul>
            <li><img src={wrong1} style={isPositionRed(3)? opacityStyle: opacityStyleNull}/></li>
            <li><img src={wrong1} style={isPositionRed(4)? opacityStyle: opacityStyleNull}/></li>
            <li><img src={wrong1} style={isPositionRed(5)? opacityStyle: opacityStyleNull}/></li>
            <li><img src={wrong1} style={isPositionRed(6)? opacityStyle: opacityStyleNull}/></li>
            <li><img src={wrong1} style={isPositionRed(7)? opacityStyle: opacityStyleNull}/></li>
            <li><img src={wrong1} style={isPositionRed(8)? opacityStyle: opacityStyleNull}/></li>
            <li><img src={wrong1} style={isPositionRed(1)? opacityStyle: opacityStyleNull}/></li>
            <li><img src={wrong1} style={isPositionRed(2)? opacityStyle: opacityStyleNull}/></li>
          </ul>
        </div>

        {/* ---------------------- Slice 1 ----------------------  */}
        <svg height='1000' width='1000' style={getOffSet("-650")}>
          <circle
            cx='450'
            cy='450'
            r='200'
            stroke={getColor(0)}
            stroke-width='25'
            fill='#6095BBF7'
            fill-opacity='0'
          />
        </svg>

        {/* ---------------------- Slice 2 ----------------------  */}
        <svg height='1000' width='1000' style={getOffSet("-810")}>
          <circle
            cx='450'
            cy='450'
            r='200'
            stroke={getColor(1)}
            stroke-width='25'
            fill='#6095BBF7'
            fill-opacity='0'
          />
        </svg>

        {/* ---------------------- Slice 3 ----------------------  */}
        <svg height='1000' width='1000' style={getOffSet("-970")}>
          <circle
            cx='450'
            cy='450'
            r='200'
            stroke={getColor(2)}
            stroke-width='25'
            fill='#6095BBF7'
            fill-opacity='0'
          />
        </svg>

        {/* ---------------------- Slice 4 ----------------------  */}
        <svg height='1000' width='1000' style={getOffSet("-1130")}>
          <circle
            cx='450'
            cy='450'
            r='200'
            stroke={getColor(3)}
            stroke-width='25'
            fill='#6095BBF7'
            fill-opacity='0'
          />
        </svg>

        {/* ---------------------- Slice 5 ----------------------  */}
        <svg height='1000' width='1000' style={getOffSet("-10")}>
          <circle
            cx='450'
            cy='450'
            r='200'
            stroke={getColor(4)}
            stroke-width='25'
            fill='#6095BBF7'
            fill-opacity='0'
          />
        </svg>

        {/* ---------------------- Slice 6 ----------------------  */}
        <svg height='1000' width='1000' style={getOffSet("-170")}>
          <circle
            cx='450'
            cy='450'
            r='200'
            stroke={getColor(5)}
            stroke-width='25'
            fill='#6095BBF7'
            fill-opacity='0'
          />
        </svg>

        {/* ---------------------- Slice 7 ----------------------  */}
        <svg height='1000' width='1000' style={getOffSet("-330")}>
          <circle
            cx='450'
            cy='450'
            r='200'
            stroke={getColor(6)}
            stroke-width='25'
            fill='#6095BBF7'
            fill-opacity='0'
          />
        </svg>

        {/* ---------------------- Slice 8 ----------------------  */}
        <svg height='1000' width='1000' style={getOffSet("-490")}>
          <circle
            cx='450'
            cy='450'
            r='200'
            stroke={getColor(7)}
            stroke-width='25'
            fill='#6095BBF7'
            fill-opacity='0'
          />
        </svg>
      </div>

      <div class='circular' style={nameStyle}>
        <svg viewBox='0 0 100 100'>
          <path d='M 0,50 a 50,50 0 1,1 0,1 z' id='circle' />
          <text>
            <textPath xlinkHref='#circle'> Name: {getName()} </textPath>
          </text>
        </svg>

        <img style={{width: 50, position: 'relative', right: 50, bottom: 30}} src={mag} alt=''/>
        <img style={{width: 40, position: 'relative', right: -70, bottom: 40}} src={vis} alt=''/>
      </div>
    </>
  );
};
