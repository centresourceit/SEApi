/*
  Warnings:

  - The `discountValidTill` column on the `user_licenses_master` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `user_licenses_master` DROP COLUMN `discountValidTill`,
    ADD COLUMN `discountValidTill` DATETIME(3) NULL;
