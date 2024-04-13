// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
//
//     Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."
//
// relationToLuke("Leia") ➞ "Luke, I am your sister."
//
// relationToLuke("Han") ➞ "Luke, I am your brother in law."

function relationToLuke(name) {
    switch (name) {
        case 'Darth Vader':
            name = 'father';
            break;
        case 'Leia':
            name = 'sister';
            break;
        case 'Han':
            name = 'brother in law';
            break;
        case 'R2D2':
            name = 'droid';
            break;
    }

    return `Luke, I am your ${name}`
}

console.log(relationToLuke("Leia"));