import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 57726721e992c3c574037e7a089888603411d8709e3cbffc390e2affdda004cb'
    }
})