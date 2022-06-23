/* eslint-disable prettier/prettier */
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended' // 一定要放在最后。因为 extends 中后引入的规则会覆盖前面的规则。
  ],
  rules: {
    // vue
    'vue/custom-event-name-casing': 'off', // 为自定义事件名称强制使用特定大小写
    'vue/attributes-order': 'off', // 强制执行属性顺序
    'vue/one-component-per-file': 'off', // 强制每个组件都应该在自己的文件中
    'vue/html-closing-bracket-newline': 'off', // 在标签的右括号之前要求或禁止换行
    'vue/multiline-html-element-content-newline': 'off', // 在多行元素的内容之前和之后需要换行符
    'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容之前和之后需要换行符
    'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
    'vue/require-default-prop': 'off', // 需要 props 的默认值
    'vue/html-indent': ['error', 2], // 在<template>中强制一致缩进
    'vue/html-self-closing': 'on', // 执行自闭合的风格
    'vue/max-attributes-per-line': 'off', // 强制每行属性的最大数量
    'vue/multi-word-component-names': 'off', // 是否开启组件命名规则校验（强制多个单词以驼峰或'-'链接的命名规则）
    // ESLint
    'no-use-before-define': 'off', // 禁止在变量定义之前使用它们
    'space-before-function-paren': 'on' // 强制在 function的左括号之前使用一致的空格
  }
})
