import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

import { useAuth } from '../hooks/auth';

interface RoutesProps {
  onReady?: () => void;
}

export function Routes({ onReady }: RoutesProps) {
  const { user, isLoading } = useAuth();

  return (
    <NavigationContainer onReady={onReady}>
      {!isLoading && (user.id ? <AppRoutes /> : <AuthRoutes />)}
    </NavigationContainer>
  );
}
