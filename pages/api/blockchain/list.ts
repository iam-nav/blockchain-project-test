import type { NextApiRequest, NextApiResponse } from "next";
import { throwMethodNotAllowed } from "@/modules/common/server/error";
import { fetchBlockchainList } from "@/modules/blockchain";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    switch (method) {
      case "GET":
        await handleGET(req, res);
      default:
        throwMethodNotAllowed(res, method, ["GET"]);
    }
  } catch (error: any) {
    res.status(400).json({
      error: {
        message: error.message,
      },
    });
  }
}

// Get assets list
const handleGET = async (req: NextApiRequest, res: NextApiResponse) => {
  const blockchainList = await fetchBlockchainList();
  res.status(200).json({
    data: blockchainList,
  });
};