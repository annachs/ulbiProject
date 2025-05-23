import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { SideBarItemType } from 'widgets/SideBar/model/items';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item: SideBarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo((props: SideBarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();

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
