import request from '@/plugins/axios'

//host:172.16.10.20:8008

export function getGetHalmMacListFromHalm(){
 return request({url: `http://process/halm/getHalmMacList`,method:'get',}).then(res => {
		return res.data
	})}
export function getHalmAllDeviceFromHalm(){
 return request({url: `http://process/halm/halmAllDevice`,method:'get',}).then(res => {
		return res.data
	})}
export function getHalmMonitorDeviceFromHalm(params,){
 return request({url: `http://process/halm/halmMonitorDevice`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postHalmMonitorListHourFromHalm(data,){
 return request({url: `http://process/halm/halmMonitorListHour`,method:'post',data,}).then(res => {
		return res.data
	})}
export function postHalmMonitorListMinFromHalm(data,){
 return request({url: `http://process/halm/halmMonitorListMin`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getHalmProductListFromHalm(){
 return request({url: `http://process/halm/halmProductList`,method:'get',}).then(res => {
		return res.data
	})}
export function getHalmRawDataFromHalm(data,){
 return request({url: `http://process/halm/halmRawData`,method:'get',data,}).then(res => {
		return res.data
	})}
export function getShiftTimeProductFromHalm(){
 return request({url: `http://process/halm/shiftTimeProduct`,method:'get',}).then(res => {
		return res.data
	})}
export function postUpdateHalmFilterFromHalm(data,){
 return request({url: `http://process/halm/updateHalmFilter`,method:'post',data,}).then(res => {
		return res.data
	})}
