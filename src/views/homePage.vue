<template>
<!-- <div @scroll="handleScroll" style="height: 100vh" class="overflow-auto"> -->
<div @scroll="handleScroll" class="overflow-auto" style="height: 100vh">
    <div>
        <span class=" fs-1 fw-bold">
            <font-awesome-icon icon="fa-solid fa-house" />My Profile
        </span>
    </div>
    <hr>
    <a-row>
        <a-col :span="12">
            <img src="../assets/retro.png" alt="">
        </a-col>
        <a-col :span="12">
            <div class="pt-4 ">
                <div class="d-flex flex-column rounded-3 p-3 w-75 " style="">
                    <span class="fs-3 fw-bold ">My Name : <span class="fw-normal">TARATEP KERDBOON</span></span>
                    <span class="fs-3 fw-bold ">Phone Number : <span class="fw-normal">092-7604466</span></span>
                    <span class="fs-3 fw-bold ">Age : <span class="fw-normal">26</span></span>
                    <span class="fs-3 fw-bold ">Current Address : <span class="fw-normal">Chaengwattana</span></span>
                    <hr class="my-3">

                    <div class="d-flex mt-3">
                        <button class="button" @click="Tester()">
                            <span class="button_lg">
                                <span class="button_sl"></span>
                                <span class="button_text ">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <GithubOutlined class="fs-1 me-2" />
                                        <span>Git hub</span>
                                    </div>
                                </span>
                            </span>
                        </button>
                        <button class="button ms-2" @click="linkin()">
                            <span class="button_lg">
                                <span class="button_sl"></span>
                                <span class="button_text ">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <LinkedinOutlined class="fs-1 me-2" />
                                        <span>Linkin</span>
                                    </div>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </a-col>
    </a-row>
    <a-card>
        <div class="d-flex flex-column rounded-3 p-3 ">
            <span class="fs-3 fw-bold ">EDUCATION </span>
            <a-row class="mt-3">
                <a-col :span="4">
                <Transition>
                    <img v-if="score > 260" src="../assets/Seal_of_KMUTNB.svg.png" alt="" style="width: 150px">
                </Transition>
                </a-col>
                <a-col class="d-flex flex-column">
                    <span class="fs-5 mt-2 fw-normal text-nowrap fw-bold">KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</span>
                    <span class="fs-5 fw-normal text-nowrap">Jun 2019 - Jun 2022</span>
                    <span class="fs-5 fw-normal text-nowrap">- Information Technology</span>
                    <span class="fs-5 fw-normal text-nowrap">- GPA: 2.56</span>
                </a-col>
            </a-row>
            <a-row class="mt-3">
                <a-col :span="4">
                <Transition>
                    <img v-if="score > 260" src="../assets/images.png" alt="" style="width: 150px">
                </Transition>
                </a-col>
                <a-col class="d-flex flex-column">
                    <span class="fs-5 mt-2 fw-normal text-nowrap fw-bold">SUPHANBURI TECHNICAL CALLEGE INFORMATION TECHNOLOGY</span>
                    <span class="fs-5 fw-normal text-nowrap">Jun 2017 - Jun 2018</span>
                    <span class="fs-5 fw-normal text-nowrap">- Information Technology</span>
                    <span class="fs-5 fw-normal text-nowrap">- GPA: 2.89</span>
                </a-col>
            </a-row>

            <hr class="my-3">
            <span class="fs-3 fw-bold">EXPERIENCE</span>
            <span class="fs-5 mt-2 fw-normal text-nowrap fw-bold">The primer Developer</span>
            <span class="fs-5 fw-normal text-nowrap">Jun 2023 - Present | <span class="text-success">Front-end Developer</span></span>
            <span class="fs-5 fw-normal d-flex align-items-center"> <CaretRightOutlined />  Rajavej Hospital Bangkok: Developed front-end systems for Rajavej Hospital using HTML, Bootstrap, and VueJS.</span>
            <span class="fs-5 fw-normal d-flex align-items-center"> <CaretRightOutlined />  National Cancer Institute: Designed front-end systems for the National Cancer Institute using HTML, Bootstrap, and VueJS. </span>
            <span class="fs-5 fw-normal d-flex align-items-center"> <CaretRightOutlined />  Political Party: Took responsibility for developing front-end systems for a political party using HTML,Bootstrap, and VueJS.</span>
            <!-- TODO: -->
            <span class="fs-5 mt-2 fw-normal text-nowrap fw-bold">L&E manufacturing</span>
            <span class="fs-5 fw-normal text-nowrap">Sep 2022 - Jun 2023 | <span class="text-primary">Web Developer</span></span>
            <span class="fs-5 fw-normal d-flex align-items-center"> <CaretRightOutlined /> Collaborate in the development of Enterprise Resource Planning (ERP) systems.</span>
            <span class="fs-5 fw-normal d-flex align-items-center"> <CaretRightOutlined />  Participate in the development of payroll calculation systems.</span>
            <span class="fs-5 fw-normal d-flex align-items-center"> <CaretRightOutlined />  Take responsibility for developing employee fingerprint scanning systems.</span>
            <span class="fs-5 fw-normal d-flex align-items-center"> <CaretRightOutlined />  Provide support and troubleshoot various issues for employees and users within the company.</span>
            <!-- TODO: -->
            <span class="fs-5 mt-2 fw-normal text-nowrap fw-bold">TELECORP Co.,LTD.</span>
            <span class="fs-5 fw-normal text-nowrap">Jan 2021 - April 2021 | <span class="text-primary">Intern</span></span>
            <span class="fs-5 fw-normal d-flex align-items-center"> <CaretRightOutlined />  I also was working in the Developer departments using JavaScript , HTML , Tailwind for front-end management and using React , Lalavel</span>
        </div>
    </a-card>
    <div>
    </div>
