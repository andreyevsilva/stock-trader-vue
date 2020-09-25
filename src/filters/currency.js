
const filters = [
    {
        name:'currency',
        execute: (value) => {return 'R$ ' + value.toLocaleString()}
    }
]

export default filters