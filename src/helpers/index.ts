import { BASE_URL } from "../global/constants";
import { getRequest } from "../network";

export async function getLatestNews(newsIds, setLatestNews) {
  let newsData=[];
  for (let newsId of newsIds){
    // console.log(newsId);
    if(newsData.length === 12)
    {
      break;
    }
    
   const endpoint = `${BASE_URL}/item/${newsId}.json?print=pretty`;
   await getRequest(endpoint)
     .then((response) => {
       newsData.push(response.data);
      // console.log(response.data);
     })
     .catch((error) => {
       console.log('error: ')
     });
  }
  // console.log(newsData);
  setLatestNews(newsData);
  return newsData;
}
