import middlewares from './middlewares'

export default (router) => {
    middlewares.forEach((middleware) => {
        return middleware(router)
    })
}
