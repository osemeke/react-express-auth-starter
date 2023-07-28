const authorize = (roles) => {
    return function (req, res, next) {
        console.log('auth', req.user)
        console.log('roles', roles)
        if (roles.indexOf(req.user.username) > -1) next();
        // if (roles.indexOf(req.user.role) > -1) next();
        else res.status(401).json("Forbidden!");
    }
}

module.exports = authorize