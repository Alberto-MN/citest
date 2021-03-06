import { renderHook } from '@testing-library/react-hooks';
import { usePolling } from './polling.hooks';

describe('usePolling specs', () => {
  it('should return count equals 1 when it waits for next update', async() => {
    // Arrange

    // Act
    const { result, waitForNextUpdate } = renderHook(() => usePolling());
    await waitForNextUpdate();
    // Assert
    expect(result.current.count).toEqual(1);
  });

  it('should return count equals 1 when it waits for next update', async() => {
    // Arrange

    // Act
    const { result, waitForValueToChange } = renderHook(() => usePolling());
    await waitForValueToChange(() => result.current.count === 3);
    // Assert
    expect(result.current.count).toEqual(3);
  });


it ('desmontar',async()=>{
    // Arrange
    const stub = jest.spyOn(window,'clearInterval');
    // Act
    const { result, unmount } = renderHook(() => usePolling());
    // Assert
    expect(stub).not.toHaveBeenCalled();
    unmount();
    expect(stub).toHaveBeenCalled();
});

});
