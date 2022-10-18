import {fireEvent, render, screen} from "@testing-library/react";
import Counter from "./Counter";
import {DialogProvider} from "@/providers/DialogProvider";

describe('Counter', () => {
  it('should start at 0', () => {
    render(<DialogProvider><Counter></Counter></DialogProvider>);
    expect(screen.getByText('Count is 0')).toBeTruthy();
  });

  it('should increment', () => {
    render(<DialogProvider><Counter></Counter></DialogProvider>);
    fireEvent.click(screen.getByText('Add'))
    expect(screen.getByText('Count is 1')).toBeTruthy();
    fireEvent.click(screen.getByText('Add'))
    expect(screen.getByText('Count is 2')).toBeTruthy();
  });
});
