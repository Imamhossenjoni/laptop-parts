import { useEffect, useState } from "react";

const usePartDetails = partId => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/parts/${partId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // setProduct(data)
                console.log(data);
            })
    }, [partId]);
    return [product, setProduct]
}
export default usePartDetails;