import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Update from "./pages/Update"
import Create from "./pages/Create"
import { showLoader, indexLoader } from "./loader"



const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={indexLoader}/>
        <Route path="/:id" element={<Show />} loader={showLoader}/>
        <Route path="update/:id" element={<Update />} loader={showLoader}/>
        <Route path="new" element={<Create />} action="create"/>
        <Route path="" action='update'/>
        <Route path="" action='delete'/>
    </Route>
))

export default router
