import anime from "animejs/lib/anime.es.js";
import React from "react";
import "./Loader2.css";
export default function Loader2() {
  
  React.useEffect(() => {
    const tl = anime.timeline({ loop: true });
    tl.add({
      targets: document.getElementsByClassName("bars-2"),
      scaleY: 0.1,
      easing: "easeInQuad",
      duration: 500,
      delay: anime.stagger(100),
    }).add(
      {
        targets: document.getElementsByClassName("bars-2"),
        scaleY: 1,
        easing: "easeOutQuad",
        duration: 500,
        delay: anime.stagger(100),
      }
    );
  }, [])
  return (
    <div className="loader-2">
      <div className="bars-2"></div>
      <div className="bars-2"></div>
      <div className="bars-2"></div>
      <div className="bars-2"></div>
    </div>
  );
}
