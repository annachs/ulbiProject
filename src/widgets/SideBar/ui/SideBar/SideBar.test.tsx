import { fireEvent, screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from './SideBar';

describe('Sidebar', () => {
    test('Test', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleBt = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBt);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
