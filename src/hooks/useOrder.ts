import {useState} from "react";
import {MenuItem, OrderItem} from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState<number>(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.find((menuItem) => menuItem.id === item.id)
        if (itemExist) {
            const updateOrder = order.map(orderItem => orderItem.id === item.id ?
                {...orderItem, quantity: orderItem.quantity + 1} :
                orderItem
            )
            setOrder(updateOrder)
        }else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }

    }

    // remover el elemento del array de ordenes
    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    console.log("orden",order)
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem
    }
}