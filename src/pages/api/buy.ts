// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.SK_STRIPE as string)


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { stripepriceid } = req.query;

    const session = await  stripe.checkout.sessions.create({
      line_items: [
        { price: stripepriceid as string, quantity: 1 }
    ], 
    mode: 'payment', 
    success_url: 'http://localhost:3000/about-us',
    cancel_url: 'http://localhost:3000/',
    })

  res.status(200).json({ url: session.url });
}
