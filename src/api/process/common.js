import request from '@/plugins/axios'

//host:172.16.10.20:8008

export function postAlarmCountFromCommon(data,){
 return request({url: `http://process/common/alarmCount`,method:'post',data,}).then(res => {
		return res.data
	})}
export function postAlarmListFromCommon(data,){
 return request({url: `http://process/common/alarmList`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getAreaFromCommon(params,){
 return request({url: `http://process/common/area`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postChemicalChartInfoFromCommon(data,){
 return request({url: `http://process/common/chemicalChartInfo`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getChemicalInfoFromCommon(params,){
 return request({url: `http://process/common/chemicalInfo`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postMachineContrastChartBakDataFromCommon(data,){
 return request({url: `http://process/common/machineContrastChartBakData`,method:'post',data,}).then(res => {
		return res.data
	})}
export function postMachineContrastChartDataFromCommon(data,){
 return request({url: `http://process/common/machineContrastChartData`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getMachineInfoFromCommon(params,){
 return request({url: `http://process/common/machineInfo`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getMachineInfoListByCodeFromCommon(params,){
 return request({url: `http://process/common/machineInfoListByCode`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getMachineListByCodeFromCommon(params,){
 return request({url: `http://process/common/machineListByCode`,method:'get',params,}).then(res => {
		return res.data
	})}
export function getMachineListByCodeAndfactoryFromCommon(params,){
 return request({url: `http://process/common/machineListByCodeAndfactory`,method:'get',params,}).then(res => {
		return res.data
	})}
export function postMachineParameterHisDataFromCommon(data,){
 return request({url: `http://process/common/machineParameterHisData`,method:'post',data,}).then(res => {
		return res.data
	})}
export function getShiftTimeFromCommon(){
 return request({url: `http://process/common/shiftTime`,method:'get',}).then(res => {
		return res.data
	})}
export function getSiteFromCommon(){
 return request({url: `http://process/common/site`,method:'get',}).then(res => {
		return res.data
	})}
export function postTubeRecipeEndLockFromCommon(data,){
 return request({url: `http://process/common/tubeRecipeEndLock`,method:'post',data,}).then(res => {
		return res.data
	})}
