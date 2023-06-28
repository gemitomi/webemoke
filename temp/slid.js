import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../CSS/main.css";

import Post1 from "../../image/post1.png";
import Post2 from "../../image/post2.png";
import Post3 from "../../image/post3.png";
import Post4 from "../../image/post4.png";
import Post5 from "../../image/post5.png";
import Post6 from "../../image/post6.png";

export default function Gallery() {
  const SliderComponent = () => {
    useEffect(() => {
      const initSlider = function (currentSlider) {
        const sliderContainer = currentSlider.querySelector("[data-slider-container]");
        const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
        const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

        let totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
        let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
        let currentSlidePos = 0;

        const moveSliderItem = function () {
          sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
        };

        const slideNext = function () {
            const slideEnd = currentSlidePos >= totalSlidableItems - 1;
          
            if (slideEnd) {
              currentSlidePos = 0;
            } else {
              currentSlidePos++;
            }
          
            moveSliderItem();
          };
          
          const slidePrev = function () {
            if (currentSlidePos <= 0) {
              currentSlidePos = totalSlidableItems;
            } else {
              currentSlidePos--;
            }
          
            moveSliderItem();
          };
          

        sliderPrevBtn.addEventListener("click", slidePrev);
        sliderNextBtn.addEventListener("click", slideNext);

        const dontHaveExtraItem = totalSlidableItems <= 0;
        if (dontHaveExtraItem) {
          sliderNextBtn.style.display = "none";
          sliderPrevBtn.style.display = "none";
        }

        currentSlider.addEventListener("wheel", function (event) {
          if (event.shiftKey && event.deltaY > 0) slideNext();
          if (event.shiftKey && event.deltaY < 0) slidePrev();
        });

        window.addEventListener("resize", function () {
          totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-items"));
          totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

          moveSliderItem();
        });
      };

      const sliders = document.querySelectorAll("[data-slider]");
      for (let i = 0, len = sliders.length; i < len; i++) {
        initSlider(sliders[i]);
      }
    }, []);

    return (
      <div>
        <section className="blog-section">
          <div className="blog-container">
            <div className="title-wrapper">
              <div>
                <p className="section-subtitle">Olvasnivaló</p>
                <h2 className="h2 lp-section-title" id="service-label">
                  Blog & Történetek
                </h2>
              </div>
              <p className="section-text">
                Phasellus et lacus suscipit congue nisl the volutpat magna. donec miss the drana risus tincidunt convallis
                velit orci congue tortor eu dignissim ipsum suam non odio. Pellenta esuntion miss the imperdiet metus
                </p>
            </div>
            <div className="slider" data-slider>
              <ul className="slider-container service-list" data-slider-container>
                <li className="slider-item" data-slider-item>
                  <div className="service-card">
                    <div className="card-icon">
                      <img src={Post1} width="300" height="300" alt="Kia dúla és miben segít?" className="w-100" />
                    </div>
                    <h3 className="h3 card-title">Ki a dúla és miben segít?</h3>
                    <p className="card-text">
                      Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                    </p>
                    <span className="text-lg author">Békés Emőke</span>
                    <a href="#" className="btn">
                      Bővebben
                    </a>
                    <a href="#" className="layer-link" aria-label="More about"></a>
                  </div>
                </li>
                <li className="slider-item" data-slider-item>
                    <div className="service-card">

                        <div className="card-icon">
                            <img src={Post2} alt=""/>
                        </div>

                        <h3 className="h3 card-title">Dúlahatás - kutatások, eredmények</h3>

                        <p className="card-text">
                            Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                        </p>

                        <span className="text-lg author">Békés Emőke</span>

                        <a href="#" className="btn">Bővebben</a>

                        <a href="#" className="layer-link" aria-label="More about"></a>

                    </div>
                </li>

                <li className="slider-item" data-slider-item>
                    <div className="service-card">

                        <div className="card-icon">
                            <img src={Post3} alt=""/>
                        </div>

                        <h3 className="h3 card-title">Dúlatréningre menni jó</h3>

                        <p className="card-text">
                            Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                        </p>

                        <span className="text-lg author">Békés Emőke</span>

                        <a href="#" className="btn">Bővebben</a>

                        <a href="#" className="layer-link" aria-label="More about my eCommerce service"></a>

                    </div>
                </li>

                <li className="slider-item" data-slider-item>
                    <div className="service-card">

                        <div className="card-icon">
                            <img src={Post4} alt=""/>
                        </div>

                        <h3 className="h3 card-title">A Lány és a Kisfiú</h3>

                        <p className="card-text">
                            Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                        </p>

                        <span className="text-lg author">Békés Emőke</span>

                        <a href="#" className="btn">Bővebben</a>

                        <a href="#" className="layer-link" aria-label="More about"></a>

                    </div>
                </li>

                <li className="slider-item" data-slider-item>
                    <div className="service-card">

                        <div className="card-icon">
                            <img src={Post5} alt=""/>
                        </div>

                        <h3 className="h3 card-title">Nyílt hétvége a Békés Dúlakörrel</h3>

                        <p className="card-text">
                            Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                        </p>

                        <span className="text-lg author">Békés Emőke</span>

                        <a href="#" className="btn">Bővebben</a>

                        <a href="#" className="layer-link" aria-label="More about my Digital Marketing service"></a>

                    </div>
                </li>

                <li className="slider-item" data-slider-item>
                    <div className="service-card">

                        <div className="card-icon">
                            <img src={Post6} alt=""/>
                        </div>

                        <h3 className="h3 card-title">Szülés és születés napjai a Békés Dúlakörrel</h3>

                        <p className="card-text">
                            Website ravida surna eveti semen the conse tusio anivite dianne one nivam acestion vue artin dictum.
                        </p>

                        <span className="text-lg author">Békés Emőke</span>

                        <a href="#" className="btn">Bővebben</a>

                        <a href="#" className="layer-link" aria-label="More about my Social Media service"></a>

                    </div>
                </li>                    
              </ul>
              <div className="slider-controls">
                <button className="slider-control prev" data-slider-prev aria-label="Slide to previous item">
                  <div className="line"></div>
                  <div className="arrow"></div>
                </button>
                <button className="slider-control next" data-slider-next aria-label="Slide to next item">
                  <div className="line"></div>
                  <div className="arrow"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  return <SliderComponent />;
}

