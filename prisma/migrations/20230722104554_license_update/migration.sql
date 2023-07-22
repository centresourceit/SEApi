-- AlterTable
ALTER TABLE `user_licenses_master` ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `licenseValidTill` DATETIME(3) NULL;
