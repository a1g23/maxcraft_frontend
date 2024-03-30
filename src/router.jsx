import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Update from "./pages/Update"
import Create from "./pages/Create"


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Index />}/>
        <Route path="/:id" element={<Show />}/>
        <Route path="update/:id" element={<Update />}/>
        <Route path="new" element={<Create />}/>
        <Route path="" action='update'/>
        <Route path="" action='delete'/>
        <Route path="" action='update'/>
    </Route>
))

export default router
