<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260212160807 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category ADD CONSTRAINT FK_64C19C1A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE content_section ADD CONSTRAINT FK_F27BA35CA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('DROP INDEX IDX_CDAA30C6ED5CA9E6 ON realization');
        $this->addSql('ALTER TABLE realization CHANGE service_id category_id INT NOT NULL');
        $this->addSql('ALTER TABLE realization ADD CONSTRAINT FK_CDAA30C612469DE2 FOREIGN KEY (category_id) REFERENCES service (id)');
        $this->addSql('ALTER TABLE realization ADD CONSTRAINT FK_CDAA30C6A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_CDAA30C612469DE2 ON realization (category_id)');
        $this->addSql('ALTER TABLE service ADD CONSTRAINT FK_E19D9AD212469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE service ADD CONSTRAINT FK_E19D9AD2A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE slider_image ADD CONSTRAINT FK_4389483BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE team_member ADD CONSTRAINT FK_6FFBDA1A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category DROP FOREIGN KEY FK_64C19C1A76ED395');
        $this->addSql('ALTER TABLE content_section DROP FOREIGN KEY FK_F27BA35CA76ED395');
        $this->addSql('ALTER TABLE realization DROP FOREIGN KEY FK_CDAA30C612469DE2');
        $this->addSql('ALTER TABLE realization DROP FOREIGN KEY FK_CDAA30C6A76ED395');
        $this->addSql('DROP INDEX IDX_CDAA30C612469DE2 ON realization');
        $this->addSql('ALTER TABLE realization CHANGE category_id service_id INT NOT NULL');
        $this->addSql('CREATE INDEX IDX_CDAA30C6ED5CA9E6 ON realization (service_id)');
        $this->addSql('ALTER TABLE service DROP FOREIGN KEY FK_E19D9AD212469DE2');
        $this->addSql('ALTER TABLE service DROP FOREIGN KEY FK_E19D9AD2A76ED395');
        $this->addSql('ALTER TABLE slider_image DROP FOREIGN KEY FK_4389483BA76ED395');
        $this->addSql('ALTER TABLE team_member DROP FOREIGN KEY FK_6FFBDA1A76ED395');
    }
}
