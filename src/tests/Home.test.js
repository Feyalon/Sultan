import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './../pages/homePage/Home';

describe('Home', () => {
    it('Render Home', () => {
        const {renderHome} = render(<Home />);
        expect(renderHome).toMatchSnapshot();
        
    });
    
    it('Click-pagination', () => {
        render(<Home />); 
        const btn = screen.getByText('Следующий')
        fireEvent.click(btn)
        
    });
});
