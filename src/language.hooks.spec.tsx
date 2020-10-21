import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { LanguageProvider } from './language.context';
import { useLanguage } from './language.hooks';


describe('useLanguage specs', () => {
  it('comprobar que el context esta inicializado en ES', () => {
    // Arrange
   /* const provider: React.FunctionComponent=(props)=>{

      return <LanguageProvider>{props.children}</LanguageProvider>;
    }*/


    // Act
    const  {result}= renderHook(()=>useLanguage(),{wrapper:LanguageProvider,});

    act(() => {
        result.current.setLanguage('es');
      })
  

    // Assert
    expect(result.current.message).toEqual('The current language is: es');
  });

  it('comprobar que el context esta seteado a algo', () => {
    // Arrange
   /* const provider: React.FunctionComponent=(props)=>{

      return <LanguageProvider>{props.children}</LanguageProvider>;
    }*/


    // Act
    const  {result}= renderHook(()=>useLanguage(),{wrapper:LanguageProvider,});

    act(() => {
        result.current.setLanguage('EN');
      })
  

    // Assert
    expect(result.current.message).toEqual('The current language is: EN');
  });


});