import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import Dark from "shared/assets/icons/theme-dark.svg";
import Light from "shared/assets/icons/theme-light.svg"

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

  return (
    <button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
        {theme === Theme.DARK ? <Dark /> : <Light />}
    </button>
  )
}
