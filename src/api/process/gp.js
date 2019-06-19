import request from '@/plugins/axios'

//host:172.16.10.20:8008

export function postGetCoatBadListFromGp(data,){
 return request({url: `process/gp/getCoatBadList`,method:'post',data,}).then(res => {
		return res.data
	})}
export function postGetCoatBoatListFromGp(data,){
 return request({url: `process/gp/getCoatBoatList`,method:'post',data,}).then(res => {
		return res.data
	})}
export function postGetCoatDeviceListFromGp(data,){
 return request({url: `process/gp/getCoatDeviceList`,method:'post',data,}).then(res => {
		return res.data
	})}
export function postGetCoatInfoListFromGp(data,){
 return request({url: `process/gp/getCoatInfoList`,method:'post',data,}).then(res => {
		return res.data
	})}
export function postGetCoatListFromGp(data,){
 return request({url: `process/gp/getCoatList`,method:'post',data,}).then(res => {
		return res.data
	})}
