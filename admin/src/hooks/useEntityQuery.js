import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../lib/apiClient";
import { extractPayload } from "../utils/extractPayload";

export const useEntityQuery = (entity, options = {}) =>
  useQuery({
    queryKey: ["entity", entity?.id],
    enabled:
      Boolean(entity?.endpoint) &&
      (options.enabled ?? true),
    queryFn: async () => {
      const response = await apiClient.get(entity.endpoint);
      return extractPayload(response);
    },
    ...options,
  });

