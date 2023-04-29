import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() =>
    // eslint-disable-next-line no-new, implicit-arrow-linebreak
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(import('./AddCommentForm'));
        }, 2000);
    }));
