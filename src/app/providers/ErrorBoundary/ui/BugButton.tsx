import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

// компонент для тестирования errorboundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    // так не работает, так как errorboundary не перехватывает ошибки в
    // обработчиках союытий, асинх коде, ыerver side rendering, Errors thrown in the error boundary itself (rather than its children)
    // const onThrow = () => {
    //     throw new Error();
    // };

    return (
        <Button onClick={onThrow}>
            {t('Бросить ошибку')}
        </Button>
    );
};
