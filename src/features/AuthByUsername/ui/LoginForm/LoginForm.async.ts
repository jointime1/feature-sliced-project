import { LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { FC, lazy } from 'react';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() =>
    // eslint-disable-next-line no-new, implicit-arrow-linebreak
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(import('./LoginForm'));
        }, 2000);
    }));
