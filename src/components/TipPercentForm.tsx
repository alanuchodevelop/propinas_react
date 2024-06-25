import React from "react";

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipePercentProps = {
    // este tipo de valor viene del propio IDE
    setTip: React.Dispatch<React.SetStateAction<number>>
}

//NOTA: este signo " + " cambia el valor del event.target.value a numerico

function TipPercentForm({setTip}: TipePercentProps) {
    return (
        <div>
            <h3 className={"font-black text-2xl"}>Propinas</h3>
            <form action="">
                {tipOptions.map((tip) => (
                    <div className={"flex gap-2"} key={tip.id}>
                        <label htmlFor={tip.id}>{tip.label}</label>
                        <input type="radio"
                               id={tip.id}
                               value={tip.value}
                               name="tip"
                               onChange={ e => setTip(+e.target.value)}/>
                    </div>

                ))}
            </form>
        </div>
    );
}

export default TipPercentForm;