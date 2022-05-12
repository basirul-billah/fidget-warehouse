import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/itemdetails/${itemId}`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])

    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    );
};

export default ItemDetails;