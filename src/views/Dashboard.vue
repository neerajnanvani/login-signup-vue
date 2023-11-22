<template>
     <div>
        <nav class="p-3 border-b-2 border-green-400 flex items-center">
            <h2 class="font-bold text-xl grow"> Home </h2>
            <div>
                <p class="text-md">{{userEmail}}</p>
            </div>
            <button @click="logout" class="ml-5  px-5 py-2 border border-green-200 rounded-2xl hover:border-green-500">
                Log out
            </button>
        </nav>

        <div class="w-full h-screen flex justify-center items-center text-4xl font-extrabold">
            Dashboard
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'vue-router';
import {onMounted, ref} from "vue";

const userEmail = ref("")

const store = useUserStore();
const router = useRouter();

onMounted(() => {
    const user = store.getUser;

    if(user.value !== null) {
        userEmail.value = user.value.email;
    }

});

/**
 * Logout the user
 */
function logout() {
    store.signOutUser();
    router.push("/login")
}

</script>