exports.hello = function hello(req, res, next) {
    try {
        res.render('basic') //'basic-view'
    } catch (err) {
        next(err)
    }
}