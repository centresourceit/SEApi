/*
  Warnings:

  - Made the column `projectPerLicense` on table `user_licenses_master` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `company` MODIFY `ctoContact` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `contact` BIGINT NULL;

-- AlterTable
ALTER TABLE `user_licenses_master` MODIFY `projectPerLicense` INTEGER NOT NULL;
