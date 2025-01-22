import { renderHook } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { describe } from 'vitest';
import { withHistory } from '../utils/mock-components';
import useScrollToTop from './use-scroll-to-top';

describe('Hook: useScrollToTop', () => {
  it('Should scroll to top when pathname changes to "/offer/:id"', () => {
    const scrollToMock = vi.fn();
    global.scrollTo = scrollToMock;
    const history = createMemoryHistory();

    renderHook(() => useScrollToTop(), {
      wrapper: ({ children }) => withHistory(children, history),
    });

    history.push('/offer/123');

    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  });
});
