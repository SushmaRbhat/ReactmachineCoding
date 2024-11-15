import { useEffect, useRef, useState } from "react";
import "./App.css";
import { carouselItems } from "./data";

function App() {
  const [page, setPage] = useState(0);
  const timerId = useRef(null);

  useEffect(() => {
    clearInterval(timerId.current);
    timerId.current = setInterval(nextPage, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  const nextPage = () => {
    setPage((prev) => {
      if (prev === carouselItems.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };
  const prevPage = () => {
    setPage((prev) => {
      if (prev === 0) {
        return carouselItems.length - 1;
      }
      return prev - 1;
    });
  };

  const pauseAutoPlay = () => {
    clearInterval(timerId.current);
  };

  const continueAutoPlay = () => {
    timerId.current = setInterval(nextPage, 1000);
  };

  return (
    <>
      <div>
        <h1>Carousel</h1>
        <div
          className="carousel-conatiner"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={continueAutoPlay}
        >
          {carouselItems &&
            carouselItems.map((ele, i) =>
              page === i ? (
                <img key={i} src={ele} alt={`image${i + 1}`} />
              ) : null
            )}

          <button className="btn prev" onClick={prevPage}>
            ◀️
          </button>
          <button className="btn next" onClick={nextPage}>
            ▶️
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
