import React from "react";

const Filter = ({ setFilter }) => {
    const handleFilterChange = (event) =>{
        setFilter(event.target.value);
    };
    return (
        <div>
            <select onChange={handleFilterChange}>
                <option value = "All">All</option>
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
            </select>
        </div>
    );
};

export default Filter;