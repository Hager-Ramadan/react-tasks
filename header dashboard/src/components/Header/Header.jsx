import './Header.scss'
import {GrHomeRounded} from "react-icons/gr";
import {RiSearchLine} from "react-icons/ri";
import {BiBell} from "react-icons/bi";
import {CiBookmarkMinus} from "react-icons/ci";
import {HiOutlineEnvelope} from "react-icons/hi2";
import {HiOutlineMoon} from "react-icons/hi2";
import {Link} from 'react-router-dom';

function Header() {
    return (<header>
        <nav>
            <div className="logo">
                <h5>
                    Default dashboard
                </h5>
                <ul>
                    <li>
                        <Link to='/'>
                            <GrHomeRounded/></Link>
                    </li>
                    <li>
                        <span>/</span>
                        Dashboard
                        <span>/</span>
                    </li>
                    <li className='default'>Default</li>
                </ul>

            </div>
            <div className='buttons'>
                <ul>
                    <li className='d-flex align-items-center'>
                        <RiSearchLine/>
                        <input type="text" placeholder="Search Mofi .."/>
                    </li>
                    <li className='bg'>
                        <BiBell/>
                    </li>
                    <li className='bg'>
                        <CiBookmarkMinus/>
                    </li>
                    <li className='bg'>
                        <HiOutlineMoon/>

                    </li>
                    <li className='bg'>
                        <HiOutlineEnvelope/>
                    </li>
                    <li className='profile d-flex align-items-center'>
                        <img src='https://admin.pixelstrap.net/mofi/assets/images/dashboard/profile.png'/>
                        <div className='flex-column'>
                            <span>
                                Alen Miller
                            </span>
                            <p>
                                UI Designer
                            </p>
                        </div>
                    </li>
                </ul>


            </div>
        </nav>
    </header>)

}
export default Header
