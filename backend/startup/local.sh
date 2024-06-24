echo "Running default startup..."
bash "$(pwd)/startup/base.sh"
echo "Default startup executed"


echo "Starting server..."
python manage.py runserver_plus 0.0.0.0:8000
echo "Create migrations..."
