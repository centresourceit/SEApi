/*
  Warnings:

  - The `licenseValidTill` column on the `user_licenses_master` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `user_licenses_master` DROP COLUMN `licenseValidTill`,
    ADD COLUMN `licenseValidTill` INTEGER NULL;
