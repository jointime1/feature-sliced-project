import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArtilceTextBlockComponent.module.scss';

interface ArtilceTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

export const ArtilceTextBlockComponent = memo((props: ArtilceTextBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.artilceTextBlockComponent, {}, [className])}>

            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((paragraph) => (
                <Text
                    key={paragraph}
                    className={cls.paragraph}
                    text={paragraph}
                />
            ))}
        </div>
    );
});
