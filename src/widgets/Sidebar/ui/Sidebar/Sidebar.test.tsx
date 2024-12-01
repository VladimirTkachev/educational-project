import { fireEvent, screen } from '@testing-library/react';
import {
  renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('default render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('default render', () => {
    renderWithTranslation(<Sidebar />);

    const toggleBtn = screen.getByTestId('sidebar-toggle');

    fireEvent.click(toggleBtn);

    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
