import {menuItems} from "./data/db.ts";
import MenuItem from "./components/MenuItem.tsx";
import useOrder from "./hooks/useOrder.ts";

function App() {
    const {addItem} = useOrder();
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
                        <div>
                            <h2>Consumo</h2>
                        </div>
                    </main>
            </>
      )
}

export default App
