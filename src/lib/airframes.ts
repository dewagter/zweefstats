// Groups of airframe type names. The logbook (zweef.app) does not use one fixed spelling per
// type, e.g. 'LS-4b' and 'LS 4-b', 'ASK-21' and 'ASK21', or 'Duo Discus' and 'Duo' for the same
// aircraft. Every requirement or heuristic that looks at a type should use these groups, not a
// single spelling.
const ask21 = ['ASK-21', 'ASK21', 'ASK-21(B)'];

export const airframeGroups = {
	ask21,
	ask23: ['ASK-23', 'ASK-23B'],
	tweezitters: [...ask21, 'ASK-13', 'K-13', 'ASK-7', 'K-7'],
	duo: ['Duo Discus', 'Duo', 'Duo Discus T', 'Duo Discus XLT'],
	ls4: ['LS-4', 'LS4', 'LS-4a', 'LS-4b', 'LS 4-b'],
	ls8: ['LS-8', 'LS8', 'LS-8a', 'LS-8b'],
	asw27: ['ASW-27'],
	asg29: ['ASG-29', 'ASG-29E'],
	arcus: ['Arcus T', 'ArcusT', 'Arcus'],
	prefect: ['Prefect', 'PH-192']
};

// Club types that may only be flown as PIC with a licence (SPL). Students fly solo only on the
// ASK-21 and ASK-23 (Clubreglement v14.6 §4.2.9), so a PIC start on any of these types means the
// pilot holds a licence.
export const licenceOnlyTypes = [
	...airframeGroups.ls4,
	...airframeGroups.ls8,
	...airframeGroups.duo,
	...airframeGroups.asw27,
	...airframeGroups.asg29,
	...airframeGroups.arcus
];
