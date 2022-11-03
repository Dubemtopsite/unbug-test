<template>
    <div class="w-full min-h-screen bg-white">
        <nav class="pt-5 pb-5 bg-white fixed w-full" style="">
            <div class="container w-full mx-auto px-4 flex flex-row justify-between item-center">
                <div class="flex flex-row space-x-6">
                    <div class="flex flex-row items-center">
                        <font-awesome-icon icon="fa-cloud-bolt" :style="{marginRight: '10px'}" />
                        <h2 class="font-semibold text-lg">Untitled UI</h2>
                    </div>
                    <ul class="bg-white hidden md:inline-flex space-x-6">
                        <li class="flex flex-row items-center">Home</li>
                        <li class="flex flex-row items-center">Products</li>
                        <li class="flex flex-row items-center">Resources</li>
                        <li class="flex flex-row items-center">Pricing</li>
                    </ul>
                </div>
                <div class="space-x-5 hidden md:flex">
                    <router-link to="/" class="px-3 py-3">Log in</router-link>
                    <router-link to="/" class="bg-purple-700 text-white px-5 py-1 text-sm rounded-lg flex flex-row items-center">Sign Up</router-link>
                </div>
                <button class="flex md:hidden">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                </button>
            </div>
        </nav>
        <section style="min-height: 600px; padding-top: 60px;">
            <div class="container mx-auto px-3 pt-24 md:pt-16 pb-0 md:pb-24">
                <div class="w-full max-w-max grid grid-cols-1 md:grid-cols-12">
                    <div class="flex flex-col items-start justify-center col-span-7 md:pr-10">
                        <div class="border-purple-700 pl-1 pr-4 py-1 border rounded-2xl text-purple-700 text-sm mb-5">
                            <span class="border-purple-700 px-2 py-1 border rounded-2xl text-purple-700 text-sm mr-1">New</span> Personalized coaching in-app
                        </div>
                        <h1 class="text-4xl md:text-6xl font-normal text-gray-900 mb-4">Portfolio performance tracking made easy</h1>
                        <p>Designed by marketers. Untitled gives you the guidance, data and innovation you need to become a better marketer.</p>
                        <div class="flex flex-row justify-start space-x-4 mt-7 md:mt-10">
                            <a href="#">
                                <img src="@/assets/apple-store.svg" alt="" style="height: 45px;" />
                            </a>
                            <a href="#">
                                <img src="@/assets/google-store.svg" alt="" style="height: 45px;" />
                            </a>
                        </div>
                    </div>
                    <div class="col-span-5 justify-center mt-10 md:mt-0 banner-container">
                        <!-- <img src="@/assets/phone.png" alt="" /> -->
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-gray-50">
            <div class="container mx-auto px-3 md:px-4 pt-12 md:pt-24 pb-12 md:pb-24 flex flex-col items-center justify-center">
                <p class="text-center font-semibold">Official partner of these companies</p>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-12 gap-3 company">
                    <div class="flex justify-center flex-row mb-3">
                        <img src="@/assets/157252798385.jpg" alt="" />
                    </div>
                    <div class="flex justify-center flex-row mb-3">
                        <img src="@/assets/157252798385.jpg" alt="" />
                    </div>
                    <div class="flex justify-center flex-row mb-3">
                        <img src="@/assets/157252798385.jpg" alt="" />
                    </div>
                    <div class="flex justify-center flex-row mb-3">
                        <img src="@/assets/157252798385.jpg" alt="" />
                    </div>
                    <div class="flex justify-center flex-row mb-3">
                        <img src="@/assets/157252798385.jpg" alt="" />
                    </div>
                    <div class="flex justify-center flex-row mb-3">
                        <img src="@/assets/157252798385.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="pt-12 md:pt-24 pb-24 banner">
                <div class="container mx-auto px-3 md:px-4 grid grid-cols-1 md:grid-cols-12">
                    <div class="col-span-7">
                        <p class="text-purple-700 font-semibold">Features</p>
                        <h2 class="font-semibold text-3xl md:text-4xl mb-5 mt-3">Unlock yourself</h2>
                        <p class="md:text-lg">Daily personalized fitness, sleep, and recovery data delivered to you in real time with Untitled. We’re changing how you move.</p>
                    </div>
                    <div class="col-span-5">
                        
                    </div>
                </div>
                <div class="container mx-auto px-3 md:px-4 grid grid-cols-1 md:grid-cols-2 mt-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10 space-y-12 md:space-y-0">
                        <div class="flex flex-col items-start">
                            <font-awesome-icon icon="fa-regular fa-comments" />
                            <h5 class="text-lg font-semibold text-purple-700 mt-2 mb-2">Share team inboxes</h5>
                            <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                        </div>
                        <div class="flex flex-col items-start">
                            <font-awesome-icon icon="cloud-bolt" class="text-2xl text-purple-700" :style="{marginRight: '10px'}" />
                            <h5 class="text-lg font-semibold text-purple-700 mt-2 mb-2">Deliver instant answers</h5>
                            <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                        </div>
                        <div class="flex flex-col items-start">
                            <font-awesome-icon icon="fa-solid fa-chart-simple" class="text-2xl text-purple-700" :style="{marginRight: '10px'}" />
                            <h5 class="text-lg font-semibold text-purple-700 mt-2 mb-2">Manage your team with reports</h5>
                            <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                        </div>
                        <div class="flex flex-col items-start">
                            <font-awesome-icon icon="fa-regular fa-face-smile" />
                            <h5 class="text-lg font-semibold text-purple-700 mt-2 mb-2">Connect with customers</h5>
                            <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
                        </div>
                    </div>
                    <div>
                        <img class="md:hidden mt-16 md:mt-0" src="@/assets/coinbase.webp" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container mx-auto px-3 md:px-4 pt-12 md:pt-16 pb-0 md:pb-12 flex flex-col items-center justify-center">
                <div class="px-3 md:px-16 pt-12 md:pt-16 mb-24 md:mb-24 bg-purple-600 w-full rounded-xl grid grid-cols-1 md:grid-cols-2">
                    <div class="flex flex-col justify-center items-start">
                        <h5 class="text-3xl md:text-4xl text-white mb-3 font-semibold">Start your free trial</h5>
                        <p class="text-white">Personal performance tracking made easy.</p>
                        <div class="flex flex-row justify-start space-x-4 mt-9">
                            <a href="#">
                                <img src="@/assets/apple-store.svg" alt="" style="height: 45px;" />
                            </a>
                            <a href="#">
                                <img src="@/assets/google-store.svg" alt="" style="height: 45px;" />
                            </a>
                        </div>
                    </div>
                    <div class="start-trail justify-end mt-10 md:mt-0">
                        <div></div>
                        <!-- <img src="@/assets/phone.png" alt="" style="height: 300px;" /> -->
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container mx-auto px-3 md:px-4 pt-0 md:pt-16 pb-16">
                <div class="grid grid-cols-1 md:grid-cols-12 md:gap-10">
                    <div class="md:col-span-5">
                        <p class="text-purple-700 text-sm font-semibold">Upgrade</p>
                        <h4 class="text-3xl md:text-4xl mt-3 mb-3 font-semibold">Pricing plans that scale</h4>
                        <p>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
                    </div>
                    <div class="md:col-span-7 mt-10 md:mt-0">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 plans">
                            <div class="px-7 py-7 shadow-md rounded-xl">
                                <h2 class="text-center text-3xl md:text-4xl font-semibold mb-3">$10/mth</h2>
                                <h6 class="text-center text-gray-900 text-sm font-semibold mb-2">Basic plan</h6>
                                <h6 class="text-sm text-center mb-5">Billed annually</h6>
                                <ul class="space-y-4">
                                    <li class="flex flex-row item-center gap-3">
                                        <div class="bg-green-200 rounded-full p-1 flex flex-row justify-center items-center" style="width: 22px; height: 22px;">
                                            <font-awesome-icon icon="fa-solid fa-check" :style="{fontSize: '13px'}" />
                                        </div>
                                        <p>Access to all basic features</p>
                                    </li>
                                    <li class="flex flex-row item-center gap-3">
                                        <div class="bg-green-200 rounded-full p-1 flex flex-row justify-center items-center" style="width: 22px; height: 22px;">
                                            <font-awesome-icon icon="fa-solid fa-check" :style="{fontSize: '13px'}" />
                                        </div>
                                        <p>Basic reporting and analytics</p>
                                    </li>
                                    <li class="flex flex-row item-center gap-3">
                                        <div class="bg-green-200 rounded-full p-1 flex flex-row justify-center items-center" style="width: 22px; height: 22px;">
                                            <font-awesome-icon icon="fa-solid fa-check" :style="{fontSize: '13px'}" />
                                        </div>
                                        <p>Up to 10 individual users</p>
                                    </li>
                                    <li class="flex flex-row item-center gap-3">
                                        <div class="bg-green-200 rounded-full p-1 flex flex-row justify-center items-center" style="width: 22px; height: 22px;">
                                            <font-awesome-icon icon="fa-solid fa-check" :style="{fontSize: '13px'}" />
                                        </div>
                                        <p>20GB individual data each user</p>
                                    </li>
                                    <li class="flex flex-row item-center gap-3">
                                        <div class="bg-green-200 rounded-full p-1 flex flex-row justify-center items-center" style="width: 22px; height: 22px;">
                                            <font-awesome-icon icon="fa-solid fa-check" :style="{fontSize: '13px'}" />
                                        </div>
                                        <p>Basic chat and email support</p>
                                    </li>
                                </ul>
                                <button class="bg-purple-700 text-white rounded-md mt-6 py-2 w-full">Get Started</button>
                            </div>
                            <div class="px-7 py-7 shadow-md rounded-xl mt-10 md:mt-0">
                                <h2 class="text-center text-3xl md:text-4xl font-semibold mb-3">$20/mth</h2>
                                <h6 class="text-center text-gray-900 text-sm font-semibold mb-2">Business plan</h6>
                                <h6 class="text-sm text-center mb-5">Billed annually</h6>
                                <ul class="space-y-4">
                                    <li class="flex flex-row item-center gap-3">
                                        <div class="bg-green-200 rounded-full p-1 flex flex-row justify-center items-center" style="width: 22px; height: 22px;">
                                            <font-awesome-icon icon="fa-solid fa-check" :style="{fontSize: '13px'}" />
                                        </div>
                                        <p>200+ integrations</p>
                                    </li>
                                    <li class="flex flex-row item-center gap-3">
                                        <div class="bg-green-200 rounded-full p-1 flex flex-row justify-center items-center" style="width: 22px; height: 22px;">
                                            <font-awesome-icon icon="fa-solid fa-check" :style="{fontSize: '13px'}" />
                                        </div>
                                        <p>Advanced reporting</p>
                                    </li>
                                    <li class="flex flex-row item-center gap-3">
                                        <div class="bg-green-200 rounded-full p-1 flex flex-row justify-center items-center" style="width: 22px; height: 22px;">
                                            <font-awesome-icon icon="fa-solid fa-check" :style="{fontSize: '13px'}" />
                                        </div>
                                        <p>Up to 20 individual users</p>
                                    </li>
                                    <li class="flex flex-row item-center gap-3">
                                        <div class="bg-green-200 rounded-full p-1 flex flex-row justify-center items-center" style="width: 22px; height: 22px;">
                                            <font-awesome-icon icon="fa-solid fa-check" :style="{fontSize: '13px'}" />
                                        </div>
                                        <p>40GB individual data each user</p>
                                    </li>
                                    <li class="flex flex-row item-center gap-3">
                                        <div class="bg-green-200 rounded-full p-1 flex flex-row justify-center items-center" style="width: 22px; height: 22px;">
                                            <font-awesome-icon icon="fa-solid fa-check" :style="{fontSize: '13px'}" />
                                        </div>
                                        <p>Priority chat and email support</p>
                                    </li>
                                </ul>
                                <button class="bg-purple-700 text-white rounded-md mt-6 py-2 w-full">Get Started</button>
                            </div>
                            <!-- <div class="px-6 py-3 shadow-md">
                                
                                <h6 class="text-sm text-center mb-2">Billed annually</h6>
                                <button class="bg-purple-700 text-white rounded-md py-2 w-full">Get Started</button>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container mx-auto px-3 md:px-4 pt-12 md:pt-16 pb-16">
                <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10">
                    <div>
                        <h2 class="text-3xl md:text-5xl mt-3 mb-4 md:mb-6 font-semibold">Be the first to know when we launch</h2>
                        <p>We’re still building. Subscribe for updates and 20% off when we launch. No spam, we promise!</p>
                        <div class="flex flex-row justify-start items-center gap-3 mt-10 mb-3">
                            <input type="email" placeholder="Enter your email" class="w-full border border-gray-300 rounded-md px-2 py-3 placeholder:text-sm" />
                            <button class="bg-purple-700 py-3 px-6 text-white rounded-md hidden md:block">Subscribe</button>
                        </div>
                        <p class="text-sm">We care about your data in our <a href="#" class="underline">privacy policy</a>.</p>

                        <button class="bg-purple-700 py-3 px-6 text-white rounded-md w-full flex flex-row justify-center mt-4 md:hidden">Subscribe</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
        <footer class="bg-purple-700">
            <div class="container mx-auto px-3 md:px-4 pt-12 md:pt-16 pb-12">
                <div class="flex flex-col justify-center items-center pb-12 border-b border-b-gray-400">
                    <h5 class="text-2xl text-center md:text-3xl text-gray-200 mb-3 font-semibold">No long-term contracts. No catches. Simple.</h5>
                    <p class="text-gray-200 text-center">Start your 30-day free trial. Cancel anytime.</p>
                    <div class="flex flex-col md:flex-row gap-2 justify-center mt-5 w-full">
                        <button class="text-black text-sm font-semibold py-3 px-6 bg-gray-200 rounded-md gap-3 w-full md:w-auto">
                            <font-awesome-icon icon="fa-regular fa-circle-play" />
                            View demo
                        </button>
                        <button class="bg-purple-800 text-sm font-semibold py-3 px-6 text-gray-200 rounded-md w-full md:w-auto">Get started</button>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-12 pt-10 pb-10 border-b border-b-gray-400">
                    <div class="col-span-8">
                        <div class="flex flex-row items-center mb-5 gap-2">
                            <div class="bg-gray-200 rounded flex flex-row justify-center items-center" style="width: 30px; height: 30px;">
                                <font-awesome-icon icon="fa-cloud-bolt" />
                            </div>
                            <h2 class="font-semibold text-lg text-gray-200">Untitled UI</h2>
                        </div>
                        <p class="md:w-96 text-gray-200">Design amazing digital experiences that create more happy in the world.</p>

                        <ul class="md:inline-flex md:space-x-5 mt-7 md:mt-10 columns-2 md:columns-6">
                            <li class="text-gray-200 mb-3 mb:mb-0">Overview</li>
                            <li class="text-gray-200 mb-3 mb:mb-0">Features</li>
                            <li class="text-gray-200 mb-3 mb:mb-0">Pricing</li>
                            <li class="text-gray-200 mb-3 mb:mb-0">Careers</li>
                            <li class="text-gray-200 mb-3 mb:mb-0">Help</li>
                            <li class="text-gray-200 mb-3 mb:mb-0">Privacy</li>
                        </ul>
                    </div>
                    <div class="col-span-4 flex flex-col md:items-end mt-10 md:mt-0">
                        <div class="md:w-32">
                            <p class="text-gray-200 mb-2.5 font-semibold">Get the app.</p>
                            <div class="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-3 items-start">
                                <a href="#">
                                    <img src="@/assets/apple-store.svg" alt="" style="height: 45px; width: 128px;" />
                                </a>
                                <a href="#">
                                    <img src="@/assets/google-store.svg" alt="" style="height: 45px; width: 128px;" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col-reverse md:flex-row  md:justify-between pt-10 pb-0">
                    <div class="mt-5 md:mt-0">
                        <p class="text-gray-200">© 2077 Untitled UI. All rights reserved.</p>
                    </div>
                    <div class="inline-flex gap-5">
                        <ul class="social-link">
                            <li><img src="@/assets/002.png" alt=""></li>
                        </ul>
                        <ul class="social-link">
                            <li><img src="@/assets/005.png" alt=""></li>
                        </ul>
                        <ul class="social-link">
                            <li><img src="@/assets/033.png" alt=""></li>
                        </ul>
                        <ul class="social-link">
                            <li><img src="@/assets/019.png" alt=""></li>
                        </ul>
                        <ul class="social-link">
                            <li><img src="@/assets/023.png" alt=""></li>
                        </ul>
                        <ul class="social-link">
                            <li><img src="@/assets/021.png" alt=""></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.company img{
    width: 80%;
}

@media screen and (min-width: 768px) {
    .banner {
        background: url('@/assets/whatsapp.png') center/ 45%;
        background-repeat: no-repeat;
        background-position: 100% 70%;
    }   
}
.banner-container div{
    background-size: auto 200%;
    background-image: url('@/assets/phone.png');
    height: 250px;
    min-width: auto;
    background-repeat: no-repeat;
    background-position: top center;
}
.start-trail div{
    background-size: auto 190%;
    background-image: url('@/assets/phone.png');
    height: 300px;
    min-width: auto;
    background-repeat: no-repeat;
    background-position: top center;
}
@media screen and (min-width: 768px) {
    .banner-container div{
        background-size: auto 100%;
        min-height: 600px;
        min-width: auto;
        background-repeat: no-repeat;
        background-position: center;
    }   
    .start-trail div{
        background-size: auto 100%;
        background-image: url('@/assets/whatsapp.png');
        min-height: 400px;
        min-width: auto;
        background-repeat: no-repeat;
        background-position: top center;
    }
}
.social-link img{
    width: 24px;
    height: 24px;
}
</style>