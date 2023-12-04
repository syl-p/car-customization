import { Route, Switch } from "wouter"
import { useCustomization } from "./contexts/Customization"

export default function Configurator() {
    const { material, setMaterial, setLeg, mainColorsPalette, setMainColor, setSecondaryColor, secondColor, setRimsMaterial } = useCustomization()

    const setRims = (event, index) => {
        event.preventDefault()
        setRimsMaterial(index)
    }

    return <>
        <div className="fixed w-2/6 right-8 top-1/2 -translate-y-1/2">
            <Switch>
                <Route path="/exterior/materials">
                    <h2 className="text-3xl mb-2 text-white uppercase">Material</h2>
                    <section className="flex flex-col justify-center rounded-2xl bg-gray-600 bg-opacity-50 p-6">
                        <h3 className="text-2xl mb-3">Spoiler && top material</h3>
                        <ul className="flex flex-col space-y-2">
                            <li>
                                <button className={`roundex-xl w-full ${material == 'carbon' ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setMaterial('carbon')}>Carbon texture</button>
                            </li>
                            <li>
                                <button className={`roundex-xl w-full ${material == 'painted' ? 'bg-white' : 'bg-gray-500'}`} onClick={() => setMaterial('painted')}>Use Secondary color</button>
                            </li>
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