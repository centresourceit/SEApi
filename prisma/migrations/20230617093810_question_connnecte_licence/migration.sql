/*
  Warnings:

  - You are about to drop the column `questionPlan` on the `question_bank` table. All the data in the column will be lost.
  - Added the required column `licensesId` to the `question_bank` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `question_bank` DROP COLUMN `questionPlan`,
    ADD COLUMN `licensesId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `question_bank` ADD CONSTRAINT `question_bank_licensesId_fkey` FOREIGN KEY (`licensesId`) REFERENCES `user_licenses_master`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
