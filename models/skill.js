const skills = [
    {id: 12, skill: 'Learning Abilities', level: 10, description: 'The capacity of an individual to acquire and increase knowledge or skills'},
    {id: 22, skill: 'Problem Solving', level: 9, description: 'The ability to find solutions to difficult or complex issues'},
    {id: 34, skill: 'CSS/HTML', level: 5, description: 'HTML & CSS are fundamental programming languages used in creating and styling web pages. They form the base structure for all modern web pages.'},
    {id: 45, skill: 'Public Speaking', level: 0.5, description: 'Ability to make speeches in a public setting'},
    {id: 56, skill: 'JavaScript', level: 6, description: 'Object-oriented computer programming language used to create interactive effects within web browsers'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = skills[skills.length - 1].id+1
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function updateOne(skillUpdated) {
    id = parseInt(skillUpdated.id)
    skillIdx = skills.findIndex(skill => skill.id === id) 
    skills[skillIdx].skill = skillUpdated.skill
    skills[skillIdx].level = parseInt(skillUpdated.level)
    skills[skillIdx].description = skillUpdated.description
}
