// 将middleware文件内，除去index.js的文件所export的default function 放到middlewares数组中去，再export出去

const requireFiles = require.context('.', false, /\.js$/)

// requireFiles.keys() returns all possible requests that
// the context module can handle
// https://webpack.github.io/docs/context.html#context-module-api
const middlewareFiles = requireFiles.keys().filter((key) => key !== 'index.js')

const middlewares = middlewareFiles.map((file) => {
    return requireFiles(file).default
})

export default middlewares
