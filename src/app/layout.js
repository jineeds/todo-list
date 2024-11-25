'use client';

import { createContext, useContext } from 'react';
import './globals.css';
import classNames from 'classnames';
import { TodoProvider } from './contexts/TodoContext';
import { ThemeProvider } from 'styled-components';
import { Providers } from './contexts';

export const ThemeContext = createContext(themes.light);

const ToggleButton = () => {
    const theme = useContext(ThemeContext);

    return <button className={classNames(theme.btn, 'p-2 rounded mx-8 mt-4')}>색상 변경</button>;
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Providers>
                <ThemeProvider>
                    <ThemeContext.Provider value={themes.dark}>
                        <body>
                            <ToggleButton />
                            {children}
                        </body>
                    </ThemeContext.Provider>
                </ThemeProvider>
            </Providers>
        </html>
    );
}
