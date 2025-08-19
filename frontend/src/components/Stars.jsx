import "./Stars.css"; 
import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const defaultUnselectedColor = "grey";
const defaultColor = "yellow";
export let globalRating = 0;

const Stars = ({defaultRating, color, iconSize}) => {
    const [rating, setRating] = useState(defaultRating);
    const [tempRating, setTempRating] = useState(0);

    let stars = Array(5).fill(<CiStar/>);

    return (
        <div className="starsContainer">
            {stars.map((item, index) => {
                const isActiveColor = (rating || tempRating) && (index < rating || index < tempRating);

                let elementColor = "";

                if(isActiveColor) {
                    elementColor = color || defaultColor;
                } else {
                    elementColor = defaultUnselectedColor;
                }

                const handleClick = (rating) => {
                    setRating(rating);
                    globalRating = rating;
                };

                return (
                    <div 
                        className="star" 
                        key={index} 
                        style={{
                            fontSize: iconSize ? `${iconSize}px`: "14px", 
                            color: elementColor,
                            filter: `${isActiveColor ? "grayscale(0%)" : "grayscale(100%)"}`
                        }}
                        onMouseEnter={() => setTempRating(index + 1)}
                        onMouseLeave={() => setTempRating(0)}
                        onClick={() => handleClick(index + 1)}
                    >
                        {isActiveColor ? <FaStar/> : <CiStar/>}
                    </div>
                );
            })}
        </div>
    )
}

export default Stars
