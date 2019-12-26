import axios from 'axios';



export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers :{
        Authorization: 'Client-ID 35e91f942478fa93d52c11e8d4500a50fff01fc0b7841074e9bc8719ac56c8b2'
       }

}); //passing in an empty object
