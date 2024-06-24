import {useState} from "react";
import {MenuItem, OrderItem} from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {
        console.log("Adding item", item)
        const newItem = {...item, quantity: 1}
        setOrder([...order, newItem])
    }

    console.log("orden",order)
    return {
        addItem
    }
}