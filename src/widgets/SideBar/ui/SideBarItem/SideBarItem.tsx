import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { SideBarItemType } from 'widgets/SideBar/model/items';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo((props: SideBarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const auth = useSelector(getUserAuthData);

    if (!auth && item.authOnly) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <item.Icon className={cls.icon} width={20} height={20} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
