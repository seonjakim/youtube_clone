import React from 'react'

const Video = () => {
  return (
    <div>
      <video
        id='video-tag'
        poster='https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg'
      >
        <source
          src='https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4'
          type='video/mp4'
        />
        <source
          src='https://archive.org/download/ElephantsDream/ed_hd.ogv'
          type='video/ogg'
        />
        <source
          src='https://archive.org/download/ElephantsDream/ed_hd.avi'
          type='video/avi'
        />
        Your browser doesn't support HTML5 video tag.
      </video>
    </div>
  )
}
export default Video
