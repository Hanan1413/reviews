import { useState } from "react";
import people from "./data";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextReview = () => {
    setIndex((previousIndex) => {
      const newIndex = previousIndex + 1;
      // if newIndex bigger than people.length -1 return 0
      if(newIndex > people.length - 1){
        return 0
      }
      return newIndex;
    });
  };

  const prevousReview = () => {
    setIndex((previousIndex) => {
      const newIndex = previousIndex - 1;
        // if newIndex less  than  0 return people length - 1 which is last index in arry  
        if(newIndex < 0 ){
          return people.length -1
        }
      return newIndex;
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <button className="prev-btn" onClick={prevousReview}>
          <FaChevronCircleLeft />
        </button>

        <button className="next-btn" onClick={nextReview}>
          <FaChevronCircleRight />
        </button>
      </article>
    </main>
  );
};
export default App;
