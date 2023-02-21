import type { VercelRequest, VercelResponse } from "@vercel/node";
import LRL from "lambda-rate-limiter";

const LIMITER = LRL({
	interval: 60000,
	uniqueTokenPerInterval: 500
});

let count = 0;

function handler(req: VercelRequest, res: VercelResponse) {
	count++;
	const IP = req.headers["x-real-ip"];

	LIMITER.check(5, IP)
		.then(() => {
			return res
				.status(200)
				.json({
					count: count,
					ip: IP
				})
				.end(() => {});
		})
		.catch(() => {
			return res.status(429).end();
		});
}

export default handler;
