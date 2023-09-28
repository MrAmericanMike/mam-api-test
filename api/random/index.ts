import type { VercelRequest, VercelResponse } from "@vercel/node";

function handler(req: VercelRequest, res: VercelResponse) {
	res.send(Math.floor(Math.random() * 100)).end();
}

export default handler;
