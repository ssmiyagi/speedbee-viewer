# speedbee-viewer
```
node v12.18.3
```
todo
```
//navigator
char.js
//DB data download csv
DBファイルパスの指定画面
DBファイルパスをコンフィグファイルから
```
## Project setup
```
npm install
```

### サーバーモードで起動
```
npm run express
npm run serve
```

### アプリで起動(注今壊れている)
```
npm run electron:serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## electron + vue + vue cli4 + vuetify
```
npm install -g @vue/cli
vue create my-app
? Check the features needed for your project:
> Babel
> TypeScript
> Router
> Vuex
> CSS Pre-processors
> Linter / Formatter
> unit test
> E2E test
? Use class-style component syntax?
> Yes
? Using Babel alongside Typescript?
> Yes
? Use history mode for router?
> No
? Pick a CSS pre-processor:
> Sass/SCSS (with node-sass)
? Pick a linter / formatter config:
> ESLint with error prevention only
? Pick additional lint features:
> Lint on save
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.?
> In package.json
? Save this as a preset for future projects?
> No
cd my-app
vue add vuetify
vim tsconfig.json
types[
 "vuetify"//<- add
]
```
(参考1)[https://medium.com/@bromix/electron-application-with-vue-js-and-vuetify-f2a1f9c749b8]

(参考2)[https://qiita.com/paragaki/items/e7d3a43b50233af96424]

## electron errorの解決
```
npm install --save-dev @types/node@12.6.9
npm install @types/electron-devtools-installer --save-dev
```
[参考](https://qiita.com/kagayat829/items/cf26b7a2702d69b463dc)

## vue cli expressサーバー使用
[参考](https://qiita.com/corestate55/items/81ba50cf33c78b7119fd)
