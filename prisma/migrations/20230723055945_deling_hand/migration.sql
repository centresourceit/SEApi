-- CreateTable
CREATE TABLE `deling_hand` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `file_type` VARCHAR(191) NOT NULL,
    `collector` BOOLEAN NOT NULL DEFAULT false,
    `dycollector` BOOLEAN NOT NULL DEFAULT false,
    `atp` BOOLEAN NOT NULL DEFAULT false,
    `jtp` BOOLEAN NOT NULL DEFAULT false,
    `je` BOOLEAN NOT NULL DEFAULT false,
    `fieldinspector` BOOLEAN NOT NULL DEFAULT false,
    `sitesupervisor` BOOLEAN NOT NULL DEFAULT false,
    `architectassistant` BOOLEAN NOT NULL DEFAULT false,
    `planningdraughtsman` BOOLEAN NOT NULL DEFAULT false,
    `spdraughtsman` BOOLEAN NOT NULL DEFAULT false,
    `stdraughtsman` BOOLEAN NOT NULL DEFAULT false,
    `landsupted` BOOLEAN NOT NULL DEFAULT false,
    `mamlatdar` BOOLEAN NOT NULL DEFAULT false,
    `eocs` BOOLEAN NOT NULL DEFAULT false,
    `dept1` BOOLEAN NOT NULL DEFAULT false,
    `dept2` BOOLEAN NOT NULL DEFAULT false,
    `dept3` BOOLEAN NOT NULL DEFAULT false,
    `dept4` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
