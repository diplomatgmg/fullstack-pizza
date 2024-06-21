echo "Running default startup..."
bash "$(pwd)/startup/base.sh"
echo "Default startup executed"

echo "Starting server..."
python manage.py collectstatic --no-input
python manage.py check --deploy
gunicorn --bind 0.0.0.0:8000 core.wsgi
echo "Create migrations..."