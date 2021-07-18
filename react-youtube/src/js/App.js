import React from 'react'
import VideoFrame from './view/VideoFrame'
import Video from './components/Video'

const App = () => {
  return <VideoFrame videoSection={<Video />}></VideoFrame>
}
export default App
