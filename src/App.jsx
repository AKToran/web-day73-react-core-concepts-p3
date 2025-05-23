import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FamilyTree from './Components/FamilyTree/FamilyTree'
import FormAction from './Components/FormAction/FormAction'
import HookForm from './Components/HookForm/HookForm'
import ProductManagement from './Components/ProductManagement/ProductManagement'
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
      {/* <HookForm></HookForm> */}
      {/* <ProductManagement></ProductManagement> */}
      <FamilyTree></FamilyTree>
    </div>
  )
}

export default App
