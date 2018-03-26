import axios from "axios";
// import keys from "../keys.js"

const authKey =  process.env.nytKey;
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey;
  


const createUrl = (query) => {
    console.log(query);
    let search = queryURLBase;

    search = `${search}&q=${query.query}`

    if (query.startDate) {
        console.log("first if happened")
        search = search + "&begin_date=" + query.startDate + "0101";
    }
    if (query.endDate) {
        console.log("second if happened")
        search = search + "&end_date=" + query.endDate + "0101";
    }
    return search;
}


export default {
    search: function(query) {
        const searchURL = createUrl(query)
        console.log(searchURL);
    return axios.get(searchURL);
  }
};
