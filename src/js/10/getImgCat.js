

export default function getImgCat(id, KEY) {
    const urlCatImg = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}`;
    const url = fetch(urlCatImg, {
      headers: {
        'x-api-key': KEY,
      },
    })
      .then(response => {
        return response.json();
      })       
      .then(data => {
        console.log("🚀 ~ getImgCat ~ data:", data)
        data.map(obj => {
          console.log('🚀 ~ .then ~ obj.url:', obj.url);
          return { url: obj.url };
        });
      })
   
      .catch(function (error) {
        console.log(error);
      });
return url;

  }