import { fetchFromApi } from "./api";

export async function getAllProjects() {
  return fetchFromApi("/projects");
}

export async function getProjectById(id) {
  return fetchFromApi(`/projects/${id}`);
}

export async function createProject(data) {
  return fetchFromApi("/projects", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateProject(id, data) {
  return fetchFromApi(`/projects/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteProject(id) {
  return fetchFromApi(`/projects/${id}`, {
    method: "DELETE",
  });
}
