<template>
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
          <span class="text-[#FF8900]">restaurants</span>
        </h1>
      </div>
      <button class="w-[105px] h-[34px] rounded-lg bg-[#FF8900] text-white text-sm font-semibold sm:hidden block">
              Get App
            </button>
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
      <img src="../assets/images/meal.png" class="lg:block hidden xl:w-[880px] md:w-[580px]  lg:w-[610px] w-full" />
    </div>
  </div>

  <div class="sm:px-12 px-6">
    <div id="default-carousel" class="relative w-full lg:hidden block " data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative sm:!h-[519px] !h-[394px]  overflow-hidden !rounded-[41px] md:h-96">
        <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="../assets/images/bann.png"
            class="absolute block w-full sm:h-auto h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <img src="../assets/images/bann.png"
            class="absolute block w-full sm:h-auto h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>

      </div>
      <!-- Slider indicators -->
      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full slider_inc bg-[#fff]" aria-current="true" aria-label="Slide 1"
          data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full slider_inc bg-[#fff]" aria-current="false" aria-label="Slide 2"
          data-carousel-slide-to="1"></button>
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
  <div
    class="grad-bg md:mt-[73px] pt-9 overflow-x-hidden h-fit overflow-y-hidden sm:rounded-none rounded-bl-[14px] relative z-40">
    <p class="text-center font-semibold md:text-[25px] text-2xl my-9 px-5 text-[#162D4F] sm:w-full w-[408px] mx-auto">Why
      you should use Rideeats?</p>
    <!-- CARDS -->
    <div class="lg:justify-between flex-center-all container flex-wrap  sm:mb-0 mb-14">
      <div class="flex flex-col items-center my-4 px-1">
        <div class="bg-[#FF8900] rounded-lg p-1   hover:bg-[#162D4F] hover:text-[#FF8900]">
          <svg class="" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.76251 14.025V19.6375C3.76251 25.25 6.01251 27.5 11.625 27.5H18.3625C23.975 27.5 26.225 25.25 26.225 19.6375V14.025"
              stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M15 15C17.2875 15 18.975 13.1375 18.75 10.85L17.925 2.5H12.0875L11.25 10.85C11.025 13.1375 12.7125 15 15 15Z"
              stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M22.8876 15C25.4126 15 27.2626 12.95 27.0126 10.4375L26.6626 7C26.2126 3.75 24.9626 2.5 21.6876 2.5H17.8751L18.7501 11.2625C18.9626 13.325 20.8251 15 22.8876 15Z"
              stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M7.04985 15C9.11235 15 10.9749 13.325 11.1749 11.2625L11.4499 8.5L12.0499 2.5H8.23735C4.96235 2.5 3.71235 3.75 3.26235 7L2.92485 10.4375C2.67485 12.95 4.52485 15 7.04985 15Z"
              stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M15 21.25C12.9125 21.25 11.875 22.2875 11.875 24.375V27.5H18.125V24.375C18.125 22.2875 17.0875 21.25 15 21.25Z"
              stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <p class="font-[500] my-3 text-[16px] text-[#1A1D26]">Unlimited Shopping</p>
        <p class="text-[#717176] text-center">
          <span>Shop from an unlimited supply of</span>
          <span class="block">meals and groceries .</span>
        </p>
      </div>

      <div class="flex flex-col items-center my-4 px-4">
        <div class="bg-[#FF8900] rounded-lg p-1   hover:bg-[#162D4F] hover:text-[#FF8900]">
          <svg class="" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1244 19.8333L13.9369 21.6458L17.864 18.0208" stroke="white" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.1453 2.91669L6.77111 7.30294" stroke="white" stroke-width="2.5" stroke-miterlimit="10"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.8544 2.91669L23.2286 7.30294" stroke="white" stroke-width="2.5" stroke-miterlimit="10"
              stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M2.91667 9.98539C2.91667 7.74998 4.11292 7.56873 5.59917 7.56873H24.4008C25.8871 7.56873 27.0833 7.74998 27.0833 9.98539C27.0833 12.5833 25.8871 12.4021 24.4008 12.4021H5.59917C4.11292 12.4021 2.91667 12.5833 2.91667 9.98539Z"
              stroke="white" stroke-width="2.5" />
            <path
              d="M4.72917 12.5833L6.43292 23.0233C6.81958 25.3675 7.75 27.0833 11.2058 27.0833H18.4921C22.25 27.0833 22.8058 25.44 23.2408 23.1683L25.2708 12.5833"
              stroke="white" stroke-width="2.5" stroke-linecap="round" />
          </svg>
        </div>
        <p class="font-[500] my-3 text-[16px] text-[#1A1D26]">Easy Delivery</p>
        <p class="text-[#717176] text-center">
          <span>Get your orders to your location by</span>
          <span class="block">our delivery partners in minutes.</span>
        </p>
      </div>

      <div class="flex flex-col items-center my-4 px-4">
        <div class="bg-[#FF8900] rounded-lg p-1   hover:bg-[#162D4F] hover:text-[#FF8900]">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.6859 3.12201L7.69993 5.75401C6.08993 6.35601 4.77393 8.26001 4.77393 9.96801V20.37C4.77393 22.022 5.86593 24.192 7.19593 25.186L13.2159 29.68C15.1899 31.164 18.4379 31.164 20.4119 29.68L26.4319 25.186C27.7619 24.192 28.8539 22.022 28.8539 20.37V9.96801C28.8539 8.24601 27.5379 6.34201 25.9279 5.74001L18.9419 3.12201C17.7519 2.68801 15.8479 2.68801 14.6859 3.12201Z"
              stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.6701 16.618L14.9241 18.872L20.9441 12.852" stroke="white" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <p class="font-[500] my-3 text-[16px] text-[#1A1D26]">Secure Package</p>
        <p class="text-[#717176] text-center">
          <span>Receive your meal & package at </span>
          <span class="block">your doorstep.</span>
        </p>
      </div>
    </div>
    <!-- HERO 2 -->
    <div class="md:mt-[150px] xs:mt-[50px] lg:flex block justify-between items-center container  relative">
      <div class="lg:pl-0 sm:pl-[38px] pl-6 sm:pr-0 pr-5">
        <p class="text-[#162D4F] font-bold md:text-[30px] text-2xl sm:text-left text-center sm:mb-0 mb-9">
          <span>Get only delicious food </span>
          <span class="block"> ordered on Rideeats.</span>
        </p>
        <p class=" text-[#717176]  my-7 sm:block hidden">Access over 4,000 restaurants in a click including your favourite
          Abula Spot.
          Place your order through the Rideeats mobile app, and get quick delivery to your location. </p>
        <div>
          <div class="flex items-center py-3">
            <div class="circle-cont min-h-[40px] min-w-[40px] font-semibold md:text-lg text-sm mr-4">01</div>
            <span class="font-[500] md:text-xl text-sm ml-2 text-[#1A1D26]">Order From Any Location. </span>
          </div>
          <div class="flex items-center py-3">
            <div class="circle-cont min-h-[40px] min-w-[40px] font-semibold md:text-lg text-sm mr-4">02</div>
            <span class="font-[500] md:text-xl text-sm ml-2 text-[#1A1D26] lg:text-nowrap">Order From Your Favourite
              Restaurant & Grocery Shop.</span>
          </div>
          <div class="flex items-center py-3">
            <div class="circle-cont min-h-[40px] min-w-[40px] font-semibold md:text-lg text-sm mr-4">03</div>
            <span class="font-[500] md:text-xl text-sm ml-2 text-[#1A1D26]">Get Consistent Updates On Your Order
              Status.</span>
          </div>
        </div>
        <DownloadApp />
      </div>
      <div
        class="lg:w-[1278px] w-full lg:h-[657px] md:h-[491px] h-[350px] bottom-0   z-20 relative relative sm:ml-0 ml-6">
        <img src="../assets/images/now-ride.png"
          class="lg:w-[658px] md:w-[546px] sm:w-[446px] w-[400px] absolute bottom-[-1px] right-0" />
      </div>
      <!-- <img src="~assets/images/mobileMockup.png"
        class="hidden z-20 lg:block xl:-right-[160px] -right-[210px] xl:-top-[130px] -top-[20px] absolute xl:w-[950px] w-[750px]" 
      /> -->
      <!-- <img src="~assets/images/shadow.png"
        class="hidden lg:block z-10 xl:right-[55px] right-[2px] xl:-top-[146px] -top-[16px] absolute xl:w-[550px] w-[350px] xl:h-[769px] h-[569px]" 
      /> -->
    </div>

  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})
</script>

<style></style>