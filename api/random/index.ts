import type { VercelRequest, VercelResponse } from "@vercel/node";

function handler(request: VercelRequest, response: VercelResponse) {
	response.send(Math.floor(Math.random() * 100)).end();
}

export default handler;
