import { Modal } from 'shared/ui/Modal/Modal';
import { memo, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginFormAsync';

interface LoginModalProps {
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
    const {
        isOpen,
        onClose,
    } = props;

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                lazy
            >
                <Suspense fallback={<Loader />}>
                    <LoginForm onSuccess={onClose} />
                </Suspense>
            </Modal>
        </div>
    );
});
