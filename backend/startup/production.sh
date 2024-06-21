echo "Running default startup..."
bash "$(pwd)/startup/base.sh"
echo "Default startup executed"

echo "Collecting static files..."
python manage.py collectstatic --no-input
echo "Static files collected"


echo "Checking deployment readiness..."
python manage.py check --deploy
echo "Deployment readiness checked"

echo "Starting server..."
gunicorn core.wsgi
