echo "Create migrations..."
python manage.py makemigrations
echo "Migrations created"

echo "Migrate database..."
python manage.py migrate
echo "Database migrated"

echo "Loading fixtures..."
python manage.py loaddata __fixtures__/*.json
echo "Fixtures loaded"

echo "Starting server..."
python manage.py runserver 0.0.0.0:8000
