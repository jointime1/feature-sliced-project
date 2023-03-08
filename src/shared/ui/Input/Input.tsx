import React, {
    InputHTMLAttributes, memo, useEffect, useMemo, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: string) => void;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const mods = useMemo(
        () => ({ [cls.readonly]: readonly }),
        [readonly],
    );

    return (
        <div className={classNames(cls.Input, mods, [className])}>
            <input
                ref={ref}
                className={cls.input}
                value={value}
                onChange={onChangeHandler}
                type={type}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
