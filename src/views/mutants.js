import {connect} from "react-redux";
import {searchValue, fetchData} from "../actions";
import {useState, useEffect} from "react";
import {Button} from "@material-ui/core";
import List from './list.js'

const Mutants = (props) => {
    const [searchValues, setSearchValues] = useState("");

    const handleChanges = (e) => {
        //console.log("1. e.target.value from handleChanges WORKING", e.target.value);
        setSearchValues(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        props.searchValue(searchValues);
        props.fetchData(searchValues);
        //console.log("Search value from handle click WORKING", searchValues);
    };

    useEffect(() => {
        props.fetchData(props.searchValue);
    }, [props]);


    return (
        <div className={'d-flex justify-content-center flex-column flex-wrap'} style={{backgroundColor: 'black', width: '100vw', marginTop: '30vh', textAlign: 'center', padding: '5vh 5vw'}}>
            <h2 style={{marginBottom: '3rem'}}>Welcome back sir</h2>
            <h2>Enhanced Entity Database</h2>
            <form onSubmit={handleClick}>
                <div className={'d-flex justify-content-center flex-column flex-wrap'} style={{padding: '3vh', marginTop: '10vh'}}>
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
            <List/>
        </div>
    )

}

const mapStateToProps = (state) => {
    fetchData(state.searchValue);
    //console.log("state mapped to props from mutants", state);
    return {
        searchValue: state.searchValue
    };
};

const mapDispatchToProps = {
    searchValue, fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Mutants);
