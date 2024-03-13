import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Layout from '../Layout/Layout'
import ProjectPage from '../Pages/projectDetails/projectDetails'

function Rooter(){
    const id = window.location.pathname.split("/").pop()

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout children={<Home/>}/> } />
                <Route path={`/project/${id}`} element={<Layout children={<ProjectPage id={id} />}/>}/>
            </Routes>
        </Router>
    )
}
export default Rooter