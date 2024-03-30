
// no need to be async since we are dealing with json
//if we are using database then this needs to be async
//since it's middleware we are returning (req,res,next)
function paginate(model) {
  return (req, res, next) => {

    //if page not specified then default is set to 1
    const page = parseInt(req.query.page) || 1;

    //if limit not specified then return 10 items per page
    const limit = parseInt(req.query.limit) || 10;

    start = (page - 1) * limit;
    end = page * limit;
    result = {};

    //previous page will only exist if we are on page>1
    if (start > 0) {
      result.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    //similarly if we are at end then there is no next
    if (end < model.length) {
      result.next = {
        page: page + 1,
        limit: limit,
      };
    }
    
    
    result.data = model.slice(start, end);
    //here we have the choice to do whatever we want with result, I am appending it to response.
    res.paginatedResults = result;

    //next since its a middleware
    next();
  };
}

module.exports = {
  paginate,
};
