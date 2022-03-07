// //const { Socket } = require("dgram");
// //const { text } = require("body-parser");
// //const { callbackify } = require("util");

// const socket = io('/');
// const videoGrid = document.getElementById('video-grid');
// console.log(videoGrid); //  --> this was giving null earlier i.e it wasnt able to read videoGfrid, as it was reasding the script.js way to early wehe it was mentioend in startng of the ejs file. we now mention it in the bottom of the body.
// const myVideo = document.createElement('video');
// myVideo.muted = true;


// var peer = new Peer(undefined,{
//     path:'/peerjs',
//     host :'/',
//     port:'3030'
// });
// let myVideoStream
// navigator.mediaDevices.getUserMedia({

//     video: true,
//     audio: true
// }).then(stream =>{

//    myVideoStream = stream;
//    addVideoStream(myVideo,stream);
   
//    peer.on('call',call =>{
//        call.answer(stream)
//        const video = document.createElement('video')
//        call.on('stream',userVideoStream=>{
//            addVideoStream(video,userVideoStream)
//        })
//    })

//    socket.on('user-connected',(userId)=>{
//     connectToNewUser(userId,stream);})


// let text = $('input');
// $('html').keydown((e)=>{
//     if(e.which==13 && text.val().length!==0)
//     {  
//         //console.log(text.val())
//         socket.emit('messgae',text.val());
//         text.val('');
//     }
// })

// socket.on('createMessage',message=>{
//     //console.log('This is coming from server',message)
//     console.log(message);
//     $('.messages').append(`<li class="message"><b>user</b><br/>${message}<li>`);
//     scrollToBottom();
// })



// })

// //socket.emit('join-room',ROOM_ID);

//  /*socket.on('user-connected',(userId)=>{

//      connectToNewUser(userId,stream);

// })*/
// peer.on('open',id=>{
//     //console.log(id);
//     socket.emit('join-room',ROOM_ID,id);
// })

// const connectToNewUser = (userId,stream) =>{
//     ///console.log('new-user');
//     //console.log(userId);
//     const call = myPeer.call(userId,stream)
//     const video = document.createElement('video')
//     call.on('stream',userVideoStream=>{
//         addVideoStream(video,userVideoStream);
//     })
// }

// const addVideoStream = (video,stream)=>{

//     video.srcObject = stream;
//     video.addEventListener('loadedmetadata',()=>{
//         video.play();
//     })
//     videoGrid.append(video);
// }
// const scrollToBottom = () =>{

//     var d = $('.main__chat_window');
//     d.scrollTop(d.prop("scrolHeight"));
// }

// const muteUnmute = ()=>{
//     const enabled = myVideoStream.getAudioTracks()[0].enabled;
//     if(enabled){
//         myVideoStream.getAudioTracks()[0].enabled = false;
//         setUnmuteButton();
//     }else{
//         setMuteButton();
//         myVideoStream.getAudioTracks()[0].enabled = true;
//     }
// }


const socket = io('/')
const videoGrid = document.getElementById('video-grid')
const myPeer = new Peer(undefined, {
  path: '/peerjs',
  host: '/',
  port: '443'
})
let myVideoStream;
const myVideo = document.createElement('video')
myVideo.muted = true;
const peers = {}
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  myVideoStream = stream;
  addVideoStream(myVideo, stream)
  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })
  })

  socket.on('user-connected', userId => {
    connectToNewUser(userId, stream)
  })
  // input value
  let text = $("input");
  // when press enter send message
  $('html').keydown(function (e) {
    if (e.which == 13 && text.val().length !== 0) {
      socket.emit('message', text.val());
      text.val('')
    }
  });
  socket.on("createMessage", message => {
    $("ul").append(`<li class="message"><b>user</b><br/>${message}</li>`);
    scrollToBottom()
  })
})

socket.on('user-disconnected', userId => {
  if (peers[userId]) peers[userId].close()
})

myPeer.on('open', id => {
  socket.emit('join-room', ROOM_ID, id)
})

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream)
  })
  call.on('close', () => {
    video.remove()
  })

  peers[userId] = call
}

function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)
}



const scrollToBottom = () => {
  var d = $('.main__chat_window');
  d.scrollTop(d.prop("scrollHeight"));
}


const muteUnmute = () => {
  const enabled = myVideoStream.getAudioTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getAudioTracks()[0].enabled = false;
    setUnmuteButton();
  } else {
    setMuteButton();
    myVideoStream.getAudioTracks()[0].enabled = true;
  }
}

const playStop = () => {
  console.log('object')
  let enabled = myVideoStream.getVideoTracks()[0].enabled;
  if (enabled) {
    myVideoStream.getVideoTracks()[0].enabled = false;
    setPlayVideo()
  } else {
    setStopVideo()
    myVideoStream.getVideoTracks()[0].enabled = true;
  }
}

const setMuteButton = () => {
  const html = `
    <i class="fas fa-microphone"></i>
    <span>Mute</span>
  `
  document.querySelector('.main__mute_button').innerHTML = html;
}

const setUnmuteButton = () => {
  const html = `
    <i class="unmute fas fa-microphone-slash"></i>
    <span>Unmute</span>
  `
  document.querySelector('.main__mute_button').innerHTML = html;
}

const setStopVideo = () => {
  const html = `
    <i class="fas fa-video"></i>
    <span>Stop Video</span>
  `
  document.querySelector('.main__video_button').innerHTML = html;
}

const setPlayVideo = () => {
  const html = `
  <i class="stop fas fa-video-slash"></i>
    <span>Play Video</span>
  `
  document.querySelector('.main__video_button').innerHTML = html;
}