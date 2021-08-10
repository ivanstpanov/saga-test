import axios from 'axios';

export const loadPostApi = async(arg) => 
    await axios.get(`https://jsonplaceholder.typicode.com/${arg}`)

      
