# CyberX0725 个人博客

一个采用赛博朋克 / 复古未来主义设计风格的个人技术博客，部署在 GitHub Pages 上。

## 技术栈

- 纯 HTML5 + CSS3 + 原生 JavaScript (ES6+)
- Google Fonts (JetBrains Mono + Noto Sans SC)
- 无构建步骤，直接部署

## 项目结构

```
CyberX0725.github.io/
├── index.html              # 首页
├── about.html              # 关于页面
├── archive.html            # 归档页面
├── 404.html                # 404 错误页面
├── assets/
│   ├── css/
│   │   └── style.css       # 全局样式
│   ├── js/
│   │   └── main.js         # 全局脚本
│   └── images/
│       └── avatar.svg      # 头像
├── posts/
│   ├── hello-world.html    # 示例文章1
│   ├── cyberpunk-design.html # 示例文章2
│   └── git-deploy.html     # 示例文章3
├── .gitignore
└── README.md
```

## 本地预览

直接在浏览器中打开 `index.html`，或使用本地服务器：

```bash
# Python
python -m http.server 8000

# Node.js (http-server)
npx http-server -p 8000
```

访问 `http://localhost:8000`

## 部署

推送代码到 GitHub 仓库 `CyberX0725/CyberX0725.github.io` 的 `main` 分支，GitHub Pages 会自动部署。

访问地址：https://cyberx0725.github.io/

## 添加新文章

1. 在 `posts/` 目录创建新的 HTML 文件
2. 在 `assets/js/main.js` 的 `ARTICLES` 数组中添加文章信息
3. 推送到 GitHub

## 设计特色

- 赛博朋克美学：霓虹色彩、故障艺术、扫描线效果
- 终端风格界面元素
- 响应式设计，支持桌面/平板/移动端
- 滚动触发的动画效果
- 打字机动态文字

## 许可

© 2026 CyberX0725. 保留所有权利。
