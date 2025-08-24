import axios from 'axios';
export default axios.create(
    {
        baseURL: "https://phimart-kappa.vercel.app/api/v1",
    }
);