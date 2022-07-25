import { render } from '@testing-library/react';

import SomeComponent from './some-component';

describe('SomeComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SomeComponent />);
    expect(baseElement).toBeTruthy();
  });
});
