import { prisma } from "@/modules/common/server/prisma";

// Accept the invitation
export const fetchBlockchainList = async () => {
  return await prisma.asset.findMany({});
};