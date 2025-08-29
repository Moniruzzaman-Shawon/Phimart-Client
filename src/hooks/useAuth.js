import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
    const [user, setUser] = useState(null);
    
        const getToken = () => {
            const token = localStorage.getItem('authTokens')
            return token ? JSON.parse(token) : null;
        };
    
        const [authToken, setAuthToken] = useState(getToken());

        useEffect(()=>{

            if(authToken)fetchUserProfile();
        },[authToken]);

        //Fetch user profile
        const fetchUserProfile = async () => {
            try{
                const response = await apiClient.get('/auth/users/me', {
                    headers: {Authorization: `JWT ${authToken?.access}`},
                });
                setUser(response.data);
            }catch(error) {
                console.log('Error fetching user',error);
            }
        }

        //login user
        const loginUser = async (userData) =>{
            try{
                const response = await apiClient.post('/auth/jwt/create', userData);
            setAuthToken(response.data);
            localStorage.setItem("authTokens" , JSON.stringify(response.data));
            } catch(error){
                console.log("Login Error", error);
            }
        };
    return { user, loginUser };
}

export default useAuth;