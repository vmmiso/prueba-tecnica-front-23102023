import { fireEvent, render, screen } from '@testing-library/react';

import AddFavoriteButton from './AddFavoriteButton';

describe('AddFavoriteButton', () => {
  beforeEach(() => {
    render(<AddFavoriteButton movieId={0} />);
  });

  test('should display', () => {
    expect(screen.getByRole('button')).toBeDefined();
  });

  test('should add to favorite', () => {
    const button = screen.getByText('Add fav');
    fireEvent.click(button);
    expect(screen.getByText('Del fav')).toBeDefined();
  });

  test('should delete from favorite', () => {
    const button = screen.getByText('Del fav');
    fireEvent.click(button);
    expect(screen.getByText('Add fav')).toBeDefined();
  });
});
