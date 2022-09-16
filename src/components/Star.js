import {useState} from 'react'
import uuid from 'react-uuid';
function Rating({foodRating}){
    const [rate, setRate] = useState(0)
    const [hover, setHover] = useState(0);
    
    return (
        <div className="rating">
            {[...Array(5)].map((star, index) => {
                index+=1;
                return (
                    <button
                        id="ratingButton"
                        type="button" 
                        key={uuid()}    
                        className={index <= (foodRating || hover || rate) ? "on" : "off"} 
                        onClick={() => setRate(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rate)}
                        onDoubleClick={() => {
                            setHover(0)
                            setRate(0)
                        }}
                    > 
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    )
}

export default Rating