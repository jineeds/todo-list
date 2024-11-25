import { ThemeProvider } from 'styled-components';
import { TodoProvider } from './TodoContext';
import { Children } from 'react';

export const Providers = ({ Children }) => {
    return (
        <ThemeProvider>
            {Children}
            <TodoProvider></TodoProvider>
        </ThemeProvider>
    );
};
