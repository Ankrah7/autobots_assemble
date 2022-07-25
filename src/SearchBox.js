import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div>
            <input 
                className = 'bg-white dib br3 pa3 ma2 bw2'
                type='search' 
                placeholder='Call An Autobot' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;