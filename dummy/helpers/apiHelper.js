
//====For Send Success And Error Responces===========
function successError(res,statusCode,message,data) {
    var status = Boolean;
    if(statusCode==200){
      status = true;
      //statusCode 200
    }else{
      status = false;
    }
    return res.status(statusCode).send({
      status:status,
      statusCode:statusCode,
      message: message,
      data: data,
    });
}
//==========For Get Pagination==========
const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

//==========For Get Pagination Data==========
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: result } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, totalPages, currentPage, result };
};



//===========Here All Function Exports =============
module.exports = { successError,getPagingData,getPagination};