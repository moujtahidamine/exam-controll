import {API_BASE_URL, } from '../constants';
import request from '../utils/APIUtils';

export function getAllExams() {
    return request({
        url: API_BASE_URL + "/exams",
        method: 'GET',
    });
}

export function getExamById(id) {
    return request({
        url: API_BASE_URL + "/exams/" + id,
        method: 'GET',
    });
}

export function getExamParticipants(examId) {
    return request({
        url: API_BASE_URL + "/exams/" + examId + "/participants",
        method: 'GET',
    });
}

export function getExamSurveillants(examId) {
    return request({
        url: API_BASE_URL + "/exams/" + examId + "/surveillants",
        method: 'GET',
    });
}

export function setStudentPresenceOnExam(apogee, examId) {
    return request({
        url: API_BASE_URL + "/exams/scan/" + examId+"/"+apogee,
        method: 'GET',

    });
}

/*
export function setStudentPresenceOnExam(apogee, examId) {
    return request({
        url: API_BASE_URL + "/exams/scan/" + examId,
        method: 'PUT',
        body : JSON.stringify(apogee)
    });
}
*/