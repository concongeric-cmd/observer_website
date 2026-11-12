# Design resources / 设计资源

The prototype is editable in the repository’s React, CSS and SVG/PNG source. There is no separate Figma file or generated design package in this repository. / 原型可在仓库内通过 React、CSS、SVG/PNG 源文件编辑。本仓库没有独立的 Figma 文件或生成式设计包。

| Resource / 资源 | Edit here / 编辑位置 | Purpose / 用途 |
|---|---|---|
| Base typography, colors and focus styles / 基础字体、颜色与焦点样式 | src/styles/base.css | Global type, background, text and keyboard focus / 全局字体、底色、文字与键盘焦点 |
| Main page and profile layouts / 主页与档案布局 | src/styles/explorer.css | Home, country overview, school directory, school profiles, charts and timelines / 主页、国家概览、园所目录、档案、图表与日程 |
| Header, footer and shared shell / 页眉、页脚与页面外框 | src/styles/site.css | Site-wide navigation and common structure / 全站导航和通用结构 |
| Responsive adjustments / 响应式布局 | src/styles/responsive.css | Smaller-screen layout rules / 小屏幕布局 |
| Monthly updates and provider categories / 月度更新与机构类别 | src/styles/monthly.css; src/styles/provider-types.css | Section-specific presentation / 专题页面样式 |
| Page components / 页面组件 | src/components/ and src/pages/ | Editable HTML structure, copy and interaction / 可编辑的页面结构、文案与交互 |
| School and country content / 园所与国家内容 | src/data/ | Bilingual content and source records / 双语内容与来源记录 |
| Image assets / 图片资源 | src/assets/ | Existing image files / 现有图片 |

Use the existing bilingual pair order [Chinese, English] and the current semantic color and spacing conventions when extending the design. / 新增双语内容请保持 [中文, English] 顺序，并延续现有语义颜色与间距规则。
