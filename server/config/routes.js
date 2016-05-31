module.exports = {
    '/' : {
        module: 'frontal',
        method: 'get',
        controller: 'FrontController',
        action: 'getIndex'
    },
    '/posts' : {
        module: 'blog',
        method: 'get',
        controller: 'BlogController',
        action: 'getArticles'
    },
    '/posts/:slug' : {
        module: 'blog',
        method: 'get',
        controller: 'BlogController',
        action: 'getArticle'
    },
    '/user/:name' : {
        module: 'profile',
        method: 'get',
        controller: 'ProfileController',
        action: 'getProfile'
    }
};