import React from 'react';
import StringNumber from './StringNumber';
import ButtonBoolean from './ButtonBoolean';
import Expression from './Expression';
import UserObject from './UserObject';
function App()
{
  const countA=100;
  const countB=200;

  const user={name:"smrithi", proffession:"cricketer", centuries:"2"}
  return(
    <>
    <StringNumber name="Dhoni" age="41" />
    <ButtonBoolean disabled />
    <Expression count={countA*countB} />
    <UserObject user={userobj} />
    </>
  )
}
export default App;