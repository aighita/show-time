<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250705114137 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDE8AEBAF57
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE booking CHANGE festival_id festival_id INT DEFAULT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDE8AEBAF57 FOREIGN KEY (festival_id) REFERENCES festival (id) ON DELETE SET NULL
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE booking DROP FOREIGN KEY FK_E00CEDDE8AEBAF57
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE booking CHANGE festival_id festival_id INT NOT NULL
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE booking ADD CONSTRAINT FK_E00CEDDE8AEBAF57 FOREIGN KEY (festival_id) REFERENCES festival (id) ON UPDATE NO ACTION ON DELETE NO ACTION
        SQL);
    }
}
