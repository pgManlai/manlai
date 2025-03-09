import { useState } from "react";
import './index.css';


const ColorList = ({colors}) => {
    const[activeColor, setActiveColor] = useState(null);
    const handleClick = (color) => {
        setActiveColor(color);
    };

    return (
        <div className="color-list">
            <h4>Color</h4>
            <ul className="color-options">
                {colors.map((color) => (
                    <li key={color} onClick={() => handleClick(color)} style={{color: color, cursor: "pointer" , padding: "10px"}} className="{activeColor === color ? 'active' : ''}">
                        {color}
                    </li>
                ))}
            </ul>
            <p className="color-active">Active Color:{activeColor || 'None'}</p>
        </div>
    );
};
export default ColorList;