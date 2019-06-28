import request from '@/plugins/axios'

//host:172.16.10.20:8008

export function getMachineStatusListFromMachine(){
 return request({url: `process/machine/machineStatusList`,method:'get',}).then(res => {
		return res.data
	})}
export function getRobotStatusListFromMachine(){
 return request({url: `process/machine/robotStatusList`,method:'get',}).then(res => {
		return res.data
	})}
