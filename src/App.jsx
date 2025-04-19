import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FormAction from './Components/FormAction/FormAction'
import HookForm from './Components/HookForm/HookForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import Uncontrolled from './Components/Uncontrolled/Uncontrolled'

function App() {

  return (
    <div className='m-8'>
      <h1 className='text-3xl'>React forms.</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlledField></ControlledField> */}
      {/* <Uncontrolled></Uncontrolled> */}
      <HookForm></HookForm>
    </div>
  )
}

export default App
