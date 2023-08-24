/*
  Warnings:

  - You are about to drop the `deling_hand` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `assesement_result` MODIFY `certified` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'INACTIVE',
    MODIFY `certificatePrivacy` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'INACTIVE',
    MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `assesement_result_revised` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `company` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `compliance` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `contact` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `feedback` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `principle` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `project` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `question_bank` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `user` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `user_license_slave` MODIFY `paymentStatus` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'INACTIVE',
    MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE `user_licenses_master` MODIFY `status` ENUM('ACTIVE', 'INACTIVE', 'ADMINACTIVE') NOT NULL DEFAULT 'ACTIVE';

-- DropTable
DROP TABLE `deling_hand`;
