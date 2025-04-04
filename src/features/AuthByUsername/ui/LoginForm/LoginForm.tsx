import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../modal/slice/loginSlice';
import { getLoginState } from '../../modal/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../modal/services/loginByUserName/loginByUserName';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Неверное имя пользователя или пароль')} theme={TextTheme.ERROR} />}
            <Input
                className={cls.input}
                placeholder={t('Введите username')}
                autoFocus
                value={username}
                onChange={onUsernameChange}
            />
            <Input
                className={cls.input}
                placeholder={t('Введите пароль')}
                value={password}
                onChange={onPasswordChange}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
