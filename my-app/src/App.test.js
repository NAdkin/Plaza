import { render, screen } from '@testing-library/react';
import App from './App';
import { data as EVENTS } from '../fixtures/events.json'


it('should show the title, price, description, datetime, duration, of an event when rendered', () => {

// Arrange
const expectedEvents = [EVENTS[0]]
  
render(<App events={expectedEvents}/>)

// Act

// Assert
expect(screen.getByText(expectedEvents[0].title)).not.toBeNull()
expect(screen.getByText(expectedEvents[0].price)).not.toBeNull()
expect(screen.getByText(expectedEvents[0].description)).not.toBeNull()
expect(screen.getByText(expectedEvents[0].datetime)).not.toBeNull()
expect(screen.getByText(expectedEvents[0].duration)).not.toBeNull()

})