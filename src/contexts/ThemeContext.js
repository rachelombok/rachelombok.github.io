import React, {
    createContext,
    useContext,
    useState
} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('cupcake');

    const toggleTheme = () => {
        if (['cupcake', 'light', 'dark'].includes(theme)) {
            setTheme(theme === 'light' ? 'dark' : 'light'); // add param newtheme
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);