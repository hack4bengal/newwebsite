import { useCallback } from "react";
import { useEffect, useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            goToNext();
        }, 3000);
        return () => clearTimeout(timer);
    }, [currentIndex, goToNext]);

    return (
        <div className="event_slider">
            <div className="arrow arrow-left" onClick={goToPrevious}>
                ❰
            </div>
            <div className="arrow arrow-right" onClick={goToNext}>
                ❱
            </div>
            <div className="event_slide" >
                <img src={slides[currentIndex].url} alt="" />
            </div>
            <div className="dots-container">
                {slides.map((slide, slideIndex) => (
                    <div
                        className={`dot ${slideIndex === currentIndex ? "active" : ""}`}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
