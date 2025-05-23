import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    placeholder?: string;
    autofocus?: boolean;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        placeholder,
        autofocus,
        value,
        onChange,
        ...otherProps
    } = props;

    const { t } = useTranslation();

    const ref = useRef<HTMLInputElement>(null);

    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(e.target.selectionStart || 0);
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {
                placeholder && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )
            }
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {
                    isFocused && (
                        <span
                            className={cls.caret}
                            style={{ left: `${caretPosition * 9}px` }}
                        />
                    )
                }
            </div>
        </div>
    );
});
