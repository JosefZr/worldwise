import { Link } from "react-router-dom"
import PageNave from "../components/PageNav"
function HomePage() {
    return (
        <div>
            <PageNave/>
            <h1>WorldWise</h1>
            <Link to="/pricing" >Pricing</Link>
        </div>
    )
}

export default HomePage