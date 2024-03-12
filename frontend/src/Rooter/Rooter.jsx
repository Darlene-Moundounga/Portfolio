import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Layout from '../Layout/Layout'

function Rooter(){

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout children={<Home/>}/> } />
            </Routes>
        </Router>
    )
}
export default Rooter