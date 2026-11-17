// Groups of airframe type names. The logbook (zweef.app) does not use one fixed spelling per
// type, e.g. 'LS-4b' and 'LS 4-b' for the same aircraft. Every requirement or heuristic that
// looks at a type should use these groups, not a single spelling.
export const airframeGroups = {
	ask21: ['ASK-21', 'ASK-21(B)'],
	ask23: ['ASK-23', 'ASK-23B'],
	tweezitters: ['ASK-21', 'ASK-21(B)', 'K-13', 'K-7'],
	duo: ['Duo Discus', 'Duo Discus T', 'Duo Discus XLT'],
	ls4: ['LS-4', 'LS4', 'LS-4a', 'LS-4b', 'LS 4-b'],
	ls8: ['LS-8', 'LS8', 'LS-8a', 'LS-8b'],
	asw27: ['ASW-27'],
	asg29: ['ASG-29', 'ASG-29E'],
	arcus: ['Arcus T', 'ArcusT', 'Arcus'],
	prefect: ['Prefect', 'PH-192']
};
