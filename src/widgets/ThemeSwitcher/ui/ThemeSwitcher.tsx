import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import Dark from 'shared/assets/icons/theme-dark.svg';
import Light from 'shared/assets/icons/theme-light.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme} theme={ThemeButton.CLEAR}>
            {theme === Theme.DARK ? <Dark /> : <Light />}
        </Button>
    );
};
