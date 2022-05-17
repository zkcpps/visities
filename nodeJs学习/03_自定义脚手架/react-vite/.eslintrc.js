// eslint-config-prettier 用来关闭eslint和 prettier冲突的规则
module.exports = {
  parser: '@typescript-eslint/parser', //定义ESLint的解析器
  //定义文件继承的子规范
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'], //定义了该eslint文件所依赖的插件
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': 1, //  eslint-plugin-prettier 使用prettier作为eslint规则
    semi: 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: false,
        },
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
