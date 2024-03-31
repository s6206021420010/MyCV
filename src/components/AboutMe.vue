<template>
<!-- Blog post about this is here: https://www.andrewwalpole.com/blog/glowing-blurred-backgrounds-with-css/ -->
<div class="blur-container"
     style="--blur:12vw;">
  
  <div class="shape" 
       style="--path:polygon(50.9% 37.2%, 43.5% 34.7%, 33.6% 26.1%, 39.2% 10.8%, 26.2% 0.0%, 4.8% 6.4%, 0.0% 30.4%, 20.7% 37.2%, 33.4% 26.3%, 43.2% 34.9%, 45.0% 35.6%, 43.6% 46.4%, 37.8% 59.5%, 21.8% 63.2%, 11.7% 76.1%, 22.9% 91.3%, 47.4% 91.3%, 54.0% 79.0%, 38.0% 59.6%, 43.9% 46.4%, 45.2% 35.5%, 50.9% 37.6%, 56.1% 36.8%, 59.8% 47.6%, 70.3% 61.9%, 87.7% 56.0%, 96.4% 37.4%, 88.6% 15.1%, 63.7% 16.7%, 55.2% 33.6%, 55.9% 36.6%, 50.9% 37.2%);"></div>
  
  <div class="shape" 
       style="--path:polygon(50.9% 37.2%, 43.5% 34.7%, 33.6% 26.1%, 39.2% 10.8%, 26.2% 0.0%, 4.8% 6.4%, 0.0% 30.4%, 20.7% 37.2%, 33.4% 26.3%, 43.2% 34.9%, 45.0% 35.6%, 43.6% 46.4%, 37.8% 59.5%, 21.8% 63.2%, 11.7% 76.1%, 22.9% 91.3%, 47.4% 91.3%, 54.0% 79.0%, 38.0% 59.6%, 43.9% 46.4%, 45.2% 35.5%, 50.9% 37.6%, 56.1% 36.8%, 59.8% 47.6%, 70.3% 61.9%, 87.7% 56.0%, 96.4% 37.4%, 88.6% 15.1%, 63.7% 16.7%, 55.2% 33.6%, 55.9% 36.6%, 50.9% 37.2%);
       --offset:180deg;
       --speed: 6000ms;
       --background: linear-gradient( cyan, blue, green, purple, cyan);
       "></div>
</div>
<div class="content">
    <div class="linear w-100 d-flex justify-content-center" id="about_me">
        <div class="container">
            <div class="box box-1" style="--img: url(https://cdn.pixabay.com/photo/2023/09/03/11/30/fire-8230528_1280.jpg);" data-text="Fire"></div>
            <div class="box box-2" style="--img: url(https://cdn.pixabay.com/photo/2023/08/25/20/59/town-8213713_640.jpg);" data-text="Sora"></div>
            <div class="box box-3" style="--img: url(https://cdn.pixabay.com/photo/2023/08/15/05/37/lighthouse-8191282_640.jpg);" data-text="Kaito"></div>
            <div class="box box-4" style="--img: url(https://i.postimg.cc/KjqWx5ft/img-4.jpg);" data-text="Tsuki"></div>
            <div class="box box-5" style="--img: url(https://cdn.pixabay.com/photo/2018/06/30/09/29/monkey-3507317_1280.jpg);" data-text="Music"></div>
        </div>
    </div>
   
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
html{
background: #001220;
}
.fade_in {
    animation-name: fade;
    animation-duration: 1s;
}

.opacity {
    background: rgba(red, green, blue, 0);
}

.content {
    margin-top: 8rem;
}

@keyframes fade {
    0% {
        margin-left: 10rem;
        opacity: 0;
    }

    100% {
        opacity: 100;
        margin-left: 0rem;
    }
}
@import url("https://fonts.googleapis.com/css2?family=Figtree&display=swap");

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
	background: #000 ;
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
