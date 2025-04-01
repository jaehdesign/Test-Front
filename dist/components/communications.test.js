import '@testing-library/jest-dom';
import { createCommunications } from './communications';
describe('Given createCommunications function', () => {
    describe('When called with valid Character', () => {
        let element;
        let character;
        beforeAll(() => {
            // Arrange
            character = {
                id: 1,
                name: 'TestName',
                family: 'TestFamily',
                age: 30,
                isAlive: true,
                reignYears: 10,
                message: 'Hola mundo',
                category: 'king',
            };
            element = createCommunications(character);
        });
        test('Then the component should be in the document', () => {
            // Assert
            expect(element).toBeInTheDocument();
        });
        test('Then the character info should be in the document', () => {
            // Assert
            expect(element).toHaveTextContent(character.message);
        });
    });
});
