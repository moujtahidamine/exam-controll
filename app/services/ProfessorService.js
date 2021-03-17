import {API_BASE_URL, } from '../constants';
import request from '../utils/APIUtils';

export function getAllProfessors() {
    return request({
        url: API_BASE_URL + "/professors",
        method: 'GET',
    });
}

export function getProfessorById(id) {
    return request({
        url: API_BASE_URL + "/professors/"+id,
        method: 'GET',
    });
}

export function getExamsByProfessor(idP) {
    return request({
        url: API_BASE_URL + "/exams/surveillants/"+idP,
        method: 'GET',
    });
}

export function getCurrentProfessor(email, cin) {
    return request({
        url: API_BASE_URL + "/professors/"+email+"/"+cin,
        method: 'GET',
    });
}