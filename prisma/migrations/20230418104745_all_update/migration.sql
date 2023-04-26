/*
  Warnings:

  - You are about to drop the column `result` on the `assesementresult` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `principle_type` on the `principle` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `stageOfInnovation` on the `project` table. All the data in the column will be lost.
  - You are about to drop the column `answer1` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answer10` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answer2` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answer3` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answer4` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answer5` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answer6` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answer7` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answer8` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answer9` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answerMark1` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answerMark10` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answerMark2` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answerMark3` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answerMark4` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answerMark5` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answerMark6` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answerMark7` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answerMark8` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `answerMark9` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `principalId` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `question1` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `recommendation1` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `recommendation2` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `recommendation3` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `recommendation4` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `recommendation5` on the `questionbank` table. All the data in the column will be lost.
  - You are about to drop the column `validityDay` on the `userlicensesmaster` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `certificatedId` to the `assesementresult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `licenseId` to the `assesementresult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `assesementresult` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdUserId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answer` to the `QuestionBank` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `QuestionBank` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `Project_companyId_fkey`;

-- AlterTable
ALTER TABLE `assesementresult` DROP COLUMN `result`,
    ADD COLUMN `adminComments` VARCHAR(191) NULL,
    ADD COLUMN `certificatePrivacy` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'INACTIVE',
    ADD COLUMN `certificatedId` INTEGER NOT NULL,
    ADD COLUMN `licenseId` INTEGER NOT NULL,
    ADD COLUMN `projectId` INTEGER NOT NULL,
    ADD COLUMN `resultStatus` ENUM('MET', 'NOTMET', 'REVIEW') NOT NULL DEFAULT 'REVIEW';

-- AlterTable
ALTER TABLE `company` DROP COLUMN `password`;

-- AlterTable
ALTER TABLE `principle` DROP COLUMN `principle_type`;

-- AlterTable
ALTER TABLE `project` DROP COLUMN `companyId`,
    DROP COLUMN `stageOfInnovation`,
    ADD COLUMN `createdUserId` INTEGER NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `questionbank` DROP COLUMN `answer1`,
    DROP COLUMN `answer10`,
    DROP COLUMN `answer2`,
    DROP COLUMN `answer3`,
    DROP COLUMN `answer4`,
    DROP COLUMN `answer5`,
    DROP COLUMN `answer6`,
    DROP COLUMN `answer7`,
    DROP COLUMN `answer8`,
    DROP COLUMN `answer9`,
    DROP COLUMN `answerMark1`,
    DROP COLUMN `answerMark10`,
    DROP COLUMN `answerMark2`,
    DROP COLUMN `answerMark3`,
    DROP COLUMN `answerMark4`,
    DROP COLUMN `answerMark5`,
    DROP COLUMN `answerMark6`,
    DROP COLUMN `answerMark7`,
    DROP COLUMN `answerMark8`,
    DROP COLUMN `answerMark9`,
    DROP COLUMN `principalId`,
    DROP COLUMN `question1`,
    DROP COLUMN `recommendation1`,
    DROP COLUMN `recommendation2`,
    DROP COLUMN `recommendation3`,
    DROP COLUMN `recommendation4`,
    DROP COLUMN `recommendation5`,
    ADD COLUMN `answer` JSON NOT NULL,
    ADD COLUMN `question` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `name` VARCHAR(191) NULL,
    MODIFY `contact` VARCHAR(191) NULL,
    MODIFY `address` VARCHAR(191) NULL,
    MODIFY `profession` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `userlicensesmaster` DROP COLUMN `validityDay`,
    ADD COLUMN `projectPerLicense` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `assesementResultRevised` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `result` JSON NOT NULL,
    `assesmentId` INTEGER NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `compliance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `LearnMoreLink` VARCHAR(191) NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Company_email_key` ON `Company`(`email`);

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assesementresult` ADD CONSTRAINT `assesementresult_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assesementresult` ADD CONSTRAINT `assesementresult_licenseId_fkey` FOREIGN KEY (`licenseId`) REFERENCES `UserLicenseslave`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assesementResultRevised` ADD CONSTRAINT `assesementResultRevised_assesmentId_fkey` FOREIGN KEY (`assesmentId`) REFERENCES `assesementresult`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
