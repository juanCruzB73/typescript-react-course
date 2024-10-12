import { FC,useState } from 'react';
import { InputsFields } from './components/InputsFields';


//FC FUNCTIONAL COMPONENET
export const  App: FC=()=>{
  const [count, setCount] = useState(0)

  return (
    <>
      <span>taksm manager</span>
      <InputsFields/>
    </>
  )
}
