<template>
    <div class="md:w-2/3 lg:w-1/3 bg-white rounded-2xl shadow-2xl p-8 flex flex-col space-y-10">
        <div :class="`border-b border-green-400 pb-4`">
            <h3 class="text-center text-2xl font-bold capitalize">
                {{type}}
            </h3>
        </div>
        <div>
            <label class="text-md font-semibold pl-1">
                Email
            </label>
            <input 
                class="w-full shadow-inner p-2 rounded-xl bg-green-50 mt-2 focus:outline-green-300" 
                type="email"
                placeholder="example@mail.com" 
                :value="email"
                @input="$emit('update:email', ($event.target as HTMLInputElement).value)"
            />
        </div>
        <div>
            <label class="text-md font-semibold pl-1">
                Password
            </label>
            <input 
                class="w-full shadow-inner p-2 rounded-xl bg-green-50 mt-2 focus:outline-green-300"
                placeholder="*********"
                :type="showPassword ? 'text': 'password'"
                :value="password"
                @input="$emit('update:password', ($event.target as HTMLInputElement).value)"
            />
        </div>
        <div v-if="type==='register'">
            <label class="text-md font-semibold pl-1">
                Confirm Password
            </label>
            <input 
                class="w-full shadow-inner p-2 rounded-xl bg-green-50 mt-2 focus:outline-green-300"
                :type="showPassword ? 'text': 'password'"
                placeholder="*********" 
                :value="confirmPassword"
                @input="$emit('update:confirmPassword', ($event.target as HTMLInputElement).value)"
            />
        </div>

        <div>
            <input type="checkbox" v-model="showPassword" class="accent-green-500 mr-3" />
            <label>Show Password</label>
        </div>

        <div class="mt-auto flex justify-between">
            <div class="self-end mr-5">

                <span class="mr-2">{{type === 'register' ? 'Already have Account?' : `Don't have Account?`}}</span>
                <RouterLink 
                    v-if="type=== 'login'"
                    to="/register" class="underline underline-offset-1 hover:text-green-800 text-green-600 self-end"
                > 
                    Register Now 
                </RouterLink>
                <RouterLink 
                    v-else
                    to="/login" class="underline underline-offset-1 hover:text-green-800 text-green-600 self-end"
                > 
                    Login Now 
                </RouterLink>
            </div>

            <button 
                class="px-4 py-2 hover:bg-green-700 hover:text-white bg-green-200 border border-green-600 rounded-xl"
                @click="$emit('form-btn-click')"
            >
                {{formButtonText}}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

// props 
defineProps({
    type: {
        type: String,
        default: "register",
        required: true
    },
    formButtonText: {
        type: String,
        default: "Register"
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    confirmPassword: {
        type: String,
    }
})

// State
const showPassword = ref(false);

// All emits to update parent state
defineEmits(['form-btn-click', "update:email", "update:password", "update:confirmPassword"])

</script>