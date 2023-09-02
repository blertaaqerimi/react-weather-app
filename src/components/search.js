import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../api";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions)
            const dataJson = await response.json()
            return {
                options: dataJson.data.map((city) => (
                    {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                ))
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
};

export default Search;