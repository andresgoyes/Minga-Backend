export default (req, res, next) => {
    if (req.user && req.user.role === 3) {
      return next();
    }
  
    return res.status(403).json({
      success: false,
      message: 'You are not authorized to perform this action',
    });
  };