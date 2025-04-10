-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_eventos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,
    "preco" DECIMAL NOT NULL,
    "criadaEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadaEm" DATETIME NOT NULL
);
INSERT INTO "new_eventos" ("atualizadaEm", "capacidade", "categoria", "criadaEm", "data", "descricao", "id", "local", "preco", "titulo") SELECT "atualizadaEm", "capacidade", "categoria", "criadaEm", "data", "descricao", "id", "local", "preco", "titulo" FROM "eventos";
DROP TABLE "eventos";
ALTER TABLE "new_eventos" RENAME TO "eventos";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
