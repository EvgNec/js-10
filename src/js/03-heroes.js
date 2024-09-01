//FhvidwmjPOio6g4MlGnZ
const refs = {
    BASE_URL: 'https://the-one-api.dev/v2',
    ENDPOINT: '/character',
    KEY: 'FhvidwmjPOio6g4MlGnZ',
}
const options = {
  headers: {
    Authorization: 'Bearer FhvidwmjPOio6g4MlGnZ',
  },
};

const option = {
    method: 'GET',
    
  headers: {
    Authorization: `Bearer ${refs.KEY}`,
  },
};

// fetch('https://the-one-api.dev/v2/character', options)
//     .then(resp2 => 

//         console.log("resp2", resp2.json())
// )
    

function getCharacter() {

    const param = new URLSearchParams({
        limit: 30,
        page: 1,
    });
    fetch(`${refs.BASE_URL}${refs.ENDPOINT}?${param}`, option)
    .then( resp =>        
        console.log("resp", resp.json())
    )
}
getCharacter();

