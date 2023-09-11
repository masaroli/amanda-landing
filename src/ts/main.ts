// Import Base file
import { registerSW } from 'virtual:pwa-register';
import 'virtual:svg-icons-register';
import sliderControlNavigation from './utils/sliderNavigation';
// Import SCSS
import '/scss/site.scss';
import axios from 'axios';
// Import Libraries
import './libs/smoothScroll';
import './libs/modal';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';
import { ScrollDirection, ScrollDirectionManager } from './libs/scrollDirectionManager';
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

// Send form
const form = document.querySelector('[data-element="demo-form"]') as HTMLFormElement;

form &&
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const formData = new FormData(this);
    const responseElement = document.getElementById('response-message');
    axios
      .post('send_email.php', formData)
      .then(function (response) {
        if (responseElement) {
          responseElement.textContent = 'Muchas Gracias. Nos pondremos en contacto con usted' ?? response.data;
          responseElement.classList.add('show');
        }
      })
      .catch(function () {
        if (responseElement) responseElement.textContent = 'An error occurred while processing your request.';
      });
  });
const navigationElement = document.querySelector('[data-element="navigation"]');
const demoButtonElement = document.querySelector('[data-element="demo-button-element"]');
function navOnScroll(direction: ScrollDirection) {
  if (navigationElement) {
    if (direction === 'initial' || direction === 'up') {
      navigationElement.classList.remove('hide');
    } else {
      navigationElement.classList.add('hide');
    }
  }
}
function demoOnScroll(direction: ScrollDirection) {
  if (demoButtonElement) {
    if (direction === 'initial') {
      demoButtonElement.classList.add('hide');
    } else {
      demoButtonElement.classList.remove('hide');
    }
  }
}
// Scorll Direction
new ScrollDirectionManager({ initialOffset: 145, onDirectionChange: navOnScroll });
new ScrollDirectionManager({ initialOffset: 1200, onDirectionChange: demoOnScroll });

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
