import { Html } from "@react-three/drei";
import { useCustomization } from "./contexts/Customization";
import { useEffect, useRef } from "react";
import { Route, Switch } from "wouter";

export default function Hud() {
    const { mainColorsPalette, mainColor, setMainColor, secondaryColor, setSecondaryColor, colorPosition, tirePosition, spoilerPosition, topPosition, boardPosition } = useCustomization()
    const hudColor = useRef()

    useEffect(() => {
        console.log(topPosition)
    }, [colorPosition, tirePosition])

    return <>
        <Switch>
            <Route path="/exterior">
                <Html ref={hudColor} position={colorPosition} className="relative flex space-x-3 items-center" hidden>
                    <div className="w-5 h-5 rounded-full border-2" style={{ backgroundColor: mainColorsPalette[mainColor].color }}></div>
                    {/* TWEAKS HERE */}
                    <div className="bg-white bg-opacity-80 p-3 rounded-xl
                    ">
                        <p className="font-bold mb-1">Couleur principales</p>
                        <ul className="flex space-x-3">
                            {mainColorsPalette.map((x, i) => (
                                <li key={i} onClick={() => setMainColor(i)} className="w-5 h-5 cursor-pointer rounded-full border-2" style={{ backgroundColor: x.color }}></li>
                            ))}
                        </ul>
                    </div>
                </Html>
                <Html ref={hudColor} position={tirePosition} className="relative flex space-x-3 items-center" hidden>
                    <div className="w-5 h-5 rounded-full border-2" style={{ backgroundColor: mainColorsPalette[secondaryColor].color }}></div>
                    {/* TWEAKS HERE */}
                    <div className="bg-white bg-opacity-80 p-3 rounded-xl">
                        <p className="font-bold mb-1">Couleur secondaire</p>
                        <ul className="flex space-x-3">
                            {mainColorsPalette.map((x, i) => (
                                <li key={i} onClick={() => setSecondaryColor(i)} className="w-5 h-5 cursor-pointer rounded-full border-2" style={{ backgroundColor: x.color }}></li>
                            ))}
                        </ul>
                    </div>
                </Html>
            </Route>
            <Route path="/exterior/wheels">
                <Html ref={hudColor} position={tirePosition} hidden>
                    <div className="w-5 h-5 rounded-full border-2 bg-white"></div>
                </Html>
            </Route>
            <Route path="/interior">
                <Html ref={hudColor} position={boardPosition} hidden>
                    <div className="w-5 h-5 rounded-full border-2"></div>
                </Html>
            </Route>
        </Switch>
    </>
}