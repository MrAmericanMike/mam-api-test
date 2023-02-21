const HISTORY = new Map();

function rateLimit(ip, seconds): boolean {
	if (HISTORY.has(ip)) {
		const TIME_AGO = Date.now() - seconds * 1000;
		const LAST_CALL = HISTORY.get(ip);
		if (TIME_AGO < LAST_CALL) {
			return true;
		}
	}
	HISTORY.set(ip, Date.now());
	return false;
}

export default rateLimit;
