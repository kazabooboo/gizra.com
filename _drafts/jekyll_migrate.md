sudo apt-get install make
sudo apt-get install mysql-server

sudo gem install jekyll
sudo gem install mysql -- --with-mysql-config=/usr/bin/mysql_config
sudo gem install mysql2 -- --with-mysql-config=/usr/bin/mysql_config

mysql --host=localhost --user=root --password=root

CREATE DATABASE gizra;
USE gizra;
# Import the dump.
SOURCE /mysql/dump.dql
# Confirm tables were imported
show tables