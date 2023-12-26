import { vi, test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Create from './Create';

vi.mock('react-router-dom', async () => {
    const mod: any = await vi.importActual('react-router-dom');
    return {
        ...mod,
        useLocation: () => ({
            state: {
                table: 'IDR-2',
                occasion: 'Anniversary',
                date: '2022-01-01',
                time: '18:00',
                guests: 4,
                name: 'John Doe',
                email: 'john@gmail.com',
                phone: '0995691343',
                comments: 'No special requests',
            }
        }),
        useNavigate: () => vi.fn(),
    };
});

// Mock useMediaQuery hook
vi.mock('@hooks/useMediaQuery', async () => {
    const mod: any = await vi.importActual('@hooks/useMediaQuery');
    return {
        ...mod,
        __esModule: true,
        default: () => false,
    };
});

test('renders the form and submits it', async () => {
    const dispatch = vi.fn();
    const state = {
        selectedTable: 'IDR-2',
        tables: [
            {
                label: 'IDR-2',
                left: 100,
                top: 100,
                state: 'available',
                availableTimes: ['17:00', '18:00'],
            },
            {
                label: 'OR-2',
                left: 200,
                top: 200,
                state: 'available',
                availableTimes: ['19:00', '20:00'],
            },
        ],
    };
    const { getByText } = render(
        <Create state={state} dispatch={dispatch} />
    );

    const reservationTitle = getByText('Book your table');
    expect(reservationTitle);

    // Submit the form
    fireEvent.click(getByText('Make Your reservation'));

    // Check that the value of table on the local storage is IDR-2 during submit
    expect(localStorage.getItem('table')).toBe('IDR-2');
});
