import anime from "animejs/lib/anime.es.js";
import React from "react";
import "./Loader3.css";
export default function Loader2() {
  
  React.useEffect(() => {
    const tl = anime.timeline({ loop: true});
    tl.add({
      targets: document.getElementsByClassName("box-3"),
      rotateZ: 360,
      easing: "easeOutQuad",
      duration: 400,
      borderRadius:0,
      top:40,
      delay: anime.stagger(200),
    }).add(
      {
        targets: document.getElementsByClassName("box-3"),
        easing: "easeInQuad",
        duration: 400,
        top:0,
        rotateZ: 0,
        borderRadius:"50%",
        delay: anime.stagger(200),
      }
    ,"+=100");
  }, [])
  return (
    <div className="loader-3">
      <div className="box-3"></div>
      <div className="box-3"></div>
      <div className="box-3"></div>
      <div className="box-3"></div>
    </div>
  );
}
