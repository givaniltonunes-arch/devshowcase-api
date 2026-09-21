/*
  Warnings:

  - Added the required column `nota` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "nota" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "notaMedia" DOUBLE PRECISION NOT NULL DEFAULT 0;
