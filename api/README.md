# Olympics API

This is a FastAPI project for the Olympics dataset. It includes endpoints for athletes, medals, results, and hosts.

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/your-repository-name.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd your-repository-name
    ```

3. **Create a virtual environment:**
    ```bash
    python -m venv env
    ```

4. **Activate the virtual environment:**
    ```bash
    source env/bin/activate  # On Windows use `env\Scripts\activate`
    ```

5. **Install the dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

6. **Run the FastAPI application:**
    ```bash
    uvicorn app.main:app --reload
    ```

## Endpoints

- **`/athletes`**: Get a list of athletes
- **`/athletes/{athlete_id}`**: Get details of a specific athlete
- **`/medals`**: Get a list of medals
- **`/medals/{medal_id}`**: Get details of a specific medal
- **`/results`**: Get a list of results
- **`/results/{result_id}`**: Get details of a specific result
- **`/hosts`**: Get a list of hosts
- **`/hosts/{host_id}`**: Get details of a specific host
