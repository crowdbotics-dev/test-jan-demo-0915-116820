import axios from "axios"
const testjandemoAPI = axios.create({
  baseURL: "https://test-jan-demo-0915-116820.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return testjandemoAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_example_list(payload) {
  return testjandemoAPI.get(`/api/v1/example/`)
}
function api_v1_example_create(payload) {
  return testjandemoAPI.post(`/api/v1/example/`, payload)
}
function api_v1_example_retrieve(payload) {
  return testjandemoAPI.get(`/api/v1/example/${payload.id}/`)
}
function api_v1_example_update(payload) {
  return testjandemoAPI.put(`/api/v1/example/${payload.id}/`, payload)
}
function api_v1_example_partial_update(payload) {
  return testjandemoAPI.patch(`/api/v1/example/${payload.id}/`, payload)
}
function api_v1_example_destroy(payload) {
  return testjandemoAPI.delete(`/api/v1/example/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return testjandemoAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return testjandemoAPI.post(`/api/v1/signup/`, payload)
}
function modules_camera_photos_user_list(payload) {
  return testjandemoAPI.get(`/modules/camera/photos/user/`)
}
function modules_camera_photos_user_retrieve(payload) {
  return testjandemoAPI.get(`/modules/camera/photos/user/${payload.id}/`)
}
function modules_camera_upload_image_create(payload) {
  return testjandemoAPI.post(`/modules/camera/upload_image/`)
}
function rest_auth_login_create(payload) {
  return testjandemoAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return testjandemoAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testjandemoAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testjandemoAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return testjandemoAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testjandemoAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return testjandemoAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return testjandemoAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return testjandemoAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testjandemoAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return testjandemoAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_example_list,
  api_v1_example_create,
  api_v1_example_retrieve,
  api_v1_example_update,
  api_v1_example_partial_update,
  api_v1_example_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  modules_camera_photos_user_list,
  modules_camera_photos_user_retrieve,
  modules_camera_upload_image_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
