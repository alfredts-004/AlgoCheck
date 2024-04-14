import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { LANGUAGE_CODE } from "@/constants";



export async function POST(req: Request, res: NextApiResponse) {
  const { language, sourceCode } = await req.json();

  const clientId = process.env.JDOODLE_CLIENT_ID;
  const clientSecret= process.env.JDOODLE_CLIENT_SECRET;


  const url = "https://api.jdoodle.com/v1/execute";
    
  try {
      const response = await axios.post(url, {
          script: sourceCode,
          language: LANGUAGE_CODE[language],
          versionIndex: "0",
          clientId,
          clientSecret,
      });

      console.log(response.data)
return NextResponse.json(response.data);
} catch (error) {
console.error('Error calculating complexity:', error);
return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

}
}

export function GET() {
return new Response('', { status: 405 });
}


