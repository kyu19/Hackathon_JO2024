CREATE TABLE olympic_hosts (
    game_slug VARCHAR(255) PRIMARY KEY,
    game_end_date DATETIME,
    game_start_date DATETIME,
    game_location VARCHAR(255),
    game_name VARCHAR(255),
    game_season VARCHAR(50),
    game_year INT
);

CREATE TABLE olympic_athletes (
    athlete_url VARCHAR(255) PRIMARY KEY,
    athlete_full_name VARCHAR(255),
    games_participations INT,
    first_game VARCHAR(255),
    athlete_year_birth FLOAT,
    athlete_medals TEXT,
    bio TEXT,
    medal_gold INT,
    medal_silver INT,
    medal_bronze INT
);

CREATE TABLE olympic_medals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    discipline_title VARCHAR(255),
    slug_game VARCHAR(255),
    event_title VARCHAR(255),
    event_gender VARCHAR(50),
    medal_type VARCHAR(50),
    participant_type VARCHAR(50),
    participant_title VARCHAR(255),
    athlete_url VARCHAR(255),
    athlete_full_name VARCHAR(255),
    country_name VARCHAR(255),
    country_code VARCHAR(50),
    country_3_letter_code VARCHAR(50),
    FOREIGN KEY (slug_game) REFERENCES olympic_hosts(game_slug),
    FOREIGN KEY (athlete_url) REFERENCES olympic_athletes(athlete_url)
);

CREATE TABLE olympic_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    discipline_title VARCHAR(255),
    event_title VARCHAR(255),
    slug_game VARCHAR(255),
    participant_type VARCHAR(50),
    medal_type VARCHAR(50),
    athletes TEXT,
    rank_equal BOOLEAN,
    rank_position INT,
    country_name VARCHAR(255),
    country_code VARCHAR(50),
    country_3_letter_code VARCHAR(50),
    athlete_url VARCHAR(255),
    athlete_full_name VARCHAR(255),
    value_unit VARCHAR(50),
    value_type VARCHAR(50),
    FOREIGN KEY (slug_game) REFERENCES olympic_hosts(game_slug),
    FOREIGN KEY (athlete_url) REFERENCES olympic_athletes(athlete_url)
);
