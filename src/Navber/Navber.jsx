import './Navber.css'

const Navber = () => {
    return (
        
            <nav>
                <div className='navFlex'>
                    <div>
                        <h1>logo</h1>
                    </div>
                    <div>


                        <ul className="ui-bullet menuFlex">
                            <li className="text-xl">Home</li>
                            <li className="list-none">Service</li>
                            <li className="list-none">Production</li>
                            <li className="list-none">Blog</li>
                            <li className="list-none">About</li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    );
};

export default Navber;