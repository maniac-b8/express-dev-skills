const skills = [
    {id: 1, skill: 'Learning Abilities', level: 10, description: 'The capacity of an individual to acquire and increase knowledge or skills'},
    {id: 2, skill: 'Problem Solving', level: 9, description: 'The ability to find solutions to difficult or complex issues'},
    {id: 3, skill: 'CSS/HTML', level: 5, description: 'HTML & CSS are fundamental programming languages used in creating and styling web pages. They form the base structure for all modern web pages.'},
    {id: 4, skill: 'Public Speaking', level: 0.5, description: 'Ability to make speeches in a public setting'},
    {id: 5, skill: 'JavaScript', level: 6, description: 'Object-oriented computer programming language used to create interactive effects within web browsers'}
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}