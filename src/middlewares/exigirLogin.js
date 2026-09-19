export function exigirLogin(req, res, next) {
  if (!req.session.usuario) {
    return res.redirect('/login')
  }
 
  next()
}
