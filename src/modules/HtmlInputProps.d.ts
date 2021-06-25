import {} from 'react';

declare module 'react' {
    interface InputHTMLAttributes<T> {
        'data-testid'?: string;
    }
}
