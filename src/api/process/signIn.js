import request from '@/plugins/axios'

//host:172.16.10.20:8008

export function postSignIn(data,){
 return request({url: `process/signIn`,method:'post',data,}).then(res => {
		return res.data
	})}
