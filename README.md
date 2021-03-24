# Ajirni
App for renting items, such as, cars, flats, tools, .....etc. 
- Click [here](_APPLICATION-FLOW.md) for more information about how to use the Ajirni Application.

## Team

  - __Product Owner__: [Yaser](https://github.com/YasserKassem989979)
  - __Scrum Master__: [Ayman](https://github.com/engaymanh)
  - __Development Team Members__: [Ammar](https://github.com/AmmarAlkhooly98), [Mohammed](https://github.com/mohamedartan)

## Table of Contents

1. [Application_Flow](_APPLICATION-FLOW.md)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Project-Stack](#Stack)
1. [Team](#team)
1. [Contributing](#contributing)
1. [More Details about the Project](#More-Details-about-the-Project-New-Release)

## Usage

- [Fork](https://github.com/yama-group/Ajirni) the repo to your account.
- Clone the repo to your computer.
- add the remote link https://github.com/yama-group/Ajirni in your terminal.

## Requirements

- Node 0.10.x
- Python 3.7.x
- MySQL 5.7.x
- Docker 18.09.x

## Development

### Installing Dependencies

From within the root directory:

```bash
pip install pipenv
pipenv install
cd frontend 
npm install 
```

### Running the server

```bash
pipenv shell
cd yama
cd ajirni
python manage.py runserver
```

### Running the Front-End server

```bash
cd frontend
npm start
```

### Running the Back-End Test with unittest

```bash
cd yama
cd ajirni
./manage.py test
```

### Running the Back-End Test with pytest

```bash
cd yama
cd ajirni
pytest
```

### Making Migrations to database

```bash
pipenv shell
cd yama
cd ajirni
python manage.py makemigrations
python manage.py migrate
```

## Stack

1. react with react redux in the front-end
1. python/Django in the back-end
1. MySQL for the dataBase

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## More Details about the Project New Release

See [_PRESS-RELEASE.md](_PRESS-RELEASE.md) for further more details about Ajirni application.
