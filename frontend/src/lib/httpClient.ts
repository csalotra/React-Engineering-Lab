const BASE_URL = "http://localhost:8000";

const defaultHeaders: HeadersInit = {
  "Content-Type": "application/json",
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    const message = await response.text();

    throw new Error(
      message || `request failed with status ${response.status}`
    );
  }

  if(response.status == 204){
    return undefined as T;
  }

  return (await response.json()) as T;
}

export const httpClient = {
  get<T>(endpoint: string, signal?: AbortSignal): Promise<T> {
    return request<T>(endpoint, {
      method: "GET",
      signal,
    });
  },

  post<T>(endpoint: string, body: unknown, signal?: AbortSignal): Promise<T> {
    return request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
      signal,
    });
  },

  put<T>(endpoint: string, body: unknown, signal?: AbortSignal): Promise<T> {
    return request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
      signal,
    });
  },

  patch<T>(endpoint: string, body: unknown, signal?: AbortSignal): Promise<T> {
    return request<T>(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
      signal,
    });
  },

  Delete<T>(endpoint: string, signal?: AbortSignal): Promise<T> {
    return request<T>(endpoint, {
      method: "DELETE",
      signal,
    });
  },
};