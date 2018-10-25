## audio标签api
- 播放：play
- 暂停：pause
- 进度更新：updateTime

## audio标签属性
- 总时长：duration
- 当前播放时间：currentTime
- 自动播放：autoplay
- 音频文件：src

## 歌词思路
- 解析歌词
- 播放进度更新时把当前播放时间当作props传递过去
- 匹配时间，用swiper滚动到当前播放的歌词
