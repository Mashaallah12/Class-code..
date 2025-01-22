import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ControlForm1 from './controled/ControlForm1'
import ControledForms2 from './controled/ControledForms2'
import TodoWrapper from './toDoApp/TodoWrapper'
import LifeCycleCbc from './lifecycle/LifeCycleCbc'
import LifeCycleFBC from './lifecycle/LifeCycleFBC'
import SideEffects from './sideeffect/SideEffects'
import Parents1 from './context/Parents1'
import Parents2 from './context2/Parents2'
import Parents from './context3/Parents'


function App() {
  let [toggle, setToggle] = useState(false);
  return (
    <div>
      {/* <ControlForm1 />
      <ControledForms2 /> */}

      {/* <TodoWrapper /> */}

      {/* <button onClick={()=>setToggle(!toggle)}>clicked</button>
      {toggle ? <LifeCycleFBC /> : ""} */}

      {/* <LifeCycleFBC /> */}

      {/* <SideEffects/> */}

      {/* <Parents1 /> */}

      {/* <Parents2 /> */}

      <Parents />
    </div>
  )
}

export default App
