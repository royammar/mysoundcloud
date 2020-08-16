import Axios from 'axios'

// var axios = Axios.create({
//     withCredentials: true,
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//     }
// });



export default {
  getList,
  getNextPage
}

async function getList(term){
 
const {data}=await  Axios.get(`https://api.soundcloud.com/tracks/?client_id=ggX0UomnLs0VmW7qZnCzw&q=${term}&limit=6&linked_partitioning=1`)
  return data
}

async function getNextPage(url) {
  try {
      const { data } = await Axios.get(url);
      return data;
  } catch (err) {
      console.log(err);
  }
}