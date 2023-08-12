//middleware function if user is logged on
const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect("/login");
    } else {
        next();
    }
};
//exporting middleware function
module.exports = withAuth;