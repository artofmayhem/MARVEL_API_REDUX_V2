import {connect} from "react-redux";
import {fetchData2} from "../actions/index";
import LinearProgress from "@material-ui/core/LinearProgress";

import {useEffect, useState, Suspense} from "react";

const Weather = (props) => {
    const data = props.fetchedItem;
    //console.log("received props from Weather renderer", data);
    const [state, setState] = useState([]);
    useEffect(() => {
        setState(data);
        console.log("data", data);
    }, [data]);
    console.log("state", state);

    if (props.loading) {
        return (
            <div className={"d-flex justify-content-center"}>
                <LinearProgress style={{alignSelf: "center", width: 200}}/>
            </div>
        );
    } else if (!data) {
        return (<div>Loading...</div>)
    } else

        return (
            <div
                className={"d-flex justify-content-center flex-column flex-wrap"}
                style={{
                    padding: "8vh 0", backgroundColor: "#222",
                    opacity: '0.7.', marginTop: '5vh'
                }}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <h6 style={{color: "deepskyblue", textShadow: "0 0 1vh white"}}>
                        Your Current Location is {state.location.name}
                        {", "}
                        {state.location.region}{", "}{state.location.country}
                    </h6>
                    <p style={{textShadow: "0 0 1.5rem white"}}>Your local time
                        is: {state.location.localtime}{" "}{state.location.tz_id} timezone</p>
                    <p
                        style={{
                            padding: "3vh 0",
                            textShadow: "0 0 1.5rem white",
                        }}
                    >
                        Lat: {state.location.lat} {" Lon: "}
                        {state.location.lon}
                    </p>
                </Suspense>
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

const mapDispatchToProps = {fetchData2};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
