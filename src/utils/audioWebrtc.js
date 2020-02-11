
'use strict'

var audioWebrtc = {}

audioWebrtc.config = {
  audio: true,
  video: false
}
audioWebrtc.media = null
audioWebrtc.mediaError = null
audioWebrtc.GetUserMedia = function () {
  return new Promise((resolve, reject) => {
    navigator.mediaDevices.getUserMedia(audioWebrtc.config).then(stream => {
      audioWebrtc.media = stream
      resolve(stream)
    }).catch(error => {
      audioWebrtc.mediaError = error
      reject(error)
    })
  })
}

audioWebrtc.GetUserMedia.prototype = {
  start: function () {
    return new Promise((resolve, reject) => {
      if (audioWebrtc.media === null) {
        reject(audioWebrtc.mediaError)
      } else {
        resolve()
      }
    })
  }
}

export default function () {
  return new audioWebrtc.GetUserMedia()
}
