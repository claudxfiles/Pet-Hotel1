import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type UserType = {
  id: string;
  name: string;
  email: string;
  type: 'owner' | 'provider';
  businessName?: string;
};

type AuthContextType = {
  user: UserType | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => void;
  register: (userData: Partial<UserType>) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email: string, password: string) => {
    // In a real app, this would validate credentials with an API
    // For the MVP, we'll just simulate a successful login
    const mockUser: UserType = {
      id: 'u1',
      name: 'John Doe',
      email: email,
      type: 'owner'
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const register = (userData: Partial<UserType>) => {
    // In a real app, this would send the data to an API for registration
    // For the MVP, we'll simulate a successful registration
    const newUser: UserType = {
      id: `u${Math.floor(Math.random() * 1000)}`,
      name: userData.name || 'New User',
      email: userData.email || 'user@example.com',
      type: userData.type || 'owner',
      ...(userData.businessName && { businessName: userData.businessName })
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      isLoading,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
