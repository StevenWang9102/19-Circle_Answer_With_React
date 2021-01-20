import { useState } from "react";

export const RingSlices = ({
  currentColors,
  setColorList,
  stop,
  setStop,
}) => {

  const colorMap = [
    ["red", "red", "white", "white", "white", "white", "gray", "gray", "gray"],
    ["red", "red", "red", "white", "white", "white", "gray", "gray", "gray"],
    ["red", "red", "red", "red", "white", "white", "gray", "gray", "gray"],
    ["red", "red", "red", "red", "red", "white", "gray", "gray", "gray"],
    ["red", "red", "red", "red", "red", "red", "gray", "gray", "gray"],
    ["red", "red", "red", "red", "red", "red", "red", "gray", "gray"],
    ["red", "red", "red", "red", "red", "red", "red", "red", "gray"],
    [
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "gray",
      "gray",
      "gray",
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
  ];

  // const [currentColors, setColorList] = useState(colorMap[0]);
  // const [stop, setStop] = useState(false);

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
    border: "2px solid blue",
    position: "absolute",
    opacity: 0.4,
    top: 0,
    left: 0,
  };

  // const dashRing = {
  //   zIndex: 1,
  //   position: "absolute",
  //   opacity: 1,
  //   strokeDasharray: "150 10",
  //   strokeDashoffset: "-10",
  //   top: 0,
  //   left: 0,
  // };

  // const button = {
  //   cursor: "pointer",
  //   zIndex: 100,
  //   marginLeft: 500,
  // };

  // const button1 = {
  //   cursor: "pointer",
  //   zIndex: 100,
  //   marginLeft: 580,
  // };

  // const h1 = {
  //   textAlign: "center",
  //   marginTop: "60px",
  //   marginBottom: "30px",
  // };


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


  return (
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
  );
};
