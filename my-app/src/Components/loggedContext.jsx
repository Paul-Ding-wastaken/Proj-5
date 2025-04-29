import { createContext, useState } from 'react';

// Create the context
export const LoggedContext = createContext();

// Create the provider
export function LoggedProvider({ children }) {
    const [logged, setLogged] = useState(false);

    return (
        <LoggedContext.Provider value={{ logged, setLogged }}>
            {children}
        </LoggedContext.Provider>
    );
}

export default LoggedContext;