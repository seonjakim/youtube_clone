import React from 'react'

const VideoFrame = ({nav, videoSection, suggestion}) => {
  return (
    <div className='video-view-container'>
      <header className='header'>{nav}</header>
      <section className='video-section'>{videoSection}</section>
      <section className='video-suggestion'>{suggestion}</section>
    </div>
  )
}
export default VideoFrame