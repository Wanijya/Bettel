import React, { useEffect, useRef } from 'react'
import styles from "./home.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Home = () => {

    const slider = useRef(null);
    const firstText = useRef(null);
    const secondText = useRef(null);
  
    let direction = -1;
    let xPercent = 0;
  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.45,
          start: "top top",
          end: window.innerHeight,
          onUpdate: (e) => {
            direction = e.direction * -1;
          },
        },
        x: "-500px",
      });
      requestAnimationFrame(animate);
    }, []);
  
    const animate = () => {
      if (xPercent < -100) {
        xPercent = 0;
      } else if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent });
      gsap.set(secondText.current, { xPercent });
      xPercent += direction * 0.05;
      requestAnimationFrame(animate);
    };

  return (
    <div className={styles.landing}>
      <img src="/images/bg-img (1).jpg" alt="" />
      <div className={styles.overlay}>
        <div className={styles.elems}>
          <div className={styles.left}>
            <img  data-scroll data-scroll-speed="0.3" src="/images/arrow.svg" alt="" />
            <h1  data-scroll data-scroll-speed="0.3">
              Elevating your
              <br />
              E-Sports Passion
            </h1>
          </div>
          <div className={styles.right}>
            <img data-scroll data-scroll-speed="0.2" src="/images/hero.png" alt="" />
          </div>
        </div>
        <div data-scroll data-scroll-speed="0.2" className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>E-Sports Bettel -</p>
            <p ref={secondText}>E-Sports Bettel -</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home