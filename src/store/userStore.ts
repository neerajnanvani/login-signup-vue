import { defineStore } from 'pinia';
import {ref, computed} from "vue";
import { loginUser, registerUser } from '@/services/user.ts';

interface User {
    email: String;
}

export const useUserStore = defineStore('user', () => {

    // state
    const user = ref<null|User>(null);


    const getUser = computed(() => user);

    // mutations
    const setUser = (userData: User | null) => {
        user.value = userData;
    }

    // actions

    /**
     * Method to signup user with it's info
     * 
     * @param {object} - object contains name, email and password
     */
    const signUpUser = async ({email, password}) => {
        try {
            await registerUser({ email, password});
    
            setUser({email});
            
        } catch (error) {
            console.log("Error in signup", error);
        }
    }

    /**
     * Method to sign in user
     * 
     * @param {object} - the object contains email and password
     */
    const signInUser = async ({email, password}) => {
        try {
            await loginUser({email, password});
            
            setUser({email});
            
        } catch (error) {
            console.log("Error in signin", error);
        }
    }

    /**
     * Method to sign out current user
     */
    const signOutUser = ()  => {
       user.value = null;
    }

    return { getUser, signUpUser, signInUser, signOutUser, setUser };
})