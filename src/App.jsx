import React from 'react';
import StringNumber from './StringNumber';
import ButtonBoolean from './ButtonBoolean';
function App()
{
  return(
    <>
    <StringNumber name="Dhoni" age="41" />
    <ButtonBoolean disabled />
    </>
  )
}
export default App;