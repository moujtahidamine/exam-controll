import {API_BASE_URL, } from '../constants';
import request from '../utils/APIUtils';

export function getAllStudents() {
    return request({
        url: API_BASE_URL + "/students",
        method: 'GET',
    });
}

export function getStudentsById(id) {
    return request({
        url: API_BASE_URL + "/students/"+id,
        method: 'GET',
    });
}