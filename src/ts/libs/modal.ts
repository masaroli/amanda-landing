import MicroModal from 'micromodal';
const modal = MicroModal.init({
  onClose: (modal) => playPauseModalVideo(modal), // [2]
});

function playPauseModalVideo(modal: HTMLElement | undefined) {
  if (modal) {
    const videoElement = modal.querySelector('[data-element="video"]') as HTMLVideoElement;
    videoElement.pause();
  }
}
export default modal;
