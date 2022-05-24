import React from 'react';
import '../App.css';

const Item = (props) => {
    const { description, type, itemImages } = props;
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                fontFamily: 'Bungee' 
            }}>
                {type}
                <div>
                    {description}
                </div>
                <div>
                    <img src={itemImages} alt="clothes"style={{ 
                        width: "150px", 
                        height: "150px", 
                        objectFit: "cover" }} 
                        />
                </div>
            </div>
        </div>
    )
}
export default Item;
