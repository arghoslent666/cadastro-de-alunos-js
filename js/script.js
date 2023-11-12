const nomeinput = document.querySelector('.name-input');
const ageinput = document.querySelector('.age-input');
const dateinput = document.querySelector('.date-student');
const fatherinput = document.querySelector('.father-name');
const matherinput =  document.querySelector('.mather-name');
const cpfinput = document.querySelector('.cpf');
const btn = document.querySelector('.btn-cadastro');
const btnsingup = document.querySelector('.btn-singn-up');
const fade = document.querySelector('.fade');
const cardmodal = document.querySelector('.card-modal');
const verification = document.querySelector('.verification');
const verificationimg = document.querySelector('.verification-img');
const verificationspan = document.querySelector('.verification-span');
const menu = document.querySelector('.menu');
const menumobile = document.querySelector('.menu-mobile');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

//------------------------Getting Dom Element---------------------------------//

//---------------------------Student Register Function--------------------------//

const alunos = [];

const matriculaDeAlunos = ()=>{
    let $nome = nomeinput.value;
    let $idade = ageinput.value;
    let $data = dateinput.value;
    let $father = fatherinput.value;
    let $mather = matherinput.value;
    let $cpf =  cpfinput.value;

    let valuematricula = '';
    
    for(let i = 0; i < 4 ; i++){
       valuematricula += `${Math.floor(Math.random() * 10)}`
    }
    
    let aluno = {
        nome :$nome,
        idade: $idade,
        matricula: valuematricula,
        data: $data,
        pai: $father,
        mather: $mather,
        cpf: $cpf
    }
    
    alunos.push(aluno)
    salvarAlunosNoLocalStorage() //
    clearinput()
}

const salvarAlunosNoLocalStorage = ()=>{
    localStorage.setItem('alunos',JSON.stringify(alunos)) //
}

//-------------------------------------------------------------------//

//---------------------------Clear inputs Function-------------------------//

const clearinput = ()=>{
    nomeinput.value = '';
    ageinput.value = '';
    dateinput.value = '';
    fatherinput.value = '';
    matherinput.value = '';
    cpfinput.value = '';
}

//------------------------------------------------------------------------------//

//----------------------------------Verification Inputs and Events--------------------------//

btn.addEventListener('click',()=>{
    if((nomeinput.value && ageinput.value && dateinput.value && fatherinput.value && matherinput.value && cpfinput.value) !== ''){
        matriculaDeAlunos()
        verification.classList.add('active');
        
        verificationspan.textContent = 'Cadastro conluido'
        verificationimg.src = './img/check-iconpng.png'

        setInterval(() => {
            verification.classList.remove('active')
        }, 2000);


    }else{
        verification.classList.add('active');
        
        verificationspan.textContent = 'Preencha os campos acima'
        verificationimg.src = './img/error-10379.png'

        setInterval(() => {
            verification.classList.remove('active')
        }, 2000);
        
    }
    
    console.log(alunos)
});
//------------------------------------------------------------------------//

//------------------------------Modal,Register and Menu mobile Event--------------//

// btnsingup.addEventListener('click',()=>{
//     fade.classList.add('active')
//     cardmodal.classList.add('active')
// });

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('btn-singn-up') || e.target.classList.contains('btn-singn-up-mobile')){
        fade.classList.add('active')
        cardmodal.classList.add('active')
    }
})

menu.addEventListener('click',()=>{
    one.classList.toggle('active')
    two.classList.toggle('active')
    three.classList.toggle('active')
    menumobile.classList.toggle('active')
})

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fade') || e.target.classList.contains('bi')){
        fade.classList.remove('active')
    }
})

//-------------------------Event Scroll Functions--------------------------------//

function initanimationscroll(){

    const sections = document.querySelectorAll('.js-scroll');
    
    if(sections.length){
    
        const windowmetade = window.innerHeight * 0.6;
        
        function animascroll(){
            sections.forEach(item =>{
                const sectiontop = item.getBoundingClientRect().top;
                const issectionvisible = (sectiontop - windowmetade) < 0
                if(issectionvisible){
                    item.classList.add('active')
                }else{
                    item.classList.remove('active')
                }
            })
        };
        
        animascroll();
        
        window.addEventListener('scroll', animascroll);
    }
}

initanimationscroll();