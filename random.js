let texte = document.querySelector(".content")
let button = document.querySelector(".bouton")

let PostProd = ['Adobe Premiere Pro', 'Adobe After Effect', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Lightroom', 'Adobe Encoder',
 'Adobe Dreamweaver', 'FL Studio', 'Avid Media Composer', 'Da Vinci Résolve', 'Adobe Audition', 'Blender', 'Krita', 'Adobe In Design', 'Zbrush', 'CapCut', 'Final Cut Pro','AE script','TRAPCODE'];

 let COde = ['PHP', 'HTML', 'CSS', 'Javascript', 'Java', 'Python', 'MySQL', 'Bootstrap', 'Kotlin', 'Angular', 'ReactJS', 'VSCODE', 'Pycharm', 'DataGrip','Data-science','I.A', 'C', 'MATLAB', 'Ruby', 'GO', 'HEROKU', 'GitLab' ]

 let JEUX = ['Unity', 'Unreal Engine 5', 'C++', 'C#', 'Blender','Cryengine', 'GameMaker Studio', 'GDevelop', 'Godot',
  'Game Salad', 'Lumbeyard', 'COCOS2-X', 'LÖVE', 'Superpowers', 'Stencyl', 'Natron', 'RPG MAKER MZ']

  let CMa = ['Instagram', 'Linkedin', 'Facebook', 'WhatsApp', 'Pinterest', 'TikTok', 'ChatGPT']

  let Théorie = ['Lumière', 'Cadrage', 'VFX', 'Matte Painting', 'Gestion', 'Management', 'Etalonnage', 'CODEC', 'Comptabilite', 'Marketing', 'PNL', 'Théorie Musical']

tous = PostProd.concat(COde, JEUX,CMa,Théorie)
tlenght = tous.length

console.log(tous.length)
  
function melanger(min, max){
    return Math.floor(Math.random()*tous.length)
}


button.addEventListener('click', event => {
    texte.innerHTML=tous[melanger(0,77)];
})

