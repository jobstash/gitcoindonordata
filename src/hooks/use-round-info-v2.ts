import { useQuery } from "@tanstack/react-query";

import { STALETIME } from "@/core/constants";
import { queryKeys } from "@/core/query-keys";
import { Project } from "@/core/types";
import { getRoundInfo } from "@/utils/get-round-info";

export const useRoundInfoV2 = (project: Project, roundId?: string) => {
	const applicationIds = project.applications!.map((a) => a.id);
	return useQuery({
		queryKey: queryKeys.getRoundInfo(project.name!, applicationIds, roundId),
		queryFn: () => getRoundInfo(project, roundId),
		enabled: !!project,
		staleTime: STALETIME.DEFAULT,
	});
};
