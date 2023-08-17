import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import  App  from "./App";
import { Contacto } from "./componentes/contacto";
import { Acerca } from "./componentes/acerca";
import { Hospitales } from "./componentes/hospitales";
import { Especialista } from "./componentes/especialistas";
import { AreaCliente } from "./componentes/areaCliente/areaCliente";
import { Login } from "./componentes/login";
import { Registro } from "./componentes/registrarse";
import { Salud } from "./componentes/areaCliente/salud";
import { MiPerfil } from "./componentes/areaCliente/miPerfil";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/contacto",
    element: <Contacto/>,
  },
  {
    path: "/acerca",
    element: <Acerca/>,
  },
  {
    path: "/hospital",
    element: <Hospitales/>,
  },
  {
    path: "/especialistas",
    element: <Especialista/>,
  },
  {
    path: "/areaCliente",
    element: <AreaCliente/>,
  },
 
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/registro",
    element: <Registro/>,
  },
  {
    path: "/consejoSalud",
    element: <Salud/>,
  },
  {
    path: "/miPerfil",
    element: <MiPerfil/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);