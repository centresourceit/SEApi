/*
  Warnings:

  - You are about to drop the column `role` on the `company` table. All the data in the column will be lost.
  - The values [COMPANY] on the enum `user_role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `company` DROP COLUMN `role`;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('SYSTEM', 'ADMIN', 'USER') NOT NULL DEFAULT 'USER';
