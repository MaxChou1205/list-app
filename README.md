# 教學
https://hackmd.io/@FortesHuang/B1cfNvRTC

# 指令
## 安裝 capacitor
`pnpm add @capacitor/core @capacitor/android`
`pnpm add -D @capacitor/cli`

## 初始化 capacitor
`npx cap init`

## 打包 vue
`pnpm build`

## 將打包檔複製到 capacitor
`npx cap copy`

## 生成 android 目錄 (需要先安裝 Android Studio)
`npx cap add android`

## 將打包檔同步到 andorid 目錄中
`npx cap sync`

## 開啟 android studio
`npx cap open android`

## 生成 icon 
`npx capacitor-assets generate`