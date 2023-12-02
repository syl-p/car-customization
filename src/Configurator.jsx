import { Route, Switch } from "wouter"
import { useCustomization } from "./contexts/Customization"

export default function Configurator() {
    const {material, setMaterial, setLeg, mainColorsPalette, setMainColor, setSecondaryColor, setRimsMaterial} = useCustomization()

    const setRims = (event, index) => {
        event.preventDefault()
        setRimsMaterial(index)
    }

    return <>
        <div className="fixed w-2/6 right-8 top-1/2 -translate-y-1/2">
            <Switch>
                <Route path="/exterior">
                    <h2 className="text-3xl mb-2 text-white uppercase">Paints</h2>
                    <section className="flex flex-col justify-center rounded-2xl bg-gray-600 bg-opacity-50 p-6">
                        <h3 className="text-xl mb-3 text-white">Main Color</h3>
                        <ul className="flex space-x-3 mb-6">
                            {mainColorsPalette.map((x, i) => <li key={x.name}>
                                <button className={`rounded-full text-white bg-transparent h-10 w-10`} 
                                    style={{backgroundColor: x.color}}
                                    onClick={() => setMainColor(i)}>
                                    <span className="sr-only">{x.name}</span>
                                </button>
                            </li>)}
                        </ul>
                        <h3 className="text-xl mb-3 text-white">Second Color</h3>
                        <ul className="flex space-x-3">
                            {mainColorsPalette.map((x, i) => <li key={x.name}>
                                <button className={`rounded-full text-white bg-transparent h-10 w-10`} 
                                    style={{backgroundColor: x.color}}
                                    onClick={() => setSecondaryColor(i)}>
                                    <span className="sr-only">{x.name}</span>
                                </button>
                            </li>)}
                        </ul>
                    </section>
                </Route>
                <Route path="/exterior/materials">
                    <h2 className="text-3xl mb-2 text-white uppercase">Material</h2>
                    <section className="flex flex-col justify-center rounded-2xl bg-gray-600 bg-opacity-50 p-6"> 
                        <ul className="flex space-x-6">
                            <li><button onClick={() => setMaterial('carbon')}>Carbon</button></li>
                            <li><button onClick={() => setMaterial('painted')}>Painted</button></li>
                        </ul>
                    </section>
                </Route>
                <Route path="/exterior/wheels">
                    <h2 className="text-3xl mb-2 text-white uppercase">Wheels and others details</h2>
                    <section className="flex flex-col justify-center rounded-2xl bg-gray-600 bg-opacity-50 p-6">
                        <h3 className="text-xl mb-3 text-white uppercase">Form</h3>
                        <ul className="flex space-x-6 mb-6">
                            <li><button onClick={() => setLeg(0)}>1</button></li>
                            <li><button onClick={() => setLeg(1)}>2</button></li>
                        </ul>
                        <h3 className="text-xl mb-3 text-white uppercase">Material</h3>
                        <ul className="flex space-x-6">
                            <li><button onClick={(event) => setRims(event, "stealth")}>Stealth</button></li>
                            <li><button onClick={(event) => setRims(event, "silver")}>Silver</button></li>
                        </ul>
                    </section>
                </Route>
                <Route path="/interior">
                    <h2 className="text-3xl mb-2 text-white uppercase">Wheels and others details</h2>
                    <section className="flex flex-col justify-center rounded-2xl bg-gray-600 bg-opacity-50 p-6">
                        <h3 className="text-xl mb-3 text-white uppercase">Form</h3>
                        <ul className="flex space-x-6 mb-6">
                            <li><button onClick={() => setLeg(0)}>1</button></li>
                            <li><button onClick={() => setLeg(1)}>2</button></li>
                        </ul>
                        <h3 className="text-xl mb-3 text-white uppercase">Material</h3>
                        <ul className="flex space-x-6">
                            <li><button onClick={() => setRimsMaterial("stealth")}>Stealth</button></li>
                            <li><button onClick={() => setRimsMaterial("silver")}>Silver</button></li>
                        </ul>
                    </section>
                </Route>
            </Switch>
        </div>
    </>
}