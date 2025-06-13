import React, {useEffect} from 'react';
import Search from "./components/Search.jsx";
import Results from "./components/Results.jsx";


const API_KEY = import.meta.env.VITE_IP_API_KEY;

const Api_Options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`
    }

}

function App() {
    const [searching, setSearching] = React.useState('');
    const [ipData, setIpData] = React.useState(null);

    // Function to fetch data from the Ip
    const fetchData = async (ip) => {
        try {
            const response = await fetch(
                `https://iplocate.io/api/lookup/${ip}?apikey=${API_KEY}`,);
            const data = await response.json();
            setIpData(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching IP data:", error);
        }
    };


    useEffect(() => {
        // Fetch data for a default IP address when the component mounts
        const defaultIp = async () => {
            try {
                const response = await fetch("https://iplocate.io/api/lookup/?apikey=${API_KEY}");
                const startdata = await response.json();
                setIpData(startdata);
                console.log(startdata);

            } catch (error) {
                console.error("Error fetching default IP data:", error);
            }
        }
        defaultIp();
    },[]);


    return (
        <div className="App">
        <div className="mx-auto flex justify-center my-10 flex-col object-center items-center gap-8 max-w-[100%]">
            <h1 className="text-3xl font-bold text-white">IP Address Tracker</h1>
            <Search searching={searching} setSearching={setSearching} handleSearch={fetchData()} />
            <h1>
                {ipData?.country? ipData.country : 'Loading...' }
            </h1>
        </div>
        <Results/>
        </div>
    );
}

export default App;