import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import usePartDetails from '../hooks/usePartDetails';

const PartDetails = () => {
    const { partId } = useParams()
    const [product, setProduct] = usePartDetails(partId);
    console.log(product);
    return (
        <div>
            <h2>yOUR PRODUCT ID:{partId}</h2>
            <h2>Name:{product?.name}</h2>
        </div>
    );
};

export default PartDetails;