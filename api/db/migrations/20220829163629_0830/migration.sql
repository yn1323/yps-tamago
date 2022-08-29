-- CreateTable
CREATE TABLE "UserExample" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "UserExample_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopUserBelonging" (
    "id" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShopUserBelonging_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganizationShopBelonging" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrganizationShopBelonging_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "organizationId" TEXT NOT NULL,
    "organizationName" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("organizationId")
);

-- CreateTable
CREATE TABLE "Shop" (
    "shopId" TEXT NOT NULL,
    "shopName" TEXT NOT NULL,
    "openTime" TIMESTAMP(3) NOT NULL,
    "closeTime" TIMESTAMP(3) NOT NULL,
    "timeUnit" INTEGER NOT NULL,
    "submitFrequency" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "useTimeCard" BOOLEAN NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("shopId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Operation" (
    "operationId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "operationName" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Operation_pkey" PRIMARY KEY ("operationId")
);

-- CreateTable
CREATE TABLE "StableShift" (
    "stableShiftId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "workFrom" TIMESTAMP(3) NOT NULL,
    "workTo" TIMESTAMP(3) NOT NULL,
    "breakFrom" TIMESTAMP(3) NOT NULL,
    "breakTo" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StableShift_pkey" PRIMARY KEY ("stableShiftId")
);

-- CreateTable
CREATE TABLE "UnstableShift" (
    "unstableShiftId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "workFrom" TIMESTAMP(3) NOT NULL,
    "workTo" TIMESTAMP(3) NOT NULL,
    "breakFrom" TIMESTAMP(3) NOT NULL,
    "breakTo" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UnstableShift_pkey" PRIMARY KEY ("unstableShiftId")
);

-- CreateTable
CREATE TABLE "Request" (
    "requestId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dateFrom" TEXT NOT NULL,
    "dateTo" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("requestId")
);

-- CreateTable
CREATE TABLE "TimeCard" (
    "timeCardId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "workFrom" TIMESTAMP(3) NOT NULL,
    "workTo" TIMESTAMP(3) NOT NULL,
    "breakFrom" TIMESTAMP(3) NOT NULL,
    "breakTo" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TimeCard_pkey" PRIMARY KEY ("timeCardId")
);

-- CreateTable
CREATE TABLE "TemporaryClosed" (
    "temporaryClosedId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TemporaryClosed_pkey" PRIMARY KEY ("temporaryClosedId")
);

-- CreateTable
CREATE TABLE "Announce" (
    "announceId" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "shopId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Announce_pkey" PRIMARY KEY ("announceId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExample_email_key" ON "UserExample"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ShopUserBelonging_id_key" ON "ShopUserBelonging"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationShopBelonging_id_key" ON "OrganizationShopBelonging"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_organizationId_key" ON "Organization"("organizationId");

-- CreateIndex
CREATE UNIQUE INDEX "Shop_shopId_key" ON "Shop"("shopId");

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Operation_operationId_key" ON "Operation"("operationId");

-- CreateIndex
CREATE UNIQUE INDEX "StableShift_stableShiftId_key" ON "StableShift"("stableShiftId");

-- CreateIndex
CREATE UNIQUE INDEX "UnstableShift_unstableShiftId_key" ON "UnstableShift"("unstableShiftId");

-- CreateIndex
CREATE UNIQUE INDEX "Request_requestId_key" ON "Request"("requestId");

-- CreateIndex
CREATE UNIQUE INDEX "TimeCard_timeCardId_key" ON "TimeCard"("timeCardId");

-- CreateIndex
CREATE UNIQUE INDEX "TemporaryClosed_temporaryClosedId_key" ON "TemporaryClosed"("temporaryClosedId");

-- CreateIndex
CREATE UNIQUE INDEX "Announce_announceId_key" ON "Announce"("announceId");

-- AddForeignKey
ALTER TABLE "ShopUserBelonging" ADD CONSTRAINT "ShopUserBelonging_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("shopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShopUserBelonging" ADD CONSTRAINT "ShopUserBelonging_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationShopBelonging" ADD CONSTRAINT "OrganizationShopBelonging_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("organizationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganizationShopBelonging" ADD CONSTRAINT "OrganizationShopBelonging_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("shopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Operation" ADD CONSTRAINT "Operation_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("shopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StableShift" ADD CONSTRAINT "StableShift_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("shopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StableShift" ADD CONSTRAINT "StableShift_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnstableShift" ADD CONSTRAINT "UnstableShift_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("shopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UnstableShift" ADD CONSTRAINT "UnstableShift_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("shopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Request" ADD CONSTRAINT "Request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeCard" ADD CONSTRAINT "TimeCard_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("shopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeCard" ADD CONSTRAINT "TimeCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemporaryClosed" ADD CONSTRAINT "TemporaryClosed_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("organizationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemporaryClosed" ADD CONSTRAINT "TemporaryClosed_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("shopId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announce" ADD CONSTRAINT "Announce_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("organizationId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announce" ADD CONSTRAINT "Announce_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("shopId") ON DELETE RESTRICT ON UPDATE CASCADE;
