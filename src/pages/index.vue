<template>
  <div>
    <div class="flex justify-start items-start md:mt-[40px] container relative">
      <div class="lg:pt-[80px] pt-[20px] xs:mt-[10px]">
        <div class="sm:flex hidden">
          <button class="inline-block mt-2 btn-light">Quality Foods</button>
          <button class="ainline-block mt-2 btn-light sm:mx-4 mx-2 ">Quality Delivery</button>
          <button class="inline-block mt-2 btn-light ">Quality Customer Service</button>
        </div>
        <div class="md:w-[600px] my-3 flex">
          <h1 class="md:text-[50px] xs:mt-[40px] text-[30px] font-bold  text-[#162D4F] md:leading-[60px] leading-10">
            Easy <span class="text-[#FF8900]">access</span> to your favourite <span class="text-[#FF8900]">foods</span>
            and
            <span class="text-[#FF8900]">restaurants
              <button class="w-[105px] h-[34px] rounded-lg bg-[#FF8900] text-white text-sm font-semibold sm:hidden block">
                Get App
              </button>
            </span>
          </h1>
        </div>
        <div class="my-6 lg:mb-[70px] mb-0">
          <p class="text-[#717176] text-[14px] font-light lg:w-[63%] w-f sm:block hidden">Your favourite restaurants at
            your fingertips.
            Make an order or two
            to get the meal delivery service worthy of royalty. </p>
        </div>
        <div class="sm:block hidden">
          <!-- <DownloadApp /> -->
        </div>
      </div>
      <div class="lg:absolute xl:-right-[42px] lg:-right-[50px] right-0 top-[66px] xl:top-0">
        <img src="~/assets/images/meal.png" class="lg:block hidden xl:w-[880px] md:w-[580px]  lg:w-[610px] w-full" />
      </div>
    </div>

    <div class="sm:px-12 px-6">
      <div id="default-carousel" class="relative w-full lg:hidden block " data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative sm:!h-[519px] !h-[394px]  overflow-hidden !rounded-[41px] md:h-96">
          <!-- Item 1 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/images/bann.png"
              class="absolute block w-full sm:h-auto h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              alt="...">
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="../../assets/images/bann.png"
              class="absolute block w-full sm:h-auto h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
          </div>

        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" class="w-3 h-3 rounded-full slider_inc bg-[#fff]" aria-current="true" aria-label="Slide 1"
            data-carousel-slide-to="0"></button>
          <button type="button" class="w-3 h-3 rounded-full slider_inc bg-[#fff]" aria-current="false"
            aria-label="Slide 2" data-carousel-slide-to="1"></button>
        </div>
        <!-- Slider controls -->
        <button type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden"
          data-carousel-prev>
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none hidden"
          data-carousel-next>
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
              stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})
</script>

<style></style>