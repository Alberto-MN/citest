import * as React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useName } from './name.hooks';


describe('useName specs', () => {
    it('should return an object with name equals "John Doe" and setName a function when it calls it', ()=> {
      // Arrange

      // Act
        const {result} = renderHook(()=>useName())
      // Assert 
      expect(result.current.name).toEqual('John Doe')
      expect(result.current.setName).toEqual(expect.any(Function));
    });

    it('should return an object with name equals "John Doe" and setName a function when it calls it', ()=> {
        // Arrange
            const newName="name";
            // Act
        const { result } = renderHook(() => useName());
        act(() => {
        result.current.setName(newName);
        });
        // Assert 
        expect(result.current.name).toEqual('name')
    });

  })
  