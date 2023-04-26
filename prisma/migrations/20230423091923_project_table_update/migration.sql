/*
  Warnings:

  - You are about to drop the column `userId` on the `project` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `Project_userId_fkey`;

-- AlterTable
ALTER TABLE `project` DROP COLUMN `userId`;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_createdUserId_fkey` FOREIGN KEY (`createdUserId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
