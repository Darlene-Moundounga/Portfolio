import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Layout from '../Layout/Layout'
import ProjectPage from '../Pages/projectDetails/projectDetails'
import Error from '../Pages/Error/Error'

function Rooter(){
    const id = window.location.pathname.split("/").pop()

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout children={<Home/>}/> } />
                <Route path={`/project/${id}`} element={<Layout children={<ProjectPage id={id} />}/>}/>
                <Route path='*' element={<Layout children ={<Error/>}/>}/>
            </Routes>
        </Router>
    )
}
export default Rooter