const videoElement = document.getElementById('input_video');
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const canvasCtx = canvasElement.getContext('2d');

function onResults(results) {
  if(results.multiFaceLandmarks[0] == undefined){
    console.log("sei uscito fuori")
  }
  else{
    Matter.Body.set(ground, "position", {x: ((1-results.multiFaceLandmarks[0][10].x)*800) , y: (results.multiFaceLandmarks[0][10].y*600)})
  }

}

const faceMesh = new FaceMesh({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
}});
faceMesh.setOptions({
  maxNumFaces: 1,
  refineLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
faceMesh.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await faceMesh.send({image: videoElement});
  },
  width: 800,
  height: 600
});
camera.start();
