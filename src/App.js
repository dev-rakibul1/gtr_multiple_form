import React from 'react'
import { RouterProvider } from 'react-router-dom'
import GtrForm from './pages/form/GtrForm'
import router from './router/Router'


const App = () => {
  return (
    <div>
      <RouterProvider router={router}>
        <GtrForm />
      </RouterProvider>
    </div>
  )
}

export default App