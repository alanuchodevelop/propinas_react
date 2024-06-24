import {useState} from "react";
import {MenuItem, OrderItem} from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {
        console.log("Adding item", item)
        const itemExist = order.find((item) => item.id === item.id)
        if (itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity:
            orderItem.quantity + 1} : orderItem)
            setOrder(updateOrder)
        }else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }

    }

    console.log("orden",order)
    return {
        addItem
    }
}