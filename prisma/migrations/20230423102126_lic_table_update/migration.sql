/*
  Warnings:

  - The values [PAID,BOTH] on the enum `UserLicensesMaster_licenseType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `userLicensesMasterId` on the `userlicenseslave` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `questionbank` MODIFY `questionPlan` ENUM('FREE', 'BUSINESS', 'PREMIUM', 'PLATINUM') NOT NULL DEFAULT 'FREE';

-- AlterTable
ALTER TABLE `userlicenseslave` DROP COLUMN `userLicensesMasterId`;
