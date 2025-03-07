import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const toggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.NavBar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={toggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal
                isOpen={isAuthModal}
                onClose={toggleModal}
            >
                {/* eslint-disable-next-line */}
                {t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vel, perferendis sit, ullam molestiae soluta quo dolor nulla tempore nostrum, natus explicabo inventore veniam voluptas. Voluptas odio accusamus architecto tenetur.')}
            </Modal>
        </div>
    );
};
