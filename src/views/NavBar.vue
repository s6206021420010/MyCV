<template>
<a-layout>
    <a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint">
        <!-- <div class="logo d-flex align-items-center"><img src="./assets/logo.jpg" class="p-3" style="width: 200px; border-radius: 20px;" alt=""></div> -->
        <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
            <a-menu-item key="1">
                <user-outlined />
                <span class="nav-text">My Profile</span>
            </a-menu-item>
            <a-menu-item key="2">
                <video-camera-outlined />
                <span class="nav-text">Contact Me</span>
            </a-menu-item>
            <a-menu-item key="3">
                <upload-outlined />
                <span class="nav-text">nav 3</span>
            </a-menu-item>
            <a-menu-item key="4">
                <user-outlined />
                <span class="nav-text">nav 4</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
    <a-layout>
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content :style="{ margin: '24px 16px 0' }">
            <div v-if="selectedKeys == 1" :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"><homePage/></div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            Ant Design ©2018 Created by Vue js
        </a-layout-footer>
    </a-layout>
</a-layout>
</template>

<script>
import Swal from 'sweetalert2';
import homePage from './homePage.vue';
import homePageVue from './homePage.vue';
export default {
    data() {
        return {
            selectedKeys: ['1'],
        }
    },
    components: {},
    methods: {
        Tester() {
            Swal.fire(
                'Good job!',
                'You clicked the button!',
                'success'
            )
        }
    },
    components: {
        homePage
    }
}
</script>

<style scoped>

</style>
