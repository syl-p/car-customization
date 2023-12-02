import { Html } from "@react-three/drei";
import { useCustomization } from "./contexts/Customization";
import { useEffect, useRef } from "react";
import { Route, Switch } from "wouter";

export default function Hud() {
    const {mainColorsPalette, mainColor, secondaryColor, colorPosition, tirePosition, spoilerPosition, topPosition, boardPosition} = useCustomization()
    const hudColor = useRef()

    useEffect(() => {
        console.log(topPosition)
    }, [colorPosition, tirePosition])
    
    return <>
        <Switch>
            <Route path="/exterior">
                <Html ref={hudColor} position={colorPosition} hidden>
                    <div className="w-5 h-5 rounded-full border-2" style={{backgroundColor: mainColorsPalette[mainColor].color}}></div>
                </Html>
                <Html ref={hudColor} position={tirePosition} hidden>
                    <div className="w-5 h-5 rounded-full border-2" style={{backgroundColor: mainColorsPalette[secondaryColor].color}}></div>
                </Html>
            </Route>
            <Route path="/exterior/materials">
                <Html ref={hudColor} position={topPosition} hidden>
                    <div className="w-5 h-5 rounded-full border-2"></div>
                </Html>
                <Html ref={hudColor} position={spoilerPosition} hidden>
                    <div className="w-5 h-5 rounded-full border-2"></div>
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