import * as React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useUser } from './user.hooks';
import { User } from './model';

describe('user hook test', () => {
    it('initial values', async()=> {
      // Arrange

      const initialUser:User = {
            name:'John',
            surname:'Doe',
         };

      // Act
      const { result,waitForNextUpdate } = renderHook(() => useUser(initialUser));


        //azzert
        expect(result.current.user).toEqual(initialUser);
        expect(result.current.setUser).toEqual(expect.any(Function));

        await waitForNextUpdate();
        expect(result.current.user).toEqual({
          name: 'Jane',
          surname: 'Smith',
        });
    });

    it('should return user with updated values and setUser method when it calls it', () => {
        // Arrange
        const initialUser: User = {
          name: 'John',
          surname: 'Doe',
        };
    
        // Act
        const { result } = renderHook(() => useUser(initialUser));
    
        act(() => {
          result.current.setUser({
            name: 'updated name',
            surname: 'updated surname',
          });
        });
    
        // Assert
        expect(result.current.user).toEqual({
          name: 'updated name',
          surname: 'updated surname',
        });
      });

});