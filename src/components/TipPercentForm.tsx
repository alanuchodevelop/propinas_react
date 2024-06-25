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
    tip: number
}

//NOTA: este signo " + " cambia el valor del event.target.value a numerico

function TipPercentForm({setTip, tip}: TipePercentProps) {
    return (
        <div>
            <h3 className={"font-black text-2xl"}>Propinas</h3>
            <form action="">
                {tipOptions.map((tipOption) => (
                    <div className={"flex gap-2"} key={tipOption.id}>
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input type="radio"
                               id={tipOption.id}
                               value={tipOption.value}
                               name="tip"
                               onChange={ e => setTip(+e.target.value)}
                               checked={tipOption.value === tip}
                        />
                    </div>

                ))}
            </form>
        </div>
    );
}

export default TipPercentForm;