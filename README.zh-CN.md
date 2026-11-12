# 美日幼教观察站

面向幼儿教育园所经营者与管理者的双语资料原型。

主要浏览路径：主页 → 国家 → 园所目录 → 园所档案。园所自己的教育方针与国家层面的政策入口分开呈现。

## 开发

- npm install：安装依赖
- npm run dev：启动本地预览
- npm run build：生成 dist
- npm run preview：预览生产构建
- npm run lint：检查代码风格
- npm run check:routes：检查路由、链接、双语顺序、搜索、筛选和档案
- npm run format / npm run format:check：格式化或检查格式

Windows PowerShell 如果阻止 npm.ps1，请使用 npm.cmd。

## 路由

- /：主页；/home 重定向至主页
- /japan、/united-states：国家概览与园所目录
- /:countrySlug/centres：目录别名
- /:countrySlug/centres/:schoolId：园所档案
- /:countrySlug/sector：国家制度与行业概览
- /:countrySlug/:sectionId：其他国家专题
- /japan/operations/:articleId：日本经营管理文章
- /monthly：月度观察记录
- /about：编辑原则

目录搜索词、地区与理念筛选保存在 URL 查询参数中。从档案返回目录时会保留筛选条件。语言顺序保存在浏览器 localStorage。

## 内容范围与限制

src/data/schools.js 收录六所样本园，每国三所，含原始来源和核验日期。这是示例目录，不是全国名录或排名。搜索支持英文、中文、日文名称及记录中明确列出的变体。

Fuji Kindergarten 与 Bing Nursery School 档案已扩展，包含园方公开的运营资料和一日流程。Bing 学费注明适用于 2026–27 学年；员工人数表述有歧义，因此不推算师幼比。其余未补充字段标为“本档案尚未研究或收集”；这不表示园所没有该项。园方自述不等于独立验证。

国家概览的数据口径不同：日本展示 2026 年保育所等服务定员与利用数据（暂定值）；美国展示 2022 年 3–5 岁正式学校入学率估计。两者不是可直接对比的同一指标。月度档案目前有一条已核验的日本统计更新，人工整理，尚无自动发布流程。

三篇日本实践文章均加入可核对的步骤与运营条件，其中两篇是编辑框架，并非园所实证流程。国家制度、机构类型、理念与课程、经营管理、企业观察、科技服务均已加入双语来源摘要。美国经营管理页依据联邦资料制作核验清单，具体法规仍须按州确认。企业和供应商案例仅作有限案例，不构成市场排名；供应商功能资料不证明效果。配套Excel增加Country sources工作表，记录来源、证据性质、核对日期和复核时点。尚未实现地图、货币换算和编辑后台。

## 目录结构

- src/App.jsx：路由定义
- src/pages/HomePage.jsx：主页
- src/pages/CountryPage.jsx：国家概览与目录
- src/pages/SchoolPage.jsx：单所园档案
- src/pages/CountrySectionPage.jsx：国家专题
- src/components/country/：国家导航、概览及页面布局
- src/components/directory/：园所卡片、搜索和筛选
- src/data/：国家、园所、文章、政策入口、理念与课程摘要、月度更新和双语文案
- src/styles/：页面样式

## 交接文件

- 内容清单：docs/content-inventory.md
- 数据字典：docs/data-dictionary.md
- 来源登记表：docs/source-register.md
- 审核记录：docs/review-log.md
- 设计资源：docs/design-resources.md
- 问题记录：docs/issue-log.md
- 园所与国家专题来源跟踪表：docs/school-source-tracker-curriculum-updated.xlsx
- English README：README.md

## GitHub Pages 部署

Vite 使用 /observer_website/ 作为 base，BrowserRouter 从 import.meta.env.BASE_URL 读取。仓库地址：https://concongeric-cmd.github.io/observer_website/；本地预览地址：http://localhost:5173/observer_website/。

构建后部署整个 dist 目录，并配置托管端将深层路由回退到 index.html。GitHub Pages 应在 Settings → Pages → Build and deployment 中选择 GitHub Actions；不要将源代码根目录设为网站目录。已有工作流会安装依赖、构建、检查并上传 dist。仓库无需提交 dist。

本地部署检查命令为 npm run build，之后运行 npm run check:pages。
