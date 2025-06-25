import { useEffect, useState } from "react";
import yelp from "../api/yelp";


export default function useResults() {

    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearch] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (searchTerm, local) => {
        try {
            setSearchResults([]);
            setSearch(false);

            const response = await yelp.get('/search', {
                params: { 
                    term: searchTerm, 
                    location: local, 
                    limit: 50 
                }
            });
            setSearchResults(response.data.businesses);
            setSearch(true);

        } catch (error) {
            console.error('Error searching Yelp:', error);
            setError(error);
            setSearch(false);
        }
    };

    return { searchResults, search, handleSearch, error };
}

// This is a response object from the Yelp API:
// {
//   data: {
//     // This is the actual Yelp API response data
//     businesses: [
//       {
//         id: "string",
//         name: "string",
//         image_url: "string",
//         is_closed: boolean,
//         url: "string",
//         review_count: number,
//         categories: [
//           {
//             alias: "string",
//             title: "string"
//           }
//         ],
//         rating: number,
//         coordinates: {
//           latitude: number,
//           longitude: number
//         },
//         transactions: ["string"],
//         price: "string", // like "$", "$$", "$$$", "$$$$"
//         location: {
//           address1: "string",
//           address2: "string",
//           address3: "string",
//           city: "string",
//           zip_code: "string",
//           country: "string",
//           state: "string",
//           display_address: ["string"]
//         },
//         phone: "string",
//         display_phone: "string",
//         distance: number
//       }
//       // ... more business objects
//     ],
//     total: number,
//     region: {
//       center: {
//         longitude: number,
//         latitude: number
//       }
//     }
//   },
//   status: 200, // HTTP status code
//   statusText: "OK",
//   headers: {}, // Response headers
//   config: {}, // The request config that was used
//   request: {} // The request object
//}


// const response = await yelpApi.get('/search?location=pizza');
// const businesses = response.data.businesses; // This gets you the array of restaurants
// Think of it like this: Axios wraps the API response in its own envelope. The data property contains what Yelp actually sent you, while the other properties (status, headers, etc.) are metadata about the HTTP request itself.
