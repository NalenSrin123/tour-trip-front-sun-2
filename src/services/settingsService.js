import { getSession } from "./authService";

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ??
  import.meta.env.base_url ??
  ""
).replace(/\/+$/, "");

function bearerToken() {
  return getSession()?.token ?? "";
}

function authHeaders() {
  const token = bearerToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function resetPassword({
  email,
  oldPassword,
  newPassword,
  newPasswordConfirmation,
}) {
  if (!API_BASE_URL) {
    throw new Error(
      "API base URL is not configured. Set VITE_API_BASE_URL in .env",
    );
  }

  if (!bearerToken()) {
    throw new Error("Your session has expired. Please sign in again.");
  }

  const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...authHeaders(),
    },
    body: JSON.stringify({
      email: email.trim(),
      old_password: oldPassword,
      new_password: newPassword,
      new_password_confirmation: newPasswordConfirmation,
    }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok || data?.success === false) {
    throw new Error(
      data?.error ??
        data?.message ??
        "Unable to change your password. Please try again.",
    );
  }

  return data;
}