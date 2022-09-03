import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuProvider = props => {
    const [menuItems, setMenuItems] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const reloadMenuItems = async () => {
        setLoading(true)
        const res = await fetch('/api/menu-item');
        const resData = await res.json();

        if (res.status === 200) {
            setMenuItems(resData.items);
        } else {
            setError(resData.message);
        }

        setLoading(false);
    }

    return <MenuContext.Provider value={{ menuItems, reloadMenuItems, loading, error }}>
        {props.children}
    </MenuContext.Provider>
}

export default MenuProvider