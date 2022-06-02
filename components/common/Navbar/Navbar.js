import NavbarRoot from "./NavbarRoot";
import {Container} from "../../ui";
import Link from 'next/link';
import NewQuestion from "../../NewQuestion";
import UserNav from "../UserNav";

/**
 * @param {Object} link
 * @param {String} link.title
 * @param {String} link.url
 * @returns {JSX.Element}
 * @constructor
 */
const Navbar = ({link}) => {
    return (
        <NavbarRoot>
            <Container>
                <div className="py-4 flex justify-between">
                    <Link href={link.url}>
                        <a className={'font-extrabold text-2xl'}>
                            {link.title}
                        </a>
                    </Link>

                    <div className="flex items-center">
                        <NewQuestion/>
                        <div className="mr-5"/>
                        <UserNav/>
                    </div>
                </div>
            </Container>
        </NavbarRoot>
    )
}

export default Navbar