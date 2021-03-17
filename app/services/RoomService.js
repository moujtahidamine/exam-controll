import {API_BASE_URL, } from '../constants';
import request from '../utils/APIUtils';

export function getAllRooms() {
    return request({
        url: API_BASE_URL + "/rooms",
        method: 'GET',
    });
}

export function getRoomsById(id) {
    return request({
        url: API_BASE_URL + "/rooms/"+id,
        method: 'GET',
    });
}