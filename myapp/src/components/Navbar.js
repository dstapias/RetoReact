import React from 'react';
function Navbar() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" href="#home">
            <a className="navbar-brand" href="#home">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                </ul>
                <form className="d-flex ml-auto">
                    <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Buscar" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>

            </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" href="#home" style={{ transform: 'scaleX(-1)' }}>
            <a className="navbar-brand" href="#home">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                </ul>
                <form className="d-flex ml-auto">
                    <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Buscar" />
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>

            </div>
        </nav>
        </div>
        
        
    );
}
export default Navbar;