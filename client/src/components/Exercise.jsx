import React from "react";

const Exercise = ({ data }) => {
    const { name, sets, reps, rest, intervals } = data;
    return(
        <div class="Exercise">
            <p>Exercise Name: {name}</p>
            <p>Number of Sets: {sets}</p>
            <p>Number of Reps per Set: {reps}</p>
            <p>Minutes of Rest: {rest}</p>
            <p>Number of Intervals/Time: {intervals}</p>
        </div>
    );
}

export default Exercise;