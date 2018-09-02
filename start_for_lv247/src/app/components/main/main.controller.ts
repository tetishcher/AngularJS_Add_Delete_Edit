export class MainController {
    createMode = false;
    submitted = false;

    formName = '';
    formCity = '';

    persons = [{
        id: 1,
        name: "Jon",
        city: "Lviv"
    },
    {
        id: 2,
        name: "Kate",
        city: "Lviv"
    },
    {
        id: 3,
        name: "Oleg",
        city: "Lviv"
    }
    ]

    onDelete(id) {
        this.persons = this.persons.filter(person => person.id != id);
    }

    onAdd(id) {
        this.createMode = true;
    }

    onCreate() {
        let name = this.formName;
        let city = this.formCity;
        let obj = { id: 4, name, city }
        this.persons = [...this.persons, obj]
    }

    onEdit(name, city) {
        name.editMode = !name.editMode;
        city.editMode = !city.editMode;
    }
}

