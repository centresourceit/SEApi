/*
  Warnings:

  - Added the required column `questioncode` to the `question_bank` table without a default value. This is not possible if the table is not empty.
  - Added the required column `version` to the `question_bank` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `company_email_key` ON `company`;

-- DropIndex
DROP INDEX `user_contact_key` ON `user`;

-- DropIndex
DROP INDEX `user_email_key` ON `user`;

-- AlterTable
ALTER TABLE `question_bank` ADD COLUMN `questioncode` VARCHAR(191) NOT NULL,
    ADD COLUMN `version` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
