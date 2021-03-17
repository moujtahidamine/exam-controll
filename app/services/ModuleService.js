import {API_BASE_URL, } from '../constants';
import request from '../utils/APIUtils';

export function getAllModules() {
    return request({
        url: API_BASE_URL + "/modules",
        method: 'GET',
    });
}

export function getModulesById(id) {
    return request({
        url: API_BASE_URL + "/modules/"+id,
        method: 'GET',
    });
}