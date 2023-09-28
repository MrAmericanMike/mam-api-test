import type { VercelRequest, VercelResponse } from "@vercel/node";
import rateLimit from "../../utils/RateLimit.js";

let count = 0;

function handler(req: VercelRequest, res: VercelResponse) {
	const IP = req.headers["x-real-ip"];
	const RATE_IP = typeof IP === "string" ? IP : Array.isArray(IP) ? IP[0] : "MISSING";
	if (rateLimit(RATE_IP, 10)) {
		return res.status(429).end();
	} else {
		count++;
		res.status(200)
			.json({
				count: count,
				ip: RATE_IP
			})
			.end();
	}
}

export default handler;
