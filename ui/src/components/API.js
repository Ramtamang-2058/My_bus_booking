import axios from 'axios';
import CSRFToken from './csrftoken';

export default axios.create({
    baseURL: "http://127.0.0.1:8000/backend/",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        headers: {
            "X-CSRFToken": CSRFToken
        }
    }
})