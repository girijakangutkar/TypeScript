import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({
  rating,
  setRating,
}: {
  rating: number;
  setRating: (value: number) => void;
}) => {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = hover ? hover >= star : rating >= star;

        return (
          <span
            key={star}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setRating(star)}
            style={{ cursor: "pointer", color: filled ? "gold" : "gray" }}
          >
            <FontAwesomeIcon icon={faStar} />
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
