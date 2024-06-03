/*
  Warnings:

  - You are about to drop the column `imageLink` on the `Image` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "ImageLink" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "link" TEXT NOT NULL,
    "imageId" INTEGER NOT NULL,
    CONSTRAINT "ImageLink_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Image" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "focus" TEXT NOT NULL,
    "edits" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Image" ("description", "edits", "focus", "id", "title", "userId") SELECT "description", "edits", "focus", "id", "title", "userId" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
PRAGMA foreign_key_check("Image");
PRAGMA foreign_keys=ON;
