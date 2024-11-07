
const db = [
    {
        name: 'Presentation',
        color: "#2E12E2",
        start:0,
        end:15
    },
    {
        name: 'Development',
        color: "#00FF2F",
        start:15,
        end:45
    },
    {
        name: 'climax',
        color: "#F75931",
        start:45,
        end:75 
    },
    {
        name: 'Resolution',
        color: "#8B7DEA",
        start:75,
        end:90  
    }
]

export function GetDataBaseSequences() {
    return db
}

export function UpdateDataBaseSequences(index, name, location) {
    db[index].name=name
    db[index].location=location

}

export function PostDataBaseSequence(name,location){
    const newLocation = {
        name: name,
        location: location,
        imag: "default-image.webp"
    };
    db.push(newLocation)
}

export function RemoveDataBaseSequence(index){
    db.splice(index,index)
}

