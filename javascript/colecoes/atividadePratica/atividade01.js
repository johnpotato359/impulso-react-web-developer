function getAdmins(map) {
    let admins = [];
    for(let [key, value] of map) {
        if(value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

const adminsMap = new Map();

adminsMap.set("Roberto", "User");
adminsMap.set("Eduardo", "Admin");
adminsMap.set("Raimundo", "Admin");
adminsMap.set("Tobias", "Admin");
adminsMap.set("Brunal", "Aser");

console.log(getAdmins(adminsMap));