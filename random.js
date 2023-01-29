let texte = document.querySelector(".content")
let button = document.querySelector(".bouton")

let PostProd = ['Adobe Premiere Pro', 'Adobe After Effect', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Lightroom', 'Adobe Encoder',
 'Adobe Dreamweaver', 'FL Studio', 'Avid Media Composer', 'Da Vinci Résolve', 'Adobe Audition', 'Blender', 'Krita', 'Adobe In Design', 
 'Zbrush', 'AE script','TRAPCODE', 'Adobe XD', 'Canvas', 'FIGMA', 'Gantt Project', 'Windows Shortcut'];

 let COde = ['PHP', 'HTML', 'CSS', 'Javascript', 'Java', 'Python', 'MySQL', 'Bootstrap', 'Kotlin', 'Angular',
  'ReactJS', 'VSCODE', 'Pycharm', 'DataGrip','Data-science','I.A', 'C', 'Ruby', 'GO', 'HEROKU', 'GitLab', 'Vue','PHP Storm' ]

 let JEUX = ['Unity', 'Unreal Engine 5', 'C++', 'C#', 'Blender','Cryengine',]

  let CMa = ['Instagram', 'Linkedin', 'Facebook', 'WhatsApp', 'Pinterest', 'TikTok', 'ChatGPT']

  let Théorie = ['Lumière', 'Cadrage', 'VFX', 'Matte Painting', 'Gestion', 'Management', 'Etalonnage', 'CODEC', 'Comptabilite', 'Marketing', 'PNL', 'Théorie Musical', 'Colorimétrie',
   'OPTIQUE', 'Etude CAMERA', 'SIGNAL VIDEO', 'compression numérique','Standard d\'image']
   
  let Langue = ['Anglais', 'Espagnol', 'Japonais', 'Mandarin', 'Russe', 'Arabe', 'Coréen', 'Turque']

tous = PostProd.concat(COde, JEUX,CMa,Théorie, Langue)
tlenght = tous.length

console.log(tous.length)
  
function melanger(min, max){
    return Math.floor(Math.random()*tous.length)
}

function melanger1(min, max){
    return Math.floor(Math.random()*PostProd.length)
}

function melanger2(min, max){
    return Math.floor(Math.random()*COde.length)
}

function melanger3(min, max){
    return Math.floor(Math.random()*JEUX.length)
}

function melanger4(min, max){
    return Math.floor(Math.random()*CMa.length)
}

function melanger5(min, max){
    return Math.floor(Math.random()*Théorie.length)
}

function melanger6(min, max){
    return Math.floor(Math.random()*Langue.length)
}



button.addEventListener('click', event => {
    texte.innerHTML=tous[melanger(0,84)];
})

let BPP = document.querySelector('#PP')
let BTH = document.querySelector('#TH')
let BLA = document.querySelector('#LA')
let BCM = document.querySelector('#CM')
let BJV = document.querySelector('#JV')
let BCO = document.querySelector('#CO')

BPP.addEventListener('click', event => {
    texte.innerHTML=PostProd[melanger1(0.22)]
})

BCO.addEventListener('click', event => {
    texte.innerHTML=COde[melanger2(0.21)]
})

BJV.addEventListener('click', event => {
    texte.innerHTML=JEUX[melanger3(0.6)]
})

BCM.addEventListener('click', event => {
    texte.innerHTML=CMa[melanger4(0.7)]
})

BTH.addEventListener('click', event => {
    texte.innerHTML=Théorie[melanger5(0.18)]
})

BLA.addEventListener('click', event => {
    texte.innerHTML=Langue[melanger6(0.8)]
})