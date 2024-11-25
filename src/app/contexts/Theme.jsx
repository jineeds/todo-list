'use client';

const themes = {
    light: {
        background: 'bg-white',
        text: 'text-black',
        btn: 'bg-gray-800',
        input: 'bg-gray-800',
    },
    dark: {
        background: 'bg-gray-800',
        text: 'text-white',
        btn: 'bg-gray-200',
    },
};
// 생성
export const ThemeContext = createContext(themes.light);
// 공급
const ThemeProvider = () => {
    return <ThemeContext.Provider value={themes.light}>{childeren}</ThemeContext.Provider>;
};

// 사용
export const useTheme = () => {
    return useContent(ThemeContext);
};
