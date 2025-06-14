// === Tailwind стили
import './style.css';
// === GSAP + плагины

import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother,ScrollToPlugin,RoughEase);

// === Swiper
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true }
});

// === MicroModal
import MicroModal from 'micromodal';
MicroModal.init();

// === JustValidate
import JustValidate from 'just-validate';
const validate = new JustValidate('#form');

// === LazySizes
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// === Barba.js
import barba from '@barba/core';
barba.init({
    transitions: [
        {
            name: 'fade',
            leave() { /* ... */ },
            enter() { /* ... */ }
        }
    ]
});
