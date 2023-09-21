import './Navbar.css'
const Navbar = () => {
    return (
        <div className="main-container">
        <div className="container">
            
            <div className="logo">
                <h1>snap</h1>
            </div>
                <div className="navlist">
                <ul>
                <li className='special'>
                    Features <ion-icon name="chevron-down-outline"></ion-icon>
                    <div className="special-container special-container-one">
                        <li className = "today"><ion-icon name="today-outline">
                            </ion-icon> Todo list
                        </li>
                        <li className='calendar'>
                            <ion-icon name="calendar-outline"></ion-icon> Calendar
                        </li>
                        <li className='alarm'>
                            <ion-icon name="alarm-outline"></ion-icon> Reminders
                        </li>
                        <li className='time'>
                            <ion-icon name="time-outline"></ion-icon> Plannng
                        </li>
                    </div>
                    </li>
                <li className='special'>
                    Company <ion-icon name="chevron-down-outline"></ion-icon>
                    <div className="special-container">
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </div>
                    </li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            <div className="log">
                <li className='login'>Login</li>
                <li className='reg'>Register</li>
            </div>
                </div>

        </div>

        <div className="second-container">
        <div className="logo">
                <h1>snap</h1>
            </div>
                <input type="checkbox" id="checkInput" />
                <label htmlFor="checkInput" className="lines">
                    <div className="line"></div>
                </label>


                {/* navbar */}
                

                <div className="navlist">
                <ul>
                <li className='special'>
                    Features <ion-icon name="chevron-down-outline"></ion-icon>
                    <div className="special-container special-container-one">
                        <li className = "today"><ion-icon name="today-outline">
                            </ion-icon> Todo list
                        </li>
                        <li className='calendar'>
                            <ion-icon name="calendar-outline"></ion-icon> Calendar
                        </li>
                        <li className='alarm'>
                            <ion-icon name="alarm-outline"></ion-icon> Reminders
                        </li>
                        <li className='time'>
                            <ion-icon name="time-outline"></ion-icon> Plannng
                        </li>
                    </div>
                    </li>
                <li className='special'>
                    Company <ion-icon name="chevron-down-outline"></ion-icon>
                    <div className="special-container">
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </div>
                    </li>
                <li>Careers</li>
                <li>About</li>
            </ul>
            <div className="log">
                <li className='login'>Login</li>
                <li className='reg'>Register</li>
            </div>

        </div>

    </div>

        </div>
    );
}
 
export default Navbar;