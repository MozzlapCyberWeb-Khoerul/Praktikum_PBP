let studentsScore = [
    {name: 'Bryan', score: 90},
    {name: 'Vconk', score: 80},
    {name: 'Zaki', score: 100}
];

let nilaiTertinggi = 0;
let namaTertinggi = '';

for (let i = 0; i < studentsScore.length; i++) {
    if (studentsScore[i].score > nilaiTertinggi) {
        nilaiTertinggi = studentsScore[i].score;
        namaTertinggi = studentsScore[i].name;
    }
}

console.log("nama: " + namaTertinggi + " nilai: " + nilaiTertinggi);