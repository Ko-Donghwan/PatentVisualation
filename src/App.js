import React, { useState, useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './App.css';

import items from './items';  // 분리한 파일 임포트

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => console.log('Scroll began')); // 스크롤 이벤트 등록
    Events.scrollEvent.register('end', () => console.log('Scroll ended'));
    scrollSpy.update();

    return () => { 
      Events.scrollEvent.remove('begin'); // 클린업
      Events.scrollEvent.remove('end');
    };
  }, []);

  // section4에서 사용할 슬라이더 항목 (image1, image2, image3만 포함)
  const sliderItems = items.filter(item => [4, 5, 6].includes(item.id));

  const handleClick = (direction) => {
    setFade(false); // 페이드 아웃 시작
    setTimeout(() => {
      if (direction === 'left') {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1));
      } else if (direction === 'right') {
        setCurrentIndex((prevIndex) => (prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1));
      }
      setFade(true); // 페이드 인 시작
    }, 300); // CSS 트랜지션 시간과 일치
  };

  const goToAboutPage = () => {
    window.location.href = 'http://localhost:3002';
  };

  return (
    <div className="all_container">
      <div className="title_container">늩티나무</div>

      <Element name="section1" className="element-container"> {/* 섹션 1 */}
        <Link to="section1" spy={true} smooth={true} duration={500}>
          <div className="element1 fade-in">
            <p className="p_margin">
              <h1 className="h1_weight">{items[3].name}</h1>
              <h4 className="h4_ff">{items[3].content}</h4>
            </p>
            <img src={items[3].image} alt={items[3].name} />
          </div>
        </Link>
      </Element>

      <Element name="section2" className="element-container"> {/* 섹션 2 */}
        <Link to="section2" spy={true} smooth={true} duration={500}>
          <div className="element2 fade-in">
            <p className="p_margin">
              <h1 className="h1_weight">{items[4].name}</h1>
              <h4 className="h4_ff">{items[4].content}</h4>
            </p>
            <img src={items[4].image} alt={items[4].name} />
          </div>
        </Link>
      </Element>

      <Element name="section3" className="element-container"> {/* 섹션 3 */}
        <Link to="section3" spy={true} smooth={true} duration={500}>
          <div className="element3 fade-in">
            <p className="p_margin">
              <h1 className="h1_weight">{items[5].name}</h1>
              <h4 className="h4_ff">{items[5].content}</h4>
              <button onClick={goToAboutPage}>Try</button>
            </p>
            <img src={items[5].image} alt={items[5].name} />
          </div>
        </Link>
      </Element>

      <Element name="section4" className="element-container"> 
        <Link to="section4" spy={true} smooth={true} duration={500}>
          <div className={`element4 ${fade ? 'fade-in' : 'fade-out'}`}>
            <p className="p_margin">
              <h1 className="h1_weight">{items[currentIndex].name}</h1>
              <h4>{items[currentIndex].content}</h4>
            </p>
            <button onClick={() => handleClick('left')}>
              <strong>&lt;&lt;</strong>
            </button>
            <img src={items[currentIndex].image} alt={items[currentIndex].name} />
            <button onClick={() => handleClick('right')}>
              <strong>&gt;&gt;</strong>
            </button>
          </div>
        </Link>
      </Element>
    </div>
  );
};

export default App;