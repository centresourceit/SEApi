/*
  Warnings:

  - Added the required column `logo` to the `compliance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `compliance` ADD COLUMN `logo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `question_bank` ADD COLUMN `complianceId` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `user_licenses_master` ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT 'license';

-- AddForeignKey
ALTER TABLE `question_bank` ADD CONSTRAINT `question_bank_complianceId_fkey` FOREIGN KEY (`complianceId`) REFERENCES `compliance`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
