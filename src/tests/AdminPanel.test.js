import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AdminPanel } from './../pages/adminpanel/AdminPanel';
describe('Render Basket', () => {
    it('should enable the "Add" button when a valid input is entered', () => {
        render(<AdminPanel />);
        const input = screen.getByTestId('name');
        fireEvent.change(input, {target: {value: 'test'}});
    });
});
