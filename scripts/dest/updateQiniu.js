'use strict';

var _qiniu = require('qiniu');

var _qiniu2 = _interopRequireDefault(_qiniu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_qiniu2.default.conf.ACCESS_KEY = process.env.QINIU_ACCESS_KEY;
_qiniu2.default.conf.SECRET_KEY = process.env.QINIU_SECRET_KEY;

var space = 'toolkit';
var fileName = 'mock-server/client.js';

var token = function (bucket, key) {
	return new _qiniu2.default.rs.PutPolicy(bucket + ":" + key).token();
}(space, fileName);

var localFile = './client/dest/index.js';
(function (token, key, localFile) {
	var extra = new _qiniu2.default.io.PutExtra();
	_qiniu2.default.io.putFile(token, key, localFile, extra, function (err, res) {
		err ? console.log('上传失败.', err) : console.log('上传成功: ', res.key);
	});
})(token, fileName, localFile);