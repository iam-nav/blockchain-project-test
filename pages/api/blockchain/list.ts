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
        break; // Exit the switch statement after handling GET request
      default:
        throwMethodNotAllowed(res, method, ["GET"]);
        break; // Exit the switch statement for other methods
    }
  } catch (error: any) {
    res.status(400).json({
      error: {
        message: error.message,
      },
    });
  }
}

// Get blockchain list
const handleGET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const blockchainList = await fetchBlockchainList();
    res.status(200).json({
      data: blockchainList,
    });
  } catch (error) {
    throw new Error(`Failed to fetch blockchain list: ${error}`);
  }
};
