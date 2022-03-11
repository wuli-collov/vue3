let login = {
    success: true,
    msg: 'success',
    data: { //数据
        token:'dxdlslafjsofdsoksdjfsd'
    }
};
let articleList = {
    code: 200,
    msg: 'success',
    data: { //数据
        total: 100, //模拟数据的页数，分页功能。 100条
        'rows|8': [{ //模拟每页有多少条数据。 每页8条。
            id: '@guid', //每页数据都是有id的。 随机生成数据. @是占位符,随机生成后不会重复。
            title: '@ctitle',  //前缀加 c 的意思为随机生成中文，否则是英文
            author: "@cname",
            'job | 1': ['Web前端','Java工程师','架构工程师','数据库管理员'] // | 意思为在数组里随机抽取一个
        }]
    }
};
export default {
    'post|/login': login
}
