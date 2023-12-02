import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({})
const mainColorsPalette = [
    {
        color: "#ececec",
        name: "white",
    },
    {
        color: "#222222",
        name: "black",
    },
    {
        color: "#6599ff",
        name: "blue",
    },
    {
        color: "#ffa500",
        name: "orange",
    },
    {
        color: "#59555b",
        name: "grey",
    }
];

export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState('carbon')
    const [leg, setLeg] = useState(0)
    
    const [mainColor, setMainColor] = useState(0)
    const [secondaryColor, setSecondaryColor] = useState(0)
    const [tirePosition, setTirePosition] = useState(0)
    const [rimsMaterial, setRimsMaterial] = useState("stealth")

    const [colorPosition, setColorPosition] = useState(null)
    const [topPosition, setTopPosition] = useState(null)
    const [spoilerPosition, setSpoilerPosition] = useState(null)
    const [boardPosition, setBoardPosition] = useState(null)
    
    
    return <CustomizationContext.Provider value={{
        material, setMaterial,
        leg, setLeg,
        mainColorsPalette, 
        mainColor, setMainColor,
        secondaryColor, setSecondaryColor,
        tirePosition, setTirePosition,
        colorPosition, setColorPosition,
        topPosition, setTopPosition,
        spoilerPosition, setSpoilerPosition,
        boardPosition, setBoardPosition,
        rimsMaterial, setRimsMaterial
    }}>
        {props.children}
    </CustomizationContext.Provider>
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext)
    return context
}