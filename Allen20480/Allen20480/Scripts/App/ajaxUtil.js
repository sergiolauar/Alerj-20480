var Ajax = function (options) {

    var _url = options.url;
    var _type = options.type;
    var _dataType = options.dataType;
    var _contentType = options.contentType;
    var _data = options.data;

    this.makeRequest = function () {

        return $.ajax({
            url: _url,
            type: _type,
            dataType: _dataType,
            contentType: _contentType,
            data: _data,
        }).promise();
    };



};


var AjaxNovo = function (options) {

    var _url = options.url;
    var _type = options.type;
    var _dataType = options.dataType;
    var _contentType = options.contentType;
    var _data = options.data;
    var _success = options.success;
    var _error = options.error;
   

    this.makeRequest = function () {

         $.ajax({
            url: _url,
            type: _type,
            dataType: _dataType,
            contentType: _contentType,
            data: _data,
            success: _success,
            error: _error                        
            
        });
    };



};


