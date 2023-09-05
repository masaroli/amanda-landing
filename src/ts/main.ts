// Import Base file
import { registerSW } from 'virtual:pwa-register';
import 'virtual:svg-icons-register';
import sliderControlNavigation from './utils/sliderNavigation';
// Import SCSS
import '/scss/site.scss';

// Import Libraries
import './libs/smoothScroll';
import './libs/modal';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

// Import Namespace
import sample from './namespace/sample';
import _modal from './libs/modal';

new KeenSlider(
  '#testimonios-slider',
  {
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 1, spacing: 15 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 15 },
      },
    },
    created: () => {
      console.log('created');
    },
  },
  [sliderControlNavigation],
);

// Call Namespace
const checkSamplePage = document.getElementById('sample');
if (checkSamplePage) {
  sample();
}

// Register SW
const updateSW = registerSW({
  onNeedRefresh() {
    console.log('onNeedRefresh');
  },
  onOfflineReady() {
    console.log('onOfflineReady');
  },
});

void updateSW();
