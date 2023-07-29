<template>
    <div>
        <div class="min-h-[75vh]">

            <div class="text-center lg:w-[800px] w-[80%] mx-auto mt-7 sm:mt-12">
                <h1 class="md:text-[40px] text-2xl font-semibold text-center my-5 lg:leading-[3rem]">We're all ears & hungry for feedback</h1>
                <p class="text-[#717176] text-sm md:text-[16px] font-light leading-6 md:w-[580px] m-auto">Got a question, suggestion, or just want to talk about your favourite food? Reach out to us and let's dish out some delicious conversation!
                </p>
            </div>
            <!-- <form class="lg:w-[540px] w-[90%] mx-auto mt-8" @submit.prevent="submit"> -->
            <form class="lg:w-[540px] w-[90%] mx-auto mt-8" >
                <div>
                    <input type="text" v-model="details.name" name="name" required
                        class="focus:outline-none focus:border-[#F46F2A] focus:border-2 rounded-[10px] sm:rounded-[13px] px-6 py-3.5 mb-5 border border-3 border-[#fe880233] mr-2 w-full placeholder:text-sm placeholder:tex-[#E5E5E5]"
                        placeholder="Name" />
                    <input type="email" v-model="details.email" name="email" required
                        class="focus:outline-none focus:border-[#F46F2A] focus:border-2 rounded-[10px] sm:rounded-[13px] px-6 py-3.5 mb-5 border border-3 border-[#fe880233] mr-2 w-full placeholder:text-sm placeholder:tex-[#E5E5E5]"
                        placeholder="Email address" />
                    <input type="text" v-model="details.location" name="location"
                        class="focus:outline-none focus:border-[#F46F2A] focus:border-2 rounded-[10px] sm:rounded-[13px] px-6 py-3.5 mb-5 border border-3 border-[#fe880233] mr-2 w-full placeholder:text-sm placeholder:tex-[#E5E5E5]"
                        placeholder="Location" />
                    <textarea id="message" required v-model="details.message" name="message"
                        class="focus:outline-none focus:border-[#F46F2A] focus:border-2 rounded-[10px] sm:rounded-[13px] px-6 py-3.5 mb-5 border border-3 border-[#fe880233] mr-2 w-full placeholder:text-sm placeholder:tex-[#E5E5E5] h-[130px] resize-none " >
                        </textarea>
                </div>
                <button type="submit"
                    class="btn-filled text-lg py-3 w-[100px] block ml-auto  my-4 md:mb-[20px]  text-center">
                    <span v-if="!isLoading">Submit</span>
                    <span v-else>Loading...</span>
                </button>
            </form>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useNotificationStore } from  '../store/notification'

export default defineComponent({
    components: { },
    name: "contact-us",
    setup() {
        const runtimeConfig = useRuntimeConfig()
        const isLoading = ref(false)
        const store = useNotificationStore();
        const details = ref({
            name: '',
            email: '',
            message: '',
            location: '',
        })

        const submit = (() => {
            isLoading.value = true;
            
            $fetch(runtimeConfig.public.APP_BASE_URL+'contact-us', {
                method: "post",
                body: details.value
            }).then((res) => {
                console.log(res);
                isLoading.value = false;
                store.setNotification({type: 1, message:"Thank you for contacting us!", time: 3000})
            }).catch((err) => {
                console.log(err)
                
                isLoading.value = false;
            })
        })

        return {
            isLoading,
            details,
            submit
        }
    },
})
</script>