</div>
</template>

<script>
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    CaretRightOutlined
} from '@ant-design/icons-vue'
export default {
    data() {
        return {
            score: null
        }
    },
    methods: {
        linkin() {
            window.open('https://www.linkedin.com/in/taratep-kerdboon-a0b46826b/', '_blank');
        },
        Tester() {
            window.open('https://github.com/s6206021420010', '_blank');
        },
        handleScroll(event) {
            console.log('Scroll position:', event.target.scrollTop);
            this.score = event.target.scrollTop
        }
    },
    components: {
        GithubOutlined,
        LinkedinOutlined,
        MailOutlined,
        CaretRightOutlined
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Figtree&display=swap");
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #0f1923;
    cursor: pointer;
    position: relative;
    padding: 8px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: all .15s ease;
    width: 50%;
}

.button::before,
.button::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid #7D8082;
    transition: all .15s ease;
}

.button::before {
    top: 0;
    border-bottom-width: 0;
}

.button::after {
    bottom: 0;
    border-top-width: 0;
}

.button:active,
.button:focus {
    outline: none;
}

.button:active::before,
.button:active::after {
    right: 3px;
    left: 3px;
}

.button:active::before {
    top: 3px;
}

.button:active::after {
    bottom: 3px;
}

.button_lg {
    position: relative;
    display: block;
    padding: 10px 20px;
    color: #fff;
    background-color: #0f1923;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;
}

.button_lg::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
}

.button_lg::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all .2s ease;
}

.button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-color: #ff4655;
    transform: skew(-15deg);
    transition: all .2s ease;
}

.button_text {
    position: relative;
}

.button:hover {
    color: #0f1923;
}

.button:hover .button_sl {
    width: calc(100% + 15px);
}

.button:hover .button_lg::after {
    background-color: #fff;
}

.nm_text {
    color: #a5dbff !important;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Figtree", sans-serif;
}

body {
    display: grid;
    place-content: center;
    min-height: 100vh;
    background: #000;
}

.container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1em;
    width: 800px;
    height: 500px;
    transition: all 400ms;
}

.container:hover .box {
    filter: grayscale(100%) opacity(24%);
}

.box {
    position: relative;
    background: var(--img) center center;
    background-size: cover;
    transition: all 400ms;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .box:hover {
    filter: grayscale(0%) opacity(100%);
}

.container:has(.box-1:hover) {
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr;
}

.container:has(.box-2:hover) {
    grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
}

.container:has(.box-3:hover) {
    grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
}

.container:has(.box-4:hover) {
    grid-template-columns: 1fr 1fr 1fr 3fr 1fr;
}

.container:has(.box-5:hover) {
    grid-template-columns: 1fr 1fr 1fr 1fr 3fr;
}

.box:nth-child(odd) {
    transform: translateY(-16px);
}

.box:nth-child(even) {
    transform: translateY(16px);
}

.box::after {
    content: attr(data-text);
    position: absolute;
    bottom: 20px;
    background: #000;
    color: #fff;
    padding: 10px 10px 10px 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    transform: translateY(60px);
    opacity: 0;
    transition: all 400ms;
}

.box:hover::after {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 400ms;
}
</style>
