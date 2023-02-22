import { useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const throwErr = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error('');
        }
    }, [error]);
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={throwErr} className={classNames('', {}, [className])}>
            Error throw
        </Button>
    );
};
