import { Link } from "react-router-dom"
function Sidebar() {
    return (
        <div className="col-md-2 border D-flex border-danger mt-5  ">

            <ul className="text-danger mb-5 pb-5 d-flex flex-column gap-5 mt-4">
                <li>
                    <Link  className="text-success" to={"viewcontact"}> View Contact </Link>
                </li>

                <li>
                    <Link  className="text-success" to={"addblog"}> add Blog </Link>
                </li>
                <li>
                    <Link  className="text-success" to={"viewblog"}> View Blog </Link>
                </li><li>
                    <Link  className="text-success" to={"viewpricing"}> View Pricing </Link>
                </li><li>
                    <Link  className="text-success" to={"viewcontact"}> View Contact </Link>
                </li><li>
                    <Link  className="text-success" to={"viewcontact"}> View Contact </Link>
                </li><li>
                    <Link  className="text-success" to={"viewcontact"}> View Contact </Link>
                </li>
            </ul>


        </div>
    )
}
export default Sidebar