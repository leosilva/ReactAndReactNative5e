import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ButtonWithEvent from './ButtonWithEvent'
// import App from './App.jsx'
// import MyComponent from './MyComponent.jsx'
// import MyButton from './MyButton.jsx'
// import MySection from './MySection.jsx'
// import DynamicComponent from './DynamicComponent.jsx'
import CollectionComponent from './CollectionComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <MyComponent /> */}
    {/* <App /> */}
    {/* <MySection>
        <MyButton>My Button Text</MyButton>
    </MySection> */}
    {/* <DynamicComponent /> */}
    {/* <ButtonWithEvent /> */}
    <CollectionComponent />
  </StrictMode>,
)
