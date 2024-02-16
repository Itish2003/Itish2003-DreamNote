import React, { createContext, useContext, useState } from 'react';

// Create a context with an initial value of null
const UserContext = createContext(null);

// Create a provider component to wrap your entire app
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    // Define a function to update the userData
    const updateUser = (newUserData) => {
        console.log('Updating user data:', newUserData);
        setUserData(newUserData);
    };

    return (
        <UserContext.Provider value={{ userData, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Create a custom hook to use the context
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
