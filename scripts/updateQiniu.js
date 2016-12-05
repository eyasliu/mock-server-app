import qiniu from 'qiniu'

qiniu.conf.ACCESS_KEY = process.env.QINIU_ACCESS_KEY;
qiniu.conf.SECRET_KEY = process.env.QINIU_SECRET_KEY;

const space = 'toolkit';
const fileName = 'mock-server/client.js';

const token = ((bucket, key) => new qiniu.rs.PutPolicy(bucket + ":" + key).token())(space, fileName);

const localFile = './client/dest/index.js';
((token, key, localFile) => {
	const extra = new qiniu.io.PutExtra()
	qiniu.io.putFile(token, key, localFile, extra, (err, res) => {
		err ? console.log('上传失败.', err) : console.log('上传成功: ', res.key);
	})
})(token, fileName, localFile)