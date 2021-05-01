import {fetchData2, searchValue} from "../actions";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {Button} from "@material-ui/core";
import Weather from "./weather";

const  Home = (props) => {
    const [searchValues, setSearchValues] = useState("");
    //console.log('props from home', props)

    const handleChanges = (e) => {
        //console.log("1. e.target.value from handleChanges WORKING", e.target.value);
        setSearchValues(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        props.searchValue(searchValues);
        props.fetchData2(searchValues);
        //console.log("Search value from handle click WORKING", searchValues);
    };

    useEffect(() => {
        props.fetchData2(props.searchValue);
    }, [props]);

    return (
        <div style={{backgroundColor: 'black', width: '100vw', height: '100vh', textAlign: 'center', padding: '8vh 0', }}>
            <h3>Welcome home sir... </h3>
            <h6 style={{padding: '3vh 0', color: 'deepskyblue'}}>Your current weather conditions are available</h6>
            <p style={{color: "deepskyblue", padding: '5vh 0'}}>Use the search bar below to input your current location</p>
            <form onSubmit={handleClick}>
                <div className={'d-flex justify-content-center flex-column flex-wrap'} style={{padding: '3vh'}}>
                    <input
                        name="searchbar"
                        type="text"
                        placeholder={'Input Search Value'}
                        style={{
                            width: "15rem",
                            alignSelf: "center",
                            backgroundColor: "#444",
                            color: "deepskyblue",
                            textAlign: "center",
                            fontSize: "1.25rem",
                            margin: "3vh ",
                        }}
                        value={searchValues}
                        onChange={handleChanges}
                    />
                    <Button
                        className={'btn'} style={{width: "15rem", alignSelf: "center", }}
                        type={'submit'}
                        onClick={() => console.log('button clicked')}
                    >
                        Fetch Data
                    </Button>
                </div>
            </form>
            <Weather />
        </div>
    )
}


const mapStateToProps = (state) => {
    fetchData2(state.weatherSearchValue);
    //console.log("state mapped to props from mutants", state);
    return {
        searchValue: state.searchValue
    };
};

const mapDispatchToProps = {
    searchValue, fetchData2
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
