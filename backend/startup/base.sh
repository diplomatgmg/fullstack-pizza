echo "Create migrations..."
python manage.py makemigrations
echo "Migrations created"

echo "Migrate database..."
python manage.py migrate
echo "Database migrated"
