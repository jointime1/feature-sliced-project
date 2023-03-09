import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/Country';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps {
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
  className?: string;
}

const options = [
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.ARMENIA, content: Country.ARMENIA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        onChange,
        value,
        readonly,
        className,
    } = props;

    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <Select
            className={className}
            onChange={onChangeHandler}
            value={value}
            label={t('Укажите страну')}
            options={options}
            readonly={readonly}
        />
    );
});
