import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            {'ArticleDetailsPage'}
        </div>
    );
}

export default memo(ArticleDetailsPage)