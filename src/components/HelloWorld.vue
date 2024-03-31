<template>

</template>

<script>
export default {

}
</script>

<style scoped>
nav {
    z-index: 99;
}

a {
    color: #cb6ae3 !important;
}

span {
    font-size: x-large;
}

.nav-link:hover {
    animation-name: fade;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 100;
    }
}
</style>
