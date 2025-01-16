import { CustomError } from "@/Class/CustomError";
import { verifyLinks } from "@/services/checkLinkService";
import { NextApiRequest, NextApiResponse } from "next";

export type checkDTO = {
    url: string
    expected: string
}

export default async function handler(req: NextApiRequest, res:NextApiResponse ) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    try {
      const body: checkDTO = req.body;
      if(!body.url || !body.expected){
        throw new CustomError('Preencha todos os campos',400)
      }
  
      const response = await verifyLinks(body.url,body.expected)
      return res.status(200).json(response);
    } catch (error) {
      if(error instanceof CustomError){
        return res.status(error.errorCode).json({ message: error.message});
      }
    }
  }