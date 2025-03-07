import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'm',
    L = 'l',
    XL = 'xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    square?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme = ButtonTheme.CLEAR,
        children,
        size = ButtonSize.M,
        square = false,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                { [cls.square]: square },
                [className, cls[theme], cls[size]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
