import videoScreen from '../videoScreen'
import { icons } from '../data/utils'

const videoSection = {
  render: async () => `
    <div class='video-space'></div>
    <div class='introduction-space'>
      <div id='info-contents'>
        <h1>귀여운 진우</h1>
        <div class='contents-popularity-info'>      
          <div style='display:flex;'>
            <p> 조회수 570,536회</p>
            <p style='margin: auto 4px;'>•</p>
            <p>2021. 4. 15.</p>
          </div>
          <div class='info-contents-btn'>
          </div>
        </div>
      </div>
      <div id='info-creator'>
      </div>
    </div>
    <div class='comment-space'><div>
  `,
  after_render: async () => {
    const videoSpace = document.querySelector('.video-space')
    const infoSpace = document.querySelector('.info-contents-btn')
    videoSpace.innerHTML = await videoScreen.render()
    await videoScreen.after_render()

    let thumbup, thumbdown, share, save, more
    ;({ thumbup, thumbdown, share, save, more } = icons)

    const iconArr = [thumbup, thumbdown, share, save, more]

    const infoIcons = iconArr
      .map(
        (el) => `
        <button style='width:24px;'>${el}</button>
        <div style='width:24px;height:24px;background-color:blue;'></div>
      `
      )
      .join('')

    infoSpace.innerHTML = infoIcons
  },
}

export default videoSection
