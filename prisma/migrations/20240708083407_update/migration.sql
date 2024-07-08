/*
  Warnings:

  - You are about to alter the column `hours` on the `Asset` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `totalChange` on the `Asset` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.

*/
-- AlterTable
ALTER TABLE `Asset` MODIFY `hours` DOUBLE NOT NULL,
    MODIFY `totalChange` DOUBLE NOT NULL;
