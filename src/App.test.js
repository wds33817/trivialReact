import { fireEvent, render, screen } from '@testing-library/react';
import Comment from '../src/pages/Comment';

describe('Comment Form', () => {
  test('Submission is disabled if score is lower than 5 and there is no feedback', () => {
    const handleSubmit = jest.fn();
    render(<Comment onSubmit={handleSubmit} />);
    //debug();
    const rangeInput = screen.getByLabelText(/Score:/);

    fireEvent.change(rangeInput, { target: { value: '4' } });

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute('disabled');
  });
});
