import { KeenSliderInstance } from 'keen-slider';

function sliderControlNavigation(slider: KeenSliderInstance) {
  // const arrowWrapper = document.querySelector('#testimonios-arrow-wrapper') as HTMLElement;
  const arrowLeft = document.querySelector('#testimonios-arrow-left') as HTMLElement;
  const arrowRight = document.querySelector('#testimonios-arrow-right') as HTMLElement;

  function markup() {
    arrowMarkup();
  }

  function arrowMarkup() {
    arrowLeft && arrowLeft.addEventListener('click', () => slider.prev());
    arrowRight && arrowRight.addEventListener('click', () => slider.next());
  }

  function updateClasses() {
    const slide = slider.track.details.rel;
    slide === 0 ? arrowLeft?.classList.add('arrow--disabled') : arrowLeft?.classList.remove('arrow--disabled');

    // @ts-ignore
    slide + slider.options?.slides?.perView === slider.track.details.slides.length
      ? arrowRight?.classList.add('arrow--disabled')
      : arrowRight?.classList.remove('arrow--disabled');
  }

  slider.on('created', () => {
    markup();
    updateClasses();
  });
  slider.on('optionsChanged', () => {
    console.log(2);
    markup();
    markup();
    updateClasses();
  });
  slider.on('slideChanged', () => {
    updateClasses();
  });
  slider.on('destroyed', () => {
    markup();
  });
}

export default sliderControlNavigation;
