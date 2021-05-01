import { connect } from "react-redux";
import { fetchData } from "../actions/index";
import LinearProgress from "@material-ui/core/LinearProgress";

import {useEffect, useState} from "react";

const Weather = (props) => {

    const data = props.fetchedItem;
    //console.log("received props from Weather renderer", data);
    const [state, setState] = useState(data)
    useEffect(() => {
        setState(data)
        console.log('data',data)
    }, [data])
    console.log("state",state)

    if (props.loading) {
        return (
            <div className={'d-flex justify-content-center'}>
                <LinearProgress style={{ alignSelf: "center", width: 200 }} />
            </div>
        );
    }

            return (
                <div className={"d-flex justify-content-center flex-column flex-wrap"}
                     style={{padding: '8vh 0', textShadow: '0 0 1.5rem white'}}
                >  
                    {/* <h6 style={{color: "deepskyblue", textShadow: '0 0 1vh white'}}>Your Current Location
                        is {state.location.name}{", "}{state.location.region}</h6>
                    <p style={{
                        padding: '3vh 0',
                        backgroundColor: '#222',
                        textShadow: '0 0 1vh white'
                    }}>Lat: {state.location.lat}{" "}{' Lon: '}{state.location.lon}
                    </p> */}
                </div>
            );

};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error,
        fetchedItem: state.fetchedItem,
    };
};

const mapDispatchToProps = fetchData;

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
