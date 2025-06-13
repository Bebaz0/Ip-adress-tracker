import React from 'react';

function Search(props) {
    const [inputValue, setInputValue] = React.useState('');

    // Function to handle the search button click
    const searchIp = () => {
        if (props.inputValue.trim() !== '') {
            props.handleSearch(inputValue);
        }
    }

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchIp();
        }
    }

    return (
        <div className=" rounded-2xl border max-w-[70%] flex items-center justify-between bg-white flex-row gap-2 h-18">
            <input type="text"
                   placeholder="Search for any IP address or domain"
                   value={inputValue}
                   onChange={e => setInputValue(e.target.value)}
                   onKeyPress={handleKeyPress}
                   className="w-xl h-13 px-4 text-black outline-none "
            />
            <div className="w-18 bg-black h-13 flex items-center justify-center cursor-pointer rounded-r-2xl h-18"
            onClick={searchIp}>
                <img src="/icon-arrow.svg"/>
            </div>
        </div>
    );
}

export default Search;