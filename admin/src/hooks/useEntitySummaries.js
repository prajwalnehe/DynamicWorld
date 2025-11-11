import { useQueries } from "@tanstack/react-query";
import { apiClient } from "../lib/apiClient";
import { extractPayload } from "../utils/extractPayload";

export const useEntitySummaries = (entities) => {
  const queryStates = useQueries({
    queries: entities.map((entity) => ({
      queryKey: ["entity", entity.id],
      queryFn: async () => {
        const response = await apiClient.get(entity.endpoint);
        return extractPayload(response);
      },
    })),
  });

  return queryStates;
};

