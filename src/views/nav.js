import {Link} from 'react-router-dom'
import {AppBar} from "@material-ui/core";

export default function Nav() {
    return (
        <AppBar
            className={'d-flex justify-content-center, flex-row, flex-wrap align-content-center'}
            style={{
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center',
                position: 'absolute'
            }}
        >
            <h1>Jarvis 2.0</h1>
            <div className={'d-flex flex-row flex-wrap justify-content-around align-content-center'}>
                <Link
                    to={'mutants'}
                    className="btn btn-outline-light"
                    style={{color: "#666", margin: "0 .5rem"}}
                >
                    Server
                </Link>
                {/* <Link
                    to={'home'}
                    className="btn btn-outline-light"
                    style={{color: "#666", margin: "0 1rem"}}
                >
                    Home
                </Link> */}
                <a href={'https://www.marvel.com'}
                   className="btn btn-outline-light"
                   style={{color: "#666", margin: "0 1rem"}}
                >
                    Marvel
                </a>
                <a href={'mailto:tony.miller@blackthought.tech'}
                   className="btn btn-outline-light"
                   style={{color: "#666", margin: "0 1rem"}}
                >
                    Connect
                </a>
            </div>
        </AppBar>
    )
}