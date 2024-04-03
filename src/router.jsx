import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import Update from "./pages/Update"
import Create from "./pages/Create"
import { showLoader, indexLoader } from "./loader"
import { createAction, deleteAction, updateAction } from "./action";



const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="" element={<Index />} loader={indexLoader}/>
        <Route path="/:id" element={<Show />} loader={showLoader}/>
        <Route path="edit/:id" element={<Update />} loader={showLoader}/>
        <Route path="new" element={<Create />}/>
        <Route path="create" action={createAction} />
        <Route path="update/:id" action={updateAction}/>
        <Route path="delete/:id" action={deleteAction}/>
    </Route>
))

export default router
