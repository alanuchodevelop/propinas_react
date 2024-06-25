import {menuItems} from "./data/db.ts";
import MenuItem from "./components/MenuItem.tsx";
import useOrder from "./hooks/useOrder.ts";
import OrderContents from "./components/OrderContents.tsx";
import OrderTotals from "./components/OrderTotals.tsx";
import TipPercentForm from "./components/TipPercentForm.tsx";

function App() {
    // funciones que se regresan del hook
    const {order,addItem, removeItem, tip, setTip, placeOrder} = useOrder();
      return (
            <>
                <header className="bg-teal-400 py-5">
                   <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
                </header>
                <main className="max-w-7xl mx-auto py-20 px-6 lg:px-8 grid md:grid-cols-2">
                    <div>
                        <h2 className={"text-4xl font-black"}>Menu</h2>
                        {menuItems.map((menuItem) => (
                            <MenuItem
                            key={menuItem.id}
                            item={menuItem}
                            addItem={addItem}
                            />
                        ))}
                    </div>
                    <div className={"border border-dashed border-slate-300 p-5 rounded-lg space-y-10"}>
                        {order.length > 0 ? (
                            <>
                                <OrderContents
                                    order ={ order}
                                    removeItem={removeItem}
                                />
                                <TipPercentForm
                                    setTip={setTip}
                                    tip={tip}
                                />
                                <OrderTotals
                                    tip={tip}
                                    order={order}
                                    placeOrder={placeOrder}
                                />
                            </>
                        ) : (
                            <p className={"text-center"}>La orden esta vacía</p>
                        )}
                    </div>
                </main>
            </>
      )
}

export default App
