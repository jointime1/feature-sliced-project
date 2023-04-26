import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text?: string
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text || '');
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button
                onClick={onCopy}
                className={cls.copyBtn}
                theme={ButtonTheme.CLEAR}
            >
                <Icon Svg={CopyIcon} className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>

    );
});
