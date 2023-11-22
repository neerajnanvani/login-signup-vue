<template>
    <div class="w-full h-screen flex justify-center items-center bg-green-300">
        <CommonForm 
            type="login" 
            form-button-text="Login" 
            v-model:email="email"
            v-model:password="password"
            @form-btn-click="formSubmit"
        />
    </div>
</template>

<script setup lang="ts">
import CommonForm from '@/components/CommonForm.vue';
import { useUserStore } from '@/stores/user.ts';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

// state
const email = ref("");
const password = ref("");
const store = useUserStore();
const router = useRouter();

// push to the home if user already logged in
onMounted(() => {
    const user = store.getUser;

    if(user.value) {
        router.push("/");
    }
})


/**
 * Function to validate all fields for Login Page
 */
 function validateFields() {
    if(!email.value) {
        alert("Please fill email");
        return false;
    }
    if(!password.value) {
        alert("Please fill password");
        return false;
    }

    return true;
}

/**
 * Method to login user
 */
async function formSubmit() {
    const isFormValidated = validateFields();

    if(isFormValidated) {

       await store.signInUser({email: email.value, password: password.value});
       router.push("/")
    }
}

</script>
<style scoped>
</style>@/stores/userStore