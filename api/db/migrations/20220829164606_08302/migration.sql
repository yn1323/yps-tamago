/*
  Warnings:

  - The primary key for the `Announce` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `announceId` on the `Announce` table. All the data in the column will be lost.
  - The primary key for the `Operation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `operationId` on the `Operation` table. All the data in the column will be lost.
  - The primary key for the `Organization` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `organizationId` on the `Organization` table. All the data in the column will be lost.
  - The primary key for the `Request` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `requestId` on the `Request` table. All the data in the column will be lost.
  - The primary key for the `Shop` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `shopId` on the `Shop` table. All the data in the column will be lost.
  - The primary key for the `StableShift` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `stableShiftId` on the `StableShift` table. All the data in the column will be lost.
  - The primary key for the `TemporaryClosed` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `temporaryClosedId` on the `TemporaryClosed` table. All the data in the column will be lost.
  - The primary key for the `TimeCard` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `timeCardId` on the `TimeCard` table. All the data in the column will be lost.
  - The primary key for the `UnstableShift` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `unstableShiftId` on the `UnstableShift` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Announce` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Operation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Request` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Shop` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `StableShift` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `TemporaryClosed` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `TimeCard` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `UnstableShift` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Announce` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Operation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `StableShift` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `TemporaryClosed` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `TimeCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `UnstableShift` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Announce" DROP CONSTRAINT "Announce_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "Announce" DROP CONSTRAINT "Announce_shopId_fkey";

-- DropForeignKey
ALTER TABLE "Operation" DROP CONSTRAINT "Operation_shopId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationShopBelonging" DROP CONSTRAINT "OrganizationShopBelonging_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "OrganizationShopBelonging" DROP CONSTRAINT "OrganizationShopBelonging_shopId_fkey";

-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_shopId_fkey";

-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_userId_fkey";

-- DropForeignKey
ALTER TABLE "ShopUserBelonging" DROP CONSTRAINT "ShopUserBelonging_shopId_fkey";

-- DropForeignKey
ALTER TABLE "ShopUserBelonging" DROP CONSTRAINT "ShopUserBelonging_userId_fkey";

-- DropForeignKey
ALTER TABLE "StableShift" DROP CONSTRAINT "StableShift_shopId_fkey";

-- DropForeignKey
ALTER TABLE "StableShift" DROP CONSTRAINT "StableShift_userId_fkey";

-- DropForeignKey
ALTER TABLE "TemporaryClosed" DROP CONSTRAINT "TemporaryClosed_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "TemporaryClosed" DROP CONSTRAINT "TemporaryClosed_shopId_fkey";

-- DropForeignKey
ALTER TABLE "TimeCard" DROP CONSTRAINT "TimeCard_shopId_fkey";

-- DropForeignKey
ALTER TABLE "TimeCard" DROP CONSTRAINT "TimeCard_userId_fkey";

-- DropForeignKey
ALTER TABLE "UnstableShift" DROP CONSTRAINT "UnstableShift_shopId_fkey";

-- DropForeignKey
ALTER TABLE "UnstableShift" DROP CONSTRAINT "UnstableShift_userId_fkey";

-- DropIndex
DROP INDEX "Announce_announceId_key";

-- DropIndex
DROP INDEX "Operation_operationId_key";

-- DropIndex
DROP INDEX "Organization_organizationId_key";

-- DropIndex
DROP INDEX "Request_requestId_key";

-- DropIndex
DROP INDEX "Shop_shopId_key";

-- DropIndex
DROP INDEX "StableShift_stableShiftId_key";

-- DropIndex
DROP INDEX "TemporaryClosed_temporaryClosedId_key";

-- DropIndex
DROP INDEX "TimeCard_timeCardId_key";

-- DropIndex
DROP INDEX "UnstableShift_unstableShiftId_key";

-- DropIndex
DROP INDEX "User_userId_key";

-- AlterTable
ALTER TABLE "Announce" DROP CONSTRAINT "Announce_pkey",
DROP COLUMN "announceId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Announce_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Operation" DROP CONSTRAINT "Operation_pkey",
DROP COLUMN "operationId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Operation_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_pkey",
DROP COLUMN "organizationId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Organization_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Request" DROP CONSTRAINT "Request_pkey",
DROP COLUMN "requestId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Request_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Shop" DROP CONSTRAINT "Shop_pkey",
DROP COLUMN "shopId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Shop_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "StableShift" DROP CONSTRAINT "StableShift_pkey",
DROP COLUMN "stableShiftId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "StableShift_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TemporaryClosed" DROP CONSTRAINT "TemporaryClosed_pkey",
DROP COLUMN "temporaryClosedId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "TemporaryClosed_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "TimeCard" DROP CONSTRAINT "TimeCard_pkey",
DROP COLUMN "timeCardId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "TimeCard_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UnstableShift" DROP CONSTRAINT "UnstableShift_pkey",
DROP COLUMN "unstableShiftId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "UnstableShift_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "userId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Announce_id_key" ON "Announce"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Operation_id_key" ON "Operation"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_id_key" ON "Organization"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Request_id_key" ON "Request"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Shop_id_key" ON "Shop"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StableShift_id_key" ON "StableShift"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TemporaryClosed_id_key" ON "TemporaryClosed"("id");

-- CreateIndex
CREATE UNIQUE INDEX "TimeCard_id_key" ON "TimeCard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UnstableShift_id_key" ON "UnstableShift"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "ShopUserBelonging" ADD CONSTRAINT "ShopUserBelonging_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopUserBelonging" ADD CONSTRAINT "ShopUserBelonging_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationShopBelonging" ADD CONSTRAINT "OrganizationShopBelonging_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationShopBelonging" ADD CONSTRAINT "OrganizationShopBelonging_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operation" ADD CONSTRAINT "Operation_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StableShift" ADD CONSTRAINT "StableShift_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StableShift" ADD CONSTRAINT "StableShift_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnstableShift" ADD CONSTRAINT "UnstableShift_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnstableShift" ADD CONSTRAINT "UnstableShift_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeCard" ADD CONSTRAINT "TimeCard_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeCard" ADD CONSTRAINT "TimeCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemporaryClosed" ADD CONSTRAINT "TemporaryClosed_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemporaryClosed" ADD CONSTRAINT "TemporaryClosed_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announce" ADD CONSTRAINT "Announce_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announce" ADD CONSTRAINT "Announce_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
