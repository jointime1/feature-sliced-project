import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArtilceTextBlockComponent.module.scss';

interface ArtilceTextBlockComponentProps {
    className?: string;
}

export const ArtilceTextBlockComponent: FC<ArtilceTextBlockComponentProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.artilceTextBlockComponent, {}, [className])}>

        </div>
    );
}