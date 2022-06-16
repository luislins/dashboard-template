import { ChangeEvent, createContext, useContext, useState } from 'react';

interface childrenProps {
    children?: React.ReactNode;
}

interface defaultStateIsClickedProps {
    chat: boolean,
    cart: boolean,
    userProfile: boolean,
    notification: boolean,
}

const defaultStateIsClicked : defaultStateIsClickedProps = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

interface AppContext {
    activeMenu ?: boolean,
    setActiveMenu : (value: boolean) => void;
    isClicked : defaultStateIsClickedProps,
    setIsClicked : (value: defaultStateIsClickedProps) => void;
    currentColor : string;
    setCurrentColor : (value : string) => void,
    currentMode ?: string;
    setCurrentMode : (value : string) => void,
    screenSize : number | null ;
    setScreenSize : (value : number | null) => void,
    themeSettings ?: boolean;
    setThemeSettings : (value : boolean) => void
    handleClick : (value : string) => void,
    defaultStateIsClicked ?: defaultStateIsClickedProps,
    setMode : (value : ChangeEvent<HTMLInputElement>) => void
    setColor : (value : string) => void
    
}

const defaultState : AppContext = {
    currentColor: "#03C9D7",
    screenSize: null,
    setActiveMenu: value => {return},
    setIsClicked: value => {return},
    setCurrentColor: value => {return},
    setCurrentMode: value => {return},
    setScreenSize: value => {return},
    setThemeSettings: value => {return},  
    setMode: value => {return},  
    setColor: value => {return},
    isClicked: defaultStateIsClicked,
    handleClick: value => {return},
};






const Context = createContext<AppContext>(defaultState);

export const ContextProvider: React.FC<childrenProps> = ({children}) =>{
    const [screenSize, setScreenSize] = useState<number | null>(null); // aqui era undefined
    const [currentColor, setCurrentColor] = useState<string>('#03C9D7');
    const [currentMode, setCurrentMode] = useState<string>('Light');
    const [themeSettings, setThemeSettings] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState<boolean>(true);
    const [isClicked, setIsClicked] = useState<defaultStateIsClickedProps>(defaultStateIsClicked);

    const setMode = (e : ChangeEvent<HTMLInputElement>) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color : string) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked : string) => setIsClicked({ ...defaultStateIsClicked, [clicked]: true });

    return (
        <Context.Provider value={{currentColor, currentMode, activeMenu, screenSize, setScreenSize, 
        handleClick, isClicked, defaultStateIsClicked, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode,
         setMode, setColor, themeSettings, setThemeSettings }}>
            {children}
        </Context.Provider>
    )
};
export const useStateContext = () => useContext(Context);
export default ContextProvider;
