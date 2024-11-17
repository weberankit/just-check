import React from "react"
//import IDentiy from "./components/IDentiy"
//import imageUt from "./assets/images/mqdefault.jpg"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import MainComponent from "./component/MainComponent"
function App() {
 
  
const path=createBrowserRouter([

{
  path:"/",
  element:<MainComponent/>
}
  
 
])




  return (
<>
<Provider store={appStore}>
   <RouterProvider router={path}/>
</Provider>
{
   /* //[& > *]
   <img src="/vite.svg"></img>
   <img src={imageUt}></img>*/
}

</>
  )
}

export default App
