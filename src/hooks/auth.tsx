import React, { createContext, useContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as GoogleAuthentication from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface UserInfoGoogle {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

interface AuthContextProps {
  user: User;
  signInWithGoogle: (
    options?: AuthRequestPromptOptions
  ) => Promise<AuthSessionResult>;
  signInWithApple: () => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  WebBrowser.maybeCompleteAuthSession();

  const userStorageKey = '@gofinances:user';

  const [request, response, signInWithGoogle] =
    GoogleAuthentication.useAuthRequest({
      expoClientId:
        '645899531666-gpga0973uinu83nj3070imo1o8r8vj1h.apps.googleusercontent.com',
      iosClientId:
        '645899531666-dtobvtu2g59cap6f59q1ntek725crlrh.apps.googleusercontent.com',
      androidClientId:
        '645899531666-k6vrlc4g3f8k1ko9tmgh4hnj18tp474q.apps.googleusercontent.com',
    });

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken);

      accessToken && fetchInfo();
    }

    async function loadUserStorage() {
      const userStorage = await AsyncStorage.getItem(userStorageKey);

      if (userStorage) {
        const userLogged = JSON.parse(userStorage) as User;

        setUser(userLogged);
        setIsLoading(false);
      }
    }

    loadUserStorage();
  }, [response, accessToken]);

  async function fetchInfo() {
    try {
      let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const userInfo: UserInfoGoogle = await response.json();

      const userLogged = {
        id: userInfo.id,
        email: userInfo.email,
        name: userInfo.name,
        photo: userInfo.picture,
      };

      setUser(userLogged);

      await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signInWithApple() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const name = credential.fullName!.givenName!;
        const photo = `https://ui-avatars.com/api/?name=${name}&length=1`;

        const userLogged = {
          id: String(credential.user),
          email: credential.email!,
          name,
          photo,
        };

        setUser(userLogged);
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signOut() {
    setUser({} as User);

    await AsyncStorage.removeItem(userStorageKey);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signInWithApple,
        signOut,
        isLoading: isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
