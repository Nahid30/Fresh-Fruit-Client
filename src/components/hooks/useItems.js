import { useEffect, useState } from "react";

const useItems = () => {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('https://shielded-tor-56845.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);

    return [carts, setCarts];
}

export default useItems;