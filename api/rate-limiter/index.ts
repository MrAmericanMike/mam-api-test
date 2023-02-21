import type { VercelRequest, VercelResponse } from "@vercel/node";
import rateLimit from "../../utils/RateLimit";

let count = 0;

function handler(req: VercelRequest, res: VercelResponse) {
	count++;
	const IP = req.headers["x-real-ip"];
	if (rateLimit(IP, 10)) {
		return res.status(429).end();
	}

	res.status(200)
		.json({
			count: count,
			ip: IP
		})
		.end(() => {});
}

export default handler;
