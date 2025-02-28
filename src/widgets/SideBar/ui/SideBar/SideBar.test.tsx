import { fireEvent, screen } from '@testing-library/react';
import componentRender from 'shared/lib/tests/componentRender/componentRender';
import { SideBar } from './SideBar';

describe('Sidebar', () => {
    test('Test', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        componentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        const toggleBt = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBt);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
