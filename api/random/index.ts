import type { VercelRequest, VercelResponse } from "@vercel/node";

function handler(req: VercelRequest, res: VercelResponse) {
	console.log("random cookies", req.cookies);
	const EXPIRATION = new Date();
	EXPIRATION.setSeconds(EXPIRATION.getSeconds() + 30);
	res.setHeader("Set-Cookie", [`test=555; Expires=${EXPIRATION.toUTCString()}; HttpOnly; Secure;`]);
	res.send(Math.floor(Math.random() * 100)).end();
}

export default handler;
