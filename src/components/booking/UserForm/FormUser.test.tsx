import { render, screen, fireEvent } from '@testing-library/react';
import UserForm from './UserForm';

describe('UserForm', () => {
    let name = '';
    let nameError = '';
    let email = '';
    let phone = '';
    let phoneError = '';
    let comments = '';

    const setName = (value: string) => {
        name = value;
    };
    const setNameError = (value: string) => {
        nameError = value;
    };
    const setEmail = (value: string) => {
        email = value;
    };
    const setPhone = (value: string) => {
        phone = value;
    };
    const setPhoneError = (value: string) => {
        phoneError = value;
    };
    const setComments = (value: string) => {
        comments = value;
    };


    test('renders the component', () => {
        render(<UserForm
            name={name}
            nameError={nameError}
            setName={setName}
            setNameError={setNameError}
            email={email}
            setEmail={setEmail}
            phone={phone}
            phoneError={phoneError}
            setPhone={setPhone}
            setPhoneError={setPhoneError}
            comments={comments}
            setComments={setComments}
        />);
        
        const userFormElement = screen.getByText('Customer Information');
        expect(userFormElement);
    });

    test('validates name input', () => {
        const {rerender} = render(<UserForm
            name={name}
            nameError={nameError}
            setName={setName}
            setNameError={setNameError}
            email={email}
            setEmail={setEmail}
            phone={phone}
            phoneError={phoneError}
            setPhone={setPhone}
            setPhoneError={setPhoneError}
            comments={comments}
            setComments={setComments}
        />);
        const nameInput = screen.getByPlaceholderText('Enter your name');
        fireEvent.change(nameInput, { target: { value: 'Jo' } });
        rerender(<UserForm
            name={name}
            nameError={nameError}
            setName={setName}
            setNameError={setNameError}
            email={email}
            setEmail={setEmail}
            phone={phone}
            phoneError={phoneError}
            setPhone={setPhone}
            setPhoneError={setPhoneError}
            comments={comments}
            setComments={setComments}
        />);
        expect(nameError).toBe('Name must be at least 3 characters long.'); 
    });

    test('name is valid', () => {
        const {rerender} = render(<UserForm
            name={name}
            nameError={nameError}
            setName={setName}
            setNameError={setNameError}
            email={email}
            setEmail={setEmail}
            phone={phone}
            phoneError={phoneError}
            setPhone={setPhone}
            setPhoneError={setPhoneError}
            comments={comments}
            setComments={setComments}
        />);
        const nameInput = screen.getByPlaceholderText('Enter your name');
        fireEvent.change(nameInput, { target: { value: 'John' } });
        rerender(<UserForm
            name={name}
            nameError={nameError}
            setName={setName}
            setNameError={setNameError}
            email={email}
            setEmail={setEmail}
            phone={phone}
            phoneError={phoneError}
            setPhone={setPhone}
            setPhoneError={setPhoneError}
            comments={comments}
            setComments={setComments}
        />);
        expect(nameError).toBe(''); 
    });

    test('validates phone input', () => {
        const {rerender} = render(<UserForm
            name={name}
            nameError={nameError}
            setName={setName}
            setNameError={setNameError}
            email={email}
            setEmail={setEmail}
            phone={phone}
            phoneError={phoneError}
            setPhone={setPhone}
            setPhoneError={setPhoneError}
            comments={comments}
            setComments={setComments}
        />);
        const phoneInput = screen.getByPlaceholderText('Enter your phone number');
        fireEvent.change(phoneInput, { target: { value: '123456789' } });
        rerender(<UserForm
            name={name}
            nameError={nameError}
            setName={setName}
            setNameError={setNameError}
            email={email}
            setEmail={setEmail}
            phone={phone}
            phoneError={phoneError}
            setPhone={setPhone}
            setPhoneError={setPhoneError}
            comments={comments}
            setComments={setComments}
        />);
        expect(phoneError).toBe('Phone number must be at least 10 characters long.'); 
    });

    test('phone is valid', () => {
        const {rerender} = render(<UserForm
            name={name}
            nameError={nameError}
            setName={setName}
            setNameError={setNameError}
            email={email}
            setEmail={setEmail}
            phone={phone}
            phoneError={phoneError}
            setPhone={setPhone}
            setPhoneError={setPhoneError}
            comments={comments}
            setComments={setComments}
        />);
        const phoneInput = screen.getByPlaceholderText('Enter your phone number');
        fireEvent.change(phoneInput, { target: { value: '1234567890' } });
        rerender(<UserForm
            name={name}
            nameError={nameError}
            setName={setName}
            setNameError={setNameError}
            email={email}
            setEmail={setEmail}
            phone={phone}
            phoneError={phoneError}
            setPhone={setPhone}
            setPhoneError={setPhoneError}
            comments={comments}
            setComments={setComments}
        />);
        expect(phoneError).toBe(''); 
    });
});
