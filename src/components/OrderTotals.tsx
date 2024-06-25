import {OrderItem} from "../types";
import {useMemo} from "react";
import {formatCurrency} from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[]
}
function OrderTotals({order}: OrderTotalsProps) {

    // solo se renderiza cuando las propiedades hallan cambiado
    const subTotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0 ), [order])

    return (
      <>
          <div className={"space-y-3"}>
              <h2 className={"font-black text-2xl"}>Totales y Propinas</h2>
              <p> Subtotal a pagar: {" "}
                  <span className={"font-bold"}>{formatCurrency(subTotalAmount)}</span>
              </p>
              <p> Propina: {" "}
                  <span className={"font-bold"}>$0</span>
              </p>
              <p> Total a pagar: {" "}
                  <span className={"font-bold"}>$0</span>
              </p>
          </div>
          <button>

          </button>
      </>
    );
}

export default OrderTotals;