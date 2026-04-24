let audioContext = null;
let analyser = null;
let source = null;

export const getAnalyser = () => {
  if (!analyser) {
    if (!window.AudioContext && !window.webkitAudioContext) return null;
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
  }
  return analyser;
};

export const connectAudioElement = (audioElement) => {
  const ana = getAnalyser();
  if (ana && !source) {
    source = audioContext.createMediaElementSource(audioElement);
    source.connect(ana);
    ana.connect(audioContext.destination);
  }
  
  if (audioContext && audioContext.state === 'suspended') {
    audioContext.resume();
  }
};

export const getFrequencyData = () => {
  if (!analyser) return null;
  const dataArray = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(dataArray);
  return dataArray;
};
