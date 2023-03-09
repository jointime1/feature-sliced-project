import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/Currency';
import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps {
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
    className?: string;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        onChange,
        value,
        readonly,
        className,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <Select
            className={className}
            onChange={onChangeHandler}
            value={value}
            label={t('Укажите валюту')}
            options={options}
            readonly={readonly}
        />
    );
});
