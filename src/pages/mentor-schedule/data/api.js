import {getAuthenticatedHttpClient} from "@edx/frontend-platform/auth";
import {getConfig} from "@edx/frontend-platform";

export async function createAppointmentSlot(slot) {
    const url = `${getConfig().LMS_BASE_URL}/mentoring/api/v1/mentoring-available-slots/`;
    return getAuthenticatedHttpClient().post(url, slot);
}

export async function fetchAppointmentSlotApi(userId, courseId) {
    const url = `${getConfig().LMS_BASE_URL}/mentoring/api/v1/mentoring-available-slots/`;
    return getAuthenticatedHttpClient().get(url, {params: {page_size: 1000, user: userId, course_id: courseId}});
}

export async function updateAppointmentSlotApi(slot, id) {
    const url = `${getConfig().LMS_BASE_URL}/mentoring/api/v1/mentoring-available-slots/${id}/`;
    return getAuthenticatedHttpClient().patch(url, slot);
}

export async function deleteAppointmentSlotApi(id) {
    const url = `${getConfig().LMS_BASE_URL}/mentoring/api/v1/mentoring-available-slots/${id}/`;
    return getAuthenticatedHttpClient().delete(url);
}
