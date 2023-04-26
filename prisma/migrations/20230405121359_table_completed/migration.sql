-- AlterTable
ALTER TABLE `principle` MODIFY `deletedAt` DATETIME(3) NULL;

-- CreateTable
CREATE TABLE `QuestionBank` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `principalId` INTEGER NOT NULL,
    `questionType` ENUM('MCQ', 'SLIDER', 'TANDF', 'PERCENTAGE') NOT NULL DEFAULT 'TANDF',
    `questionPlan` ENUM('FREE', 'PAID', 'BOTH') NOT NULL DEFAULT 'FREE',
    `question1` VARCHAR(191) NOT NULL,
    `answer1` VARCHAR(191) NOT NULL,
    `answerMark1` INTEGER NOT NULL,
    `answer2` VARCHAR(191) NOT NULL,
    `answerMark2` INTEGER NOT NULL,
    `answer3` VARCHAR(191) NULL,
    `answerMark3` INTEGER NULL,
    `answer4` VARCHAR(191) NULL,
    `answerMark4` INTEGER NULL,
    `answer5` VARCHAR(191) NULL,
    `answerMark5` INTEGER NULL,
    `answer6` VARCHAR(191) NULL,
    `answerMark6` INTEGER NULL,
    `answer7` VARCHAR(191) NULL,
    `answerMark7` INTEGER NULL,
    `answer8` VARCHAR(191) NULL,
    `answerMark8` INTEGER NULL,
    `answer9` VARCHAR(191) NULL,
    `answerMark9` INTEGER NULL,
    `answer10` VARCHAR(191) NULL,
    `answerMark10` INTEGER NULL,
    `recommendation1` VARCHAR(191) NULL,
    `recommendation2` VARCHAR(191) NULL,
    `recommendation3` VARCHAR(191) NULL,
    `recommendation4` VARCHAR(191) NULL,
    `recommendation5` VARCHAR(191) NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `principleId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserLicensesMaster` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `licenseType` ENUM('FREE', 'BUSINESS', 'PREMIUM', 'PLATINUM') NOT NULL DEFAULT 'FREE',
    `paymentAmount` INTEGER NOT NULL DEFAULT 0,
    `discountAmount` INTEGER NOT NULL DEFAULT 0,
    `discountValidTill` DATETIME(3) NULL,
    `validityDay` INTEGER NOT NULL,
    `questionAllowed` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserLicenseslave` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `licenseTypeId` INTEGER NOT NULL,
    `paymentStatus` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'INACTIVE',
    `licenseValidity` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,
    `paymentReference` VARCHAR(191) NOT NULL,
    `paymentAmount` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,
    `userLicensesMasterId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `profession` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER', 'COMPANY') NOT NULL DEFAULT 'USER',
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Company` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `logo` VARCHAR(191) NOT NULL,
    `website` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `ctoContact` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'USER', 'COMPANY') NOT NULL DEFAULT 'USER',
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `companyId` INTEGER NOT NULL,
    `stageOfInnovation` VARCHAR(191) NOT NULL,
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `assesementresult` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `result` JSON NOT NULL,
    `totalScore` INTEGER NOT NULL,
    `attemptNo` INTEGER NOT NULL,
    `certified` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'INACTIVE',
    `status` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `QuestionBank` ADD CONSTRAINT `QuestionBank_principleId_fkey` FOREIGN KEY (`principleId`) REFERENCES `Principle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserLicenseslave` ADD CONSTRAINT `UserLicenseslave_licenseTypeId_fkey` FOREIGN KEY (`licenseTypeId`) REFERENCES `UserLicensesMaster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserLicenseslave` ADD CONSTRAINT `UserLicenseslave_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD CONSTRAINT `Project_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assesementresult` ADD CONSTRAINT `assesementresult_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
