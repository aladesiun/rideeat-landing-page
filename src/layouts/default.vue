<template>
  <div class="w-ful bg-white py-2 sticky top-0 z-50">
    <div class="justify-between lg:flex items-center container ">
      <div class="lg:flex justify-between items-center xl:w-[40%] relative ">
        <div class="lg:hidden absolute top-[17px] right-4"><i @click="toggle"
            :class="!navToggle ? 'fa-solid fa-bars text-lg' : 'hidden'"></i><i @click="toggle"
            :class="navToggle ? 'fa-solid fa-xmark text-lg' : 'hidden'"></i>
        </div>
        <div class="logo-cont max-w-[250px] flex">
          <nuxt-link to="/">
            <img src="../assets/images/rideeatLogo.png" class="w-[200px]" />
          </nuxt-link>
        </div>
        <transition name="fade">

          <div :class="!navToggle ? 'hidden lg:flex ' : ' block mt-[30px] z-20'">
            <ul class="flex justify-between">
              <li
                :class="route.name.includes('privacy-policy') ? 'capitalize hover:text-[#FF8900] sm:mr-3 text-[#FF8900]' : 'capitalize hover:text-[#FF8900] sm:mr-3'">
                <nuxt-link to="privacy-policy">privacy-policy</nuxt-link>
              </li>
              <li
                :class="route.name.includes('contact-us') ? 'capitalize hover:text-[#FF8900] sm:mr-3 text-[#FF8900]' : 'capitalize hover:text-[#FF8900] sm:mr-3'">
                <nuxt-link to="contact-us">Contact Us</nuxt-link>
              </li>
              <!-- <li class="capitalize hover:text-[#FF8900] lg:ml-3"><nuxt-link to="/contact">contact</nuxt-link></li> -->
            </ul>
          </div>
        </transition>
      </div>
      <transition name="fade">
        <div :class="!navToggle ? 'py-0 sm:py-4 hidden lg:flex' : 'block py-0 my-3 sm:py-4 z-20'">
          <nuxt-link to="becomeavendor/register"
            :class="route.name.includes('becomeavendor') ? 'btn-filled sm:mr-3 flex-center-all lg:my-0 my-7 vendor' : 'btn-transparent sm:mr-3 flex-center-all lg:my-0 my-7 vendor'">Become
            a Vendor</nuxt-link>
          <nuxt-link to="becomearider/register"
            :class="route.name.includes('becomearider') ? 'btn-filled sm:mr-3 flex-center-all lg:my-0 my-7 vendor' : 'btn-transparent sm:mr-3 flex-center-all lg:my-0 my-7 vendor'">Become
            a Rider</nuxt-link>
        </div>
      </transition>
    </div>
  </div>
  <div class="">
    <NuxtPage />
  </div>
  <div class="bg-[#162D4F] py-[40px] text-white z-20">
    <div class="container">
      <div class=" grid md:grid-cols-5">
        <div class="w-full md:pr-[40px]">
          <div class="logo-cont mb-5">
            <img src="../assets/images/rideeatLogo.png" class="w-[200px]" />
          </div>
          <p class="text-white text-xs md:block hidden">Your favourite Restaurants at your fingertips.
            Over 450 Meals delivered to over 200 customers</p>
        </div>
        <div class=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 col-span-4 my-5">
          <div class="w-full">
            <p class="font-sembold mb-4">Quick Link</p>
            <ul class="m-0">
              <li class="my-3 font-light text-xs"><nuxt-link to="#">About Us</nuxt-link></li>
              <li class="my-3 font-light text-xs sm:block hidden"><nuxt-link to="#">Prdouct</nuxt-link></li>
              <li class="my-3 font-light text-xs"><nuxt-link to="#">Become a Vendor</nuxt-link></li>
              <li class="my-3 font-light text-xs"><nuxt-link to="#">Become a Rider</nuxt-link></li>
              <li class="my-3 font-light text-xs"><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
            </ul>
          </div>

          <!-- <div class="w-full sm:block hidden">
            <p class="font-sembold mb-4">Cities</p>
            <ul class="m-0">
              <li class="my-3 font-light text-xs"><nuxt-link to="#">Lagos</nuxt-link></li>
              <li class="my-3 font-light text-xs"><nuxt-link to="#">Ajah</nuxt-link></li>
              <li class="my-3 font-light text-xs"><nuxt-link to="#">Lautech</nuxt-link></li>
              <li class="my-3 font-light text-xs"><nuxt-link to="#">Ogun</nuxt-link></li>
            </ul>
          </div> -->

          <div class="w-full">
            <p class="font-sembold mb-4">Useful Link</p>
            <ul class="m-0">
              <li class="my-3 font-light text-xs"><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
              <li class="my-3 font-light text-xs"><nuxt-link to="#">Terms and Conditions</nuxt-link></li>
              <li class="my-3 font-light text-xs sm:block hidden"><nuxt-link to="#">support</nuxt-link></li>
              <li class="my-3 font-light text-xs"><nuxt-link to="#">FAQs</nuxt-link></li>
            </ul>
          </div>

          <div class="w-full sm:block hidden">
            <p class="font-sembold mb-4">Contact</p>
            <ul class="m-0">
              <li class="my-3 font-light text-xs"><nuxt-link to="#">(+234) 903 456 0333</nuxt-link></li>
              <li class="my-3 font-light text-xs"><nuxt-link to="#">support@rideeat.com</nuxt-link></li>
              <li class="my-3 font-light text-xs"><nuxt-link to="#">Ogbomoso, Oyo State, Nigeria.</nuxt-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="h-[2px] my-4 w-full bg-[#F46F2A]"> </div>
      <div class="flex justify-between">
        <div class="flex cursor-pointer">
          <i class="fa-brands mr-1 fa-twitter"></i>
          <i class="fa-brands mx-1 fa-facebook"></i>
          <i class="fa-brands mx-1 fa-instagram"></i>
          <i class="fa-brands ml-1 fa-linkedin"></i>

        </div>
        <p class="text-xs ml-5">© 2021 Copyright 2021 Ride Eat, All rights reserved</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default defineComponent({
  name: "IndexPage",
  components: {},
  setup() {
    const route = useRoute();
    const navToggle = ref(false);
    const toggle = () => {
      navToggle.value = !navToggle.value;
    }
    watch(
      () => route.path,
      (to, from) => {
        toggle()
      }
    );
    return { navToggle, toggle, route, }
  }
});
</script>