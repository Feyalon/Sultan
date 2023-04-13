import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NotFound } from './../pages/notFound/NotFound';
describe('Render NotFound', () => {
    it('should find h1', () => {
        render(NotFound)
        const element = screen.getByTestId('NotFound')
        expect(screen.getByText(element)).toBeInTheDocument()
    });
});
