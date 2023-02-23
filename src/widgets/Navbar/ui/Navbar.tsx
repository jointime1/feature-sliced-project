import { t } from 'i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink to="/" theme={AppLinkTheme.SECONDARY}>{t('Главная')}</AppLink>
            <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>{t('О странице')}</AppLink>

        </div>
    </div>
);
