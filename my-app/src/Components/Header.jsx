import { Link } from "react-router-dom";
import './Header.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const [logged, setLogged] = useState(globalThis.Logged);
    const navigate = useNavigate();

    function handleLogout() {
        globalThis.Logged = false;
        setLogged(false);
        navigate('/');
    }

    useEffect(() => {
        setLogged(globalThis.Logged);
    }, []);

    console.log(logged);

    return (
        <header>
            <h1>Rizz Net</h1>
            {logged == false ? (
                <>
                    <Link to='/Register'>
                        <button>Sign up</button>
                    </Link>
                    <Link to='/Login'>
                        <button>Sign in</button>
                    </Link>
                </>
            ) : (
                <Link to='/'>
                    <button onClick={handleLogout}>Log out</button>
                </Link>
            )}
        </header>
    );
}

export default Header;
