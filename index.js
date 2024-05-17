// var checkBG = document.querySelectorAll('.btn img');
class Todo {
    constructor(all, active, completed) {
        this.active = active;
        this.all = all;
        this.completed = completed;
        this.check = document.querySelector('#check');
        this.all = document.querySelector('#all');
        this.active = document.querySelector('#active');
        this.completed = document.querySelector('#completed');
        this.sun = document.querySelector('#sun');
        this.moon = document.querySelector('#moon');
        this.clear = document.querySelector('#clear');
        this.btn = document.querySelector('#btn');
        this.body = document.querySelector('body');
        this.ul = document.getElementById('ul');
        
        this.init();
        this.clearCompleted();
        // this.ondragStart();
        
        
    }

    init() {
        // this.ul.addEventListener('dragover', this.ondragOver(event));
        // this.ul.addEventListener('drop', this.onDrop(event));


        this.body.addEventListener('click', (eve)=>{
            eve.target;
            this.itemsLeft();
        })
        this.all.addEventListener('click', (eve)=>{
            eve.target;
            this.filterAll()
        })
        this.active.addEventListener('click', (eve)=>{
            eve.target;
            this.filterActive()
        })
        this.completed.addEventListener('click', (eve)=>{
            eve.target;
            this.filterCompleted();
        })
        this.check.addEventListener('click', (eve) => {
            eve.target;
            this.newTodo();
            // this.itemsLeft(); 
            
        });
        this.sun.classList.toggle('none');
        this.btn.addEventListener('click', () => {
            this.moon.classList.toggle('none');
            this.sun.classList.toggle('none');
            this.darkMode();
        });
        
    }

    newTodo() {
        for (let i = 0; i <= 0; i++) {
            let inputCreate = document.querySelector('input').value;
            let ul = document.querySelector('#ul');
            let li = document.createElement('li');
            let inputText = document.createElement('input');
            let button = document.createElement('button');
            let imgCross = document.createElement('img');
            let imgCheckColor = document.createElement('img');
            const todoMessage = document.querySelector('input').value;

            if (inputCreate.length <= 0) {
                let inputCreate = document.querySelector('#error');
                inputCreate.textContent = "This field is required";
            } else {
                inputText.classList.add('inputs');
                inputText.type = 'text';
                inputText.value = todoMessage;
                button.type = 'button';
                button.classList.add('btn');
                // button.classList.add('removes');




                // button.classList.add('check');
                // button.classList.add('.checkBG');
                // inputText.classList.add('.lineThrough');
                // imgCheckColor.src  = './images/icon-check.svg';




                // imgCheckColor.src = './images/icon-moon.svg';
                imgCross.src = './images/icon-cross.svg';
                imgCross.classList.add('cross');
                imgCross.alt = 'icon-cross.svg';
                li.classList.add('li');
                // li.classList.add('drag-item');
                inputText.draggable = 'true';
                inputText.setAttribute('ondragstart', 'onDragStart(event)');
                ul.appendChild(li);
                li.appendChild(button);
                li.appendChild(inputText);
                li.appendChild(imgCross);
                button.appendChild(imgCheckColor);
                // inputCreate.textContent = "";
                


            }
        }
        const todoMessage = document.querySelector('input').value = "";
        todoMessage;
        // this.completed();
        const btns = document.querySelectorAll('.btn');
        const checks = document.querySelectorAll('.check');
        const btn1 = document.querySelector('.btn');
        
        const inputs = document.querySelectorAll('.inputs');
        // checkBG.src='./images/icon-check.svg'
        // checkBG.forEach(element => {
        //     element.classList.toggle('all');
        // });
        btns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const checkBG = document.querySelectorAll('.btn img');
                checkBG[index].classList.remove('active')
                // btn.classList.remove('removes');
                btn.classList.add('check');
                // btn.classList.remove('btn');
                // btns.classList.add()
                // btn.classList.add('.scheckBG');
                checkBG[index].src='./images/icon-check.svg';
                checkBG[index].style.marginLeft='5.5px'
                inputs[index].classList.add('lineThrough');
               
            });
            

            
    
        });
       
            //         check.classList.remove('check');
        
            //         checkBG[index].src='./images/icon-check.svg';
            //         inputs[index].classList.remove('lineThrough');
                   
            //     });
        // checks.forEach((check, index) => {
        //     check.addEventListener('click', () => {
        //         check.classList.remove('check');
    
        //         checkBG[index].src='./images/icon-check.svg';
        //         inputs[index].classList.remove('lineThrough');
               
        //     });
            
    
        // });
        
        this.deleteInputs();
        this.removeCheck();
        

    }
    

    deleteInputs() {
        const crosses = document.querySelectorAll('.cross');
        const list = document.querySelectorAll('.li');
        const todoListLength = document.querySelectorAll('.li').length -1;
        const items = document.querySelector('#items').textContent=`${todoListLength} items left`; 
        crosses.forEach((cross, index) => {
            cross.addEventListener('click', () => {
                list[index].style.display='none';
                alert(items)
                // const todoListLength = document.querySelectorAll('.li').length;
                // const calItem = todoListLength - 1
                // items[index].='ckcjcj';

            });
            
            // const todoListLength = document.querySelectorAll('.li').length;
    

        // console.log(todoListLength)
        // const lineThrough = document.querySelectorAll('.lineThrough').length
        // const calItem = todoListLength - 1
        // document.querySelector('#items').innerHTML=`${calItem} items left`;
        });
        
        // if (document.querySelectorAll('.li').length){
        //     alert('djdudu')
    
        // }
        
    }
    removeCheck(){
        const checkBG = document.querySelectorAll('li img.cross')
        // const hhdh = checkBG.src 
        const head = document.querySelector('header');
        const removes = document.querySelectorAll('.removes');
        const checkImg = document.querySelectorAll('.btn');
        const inputs = document.querySelectorAll('.inputs');

        inputs.forEach((check, index) => {
            check.addEventListener('click', (eve) => {
                eve.target;
                // alert('ddhhdh');
                // check.classList.add('removes');
                const checkBG = document.querySelectorAll('.btn img');
                checkBG[index].classList.add('cr');
                checkBG[index].classList.add('active')
                checkImg[index].classList.remove('check');
                inputs[index].classList.remove('lineThrough');
                // document.querySelectorAll('.check')[0].classList.remove('check')
    
                        // checkBG[index].src='./images/icon-check.svg';
                        // inputs[index].classList.remove('lineThrough');
        });
    });
    }

    lightMode() {
        document.querySelector('body').classList.toggle('lightmodeBody');
        document.querySelector('main').classList.toggle('lightmodeMain');
        document.querySelector('header').classList.toggle('lightmodeHeader');
        document.querySelector('#input').classList.toggle('lightmode');
        document.querySelector('.countainer').classList.toggle('lightmode');
        document.querySelector('.div').classList.toggle('lightmode');
        document.querySelector('footer').classList.toggle('footer');
        document.querySelectorAll(' li input').forEach(input => {
            input.classList.toggle('lightmodeInput');
        });
    } 

    darkMode() {
        document.querySelector('body').classList.toggle('darkmodeBody');
        document.querySelector('#input').classList.toggle('darkmode');
        document.querySelector('.countainer').classList.toggle('darkmode');
        document.querySelector('.div').classList.toggle('darkmode');
        document.querySelector('footer').classList.toggle('footer');
        document.querySelectorAll(' li ,.inputs').forEach(input => {
            input.classList.toggle('darkmodeInput');
        });
    }

    filterAll() {
        const completed = document.querySelectorAll('input.lineThrough');
        const completedChecks = document.querySelectorAll('.btn.check');




        const todoLists = document.querySelectorAll('.inputs');
        const todoListBtns = document.querySelectorAll('.btn');


        const all = document.querySelectorAll('input.lineThrough');
        const allChecks = document.querySelectorAll('.btn.check');
        all.forEach(all => {
            all.classList.add('all');   
        });
        allChecks.forEach(allCheck => {
            allCheck.classList.add('all');   
        });



        todoLists.forEach(todoList => {
            todoList.classList.remove('all');   
        });
        todoListBtns.forEach(todoListBtn => {
            todoListBtn.classList.remove('all');   
        });



        completed.forEach(completed => {
            completed.classList.add('all');   
        });
        completedChecks.forEach(completedCheck => {
            completedCheck.classList.add('all');   
        });
    }


    


    filterActive() {
        const completed = document.querySelectorAll('input.lineThrough');
        const completedChecks = document.querySelectorAll('.btn.check');



        const todoLists = document.querySelectorAll('.inputs');
        const todoListBtns = document.querySelectorAll('.btn');


        const notActives = document.querySelectorAll('input.lineThrough');
        const notActiveChecks = document.querySelectorAll('.btn.check');
            if (document.querySelectorAll('.input.lineThrough')) {
                

                todoLists.forEach(todoList => {
                    todoList.classList.remove('active');   
                });
                todoListBtns.forEach(todoListBtn => {
                    todoListBtn.classList.remove('active');   
                });


                notActives.forEach(notActive => {
                    notActive.classList.add('active');   
                });
                notActiveChecks.forEach(notActiveCheck => {
                    notActiveCheck.classList.add('active');   
                });

                
                completed.forEach(completed => {
                    completed.classList.remove('all');   
                });
                completedChecks.forEach(completedCheck => {
                    completedCheck.classList.remove('all');   
                });

            
            } else {
            
            }

    }



    filterCompleted() {

        // const checkBG = document.querySelectorAll('.btn img');

        const notActives = document.querySelectorAll('input.lineThrough');
        const notActiveChecks = document.querySelectorAll('.btn.check');



        const completed = document.querySelectorAll('input.lineThrough');
        const todoLists = document.querySelectorAll('.inputs');
        const todoListBtns = document.querySelectorAll('.btn');
        const completedChecks = document.querySelectorAll('.btn.check');
        

            if (document.querySelectorAll('.inputs')) {
                alert('djjd')
                todoLists.forEach(todoList => {
                    todoList.classList.add('active');   
                });
                todoListBtns.forEach(todoListBtn => {
                    todoListBtn.classList.add('active');   
                });
                
                completed.forEach(completed => {
                    completed.classList.add('all');   
                });
                completedChecks.forEach(completedCheck => {
                    completedCheck.classList.add('all');   
                });
                
                


                notActives.forEach(notActive => {
                    notActive.classList.add('all');   
                });
                notActiveChecks.forEach(notActiveCheck => {
                    notActiveCheck.classList.add('all');   
                });


                
                // checkBG.classList.add('active') 
                   
            } 
            else {
     
            }
    
    }


clearCompleted(){
    this.clear.addEventListener('click', (eve)=>{
        eve.target;
        const completed = document.querySelectorAll('input.lineThrough');
        const completedChecks = document.querySelectorAll('.btn.check');
        if (document.querySelectorAll('.inputs')){
            completed.forEach(completed => {
                completed.style.display='none';   
            });
            completedChecks.forEach(completedCheck => {
                completedCheck.style.display='none';   
            });

    }
    
    })
      
}

itemsLeft(){
    
    if (document.querySelectorAll('.input.lineThrough')) {
        const todoListLength = document.querySelectorAll('.li').length
        const lineThrough = document.querySelectorAll('.lineThrough').length
        const calItem = todoListLength - lineThrough
        document.querySelector('#items').innerHTML=`${calItem} items left`;
        // this.deleteInputs();

    }
    
}
onDragStart(event){
event.dataTransfer.setData('text/plain', event.target.id);

event.currentTarget.style.color='red'
}
ondragOver(event){
event.preventDefault();
}

onDrop(event){
    const id = event.dataTransfer.setData('text/plain');
    const draggableTodoLists = getElementById(id);
    const drop = event.target;
    drop.appendChild(draggableTodoLists);
    event.dataTransfer.clearData();
    
    event.currentTarget.style.color='red'
    }
   

    

}




const todo = new Todo('all', 'active', 'completed');

const ujl = document.getElementById('footer');

function onDragStart (event) {
    event.dataTransfer.setData('text/plain', event.target.id)

    // event.currentTarget.style.backgroundColor ='yellow';
    event.currentTarget.style.color ='yellow';
}
function onDragOver(event) {
    event.preventDefault();
    
}
function onDrop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement= document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement)
    event.dataTransfer.clearData();
}


// document.querySelector('#liID').addEventListener('dragstart', ondragStart);
        // ul.addEventListener('dragover', onDragOver);
        // ul.addEventListener('drop', onDrop);


















// } 
// newtodo=()=>{
//     for (let i= 0; i <= 0; i++) {
//         let inputCreate =document.querySelector('input').value;
//         let ul =document.querySelector('#ul');
//         let li = document.createElement('li');
//         let inputText = document.createElement('input');
//         let button = document.createElement('button');
//         let imgCross = document.createElement('img');
//         const todoMessage = document.querySelector('input').value;        
        
//         if(inputCreate.length <=0){
//             let inputCreate =document.querySelector('#error');
//             inputCreate.textContent ="This field is required";
            
//         }else{
//             inputText.classList.add('inputs')
//             inputText.type ='text';
//             inputText.value= todoMessage;
//             button.type ='button';
//             button.classList.add('btn');
//             imgCross.src = './images/icon-cross.svg';
//             imgCross.classList.add('cross');
//             li.classList.add('li');
//             li.classList.add('active');
//             li.classList.add('completed');
//             li.classList.add('all');
//             imgCross.alt = 'icon-cross.svg';
//             ul.appendChild(li);
//             li.appendChild(button);
//             li.appendChild(inputText);
//             li.appendChild(imgCross);
//             inputCreate.textContent ="";
//         }
//     }
//     const todoMessage = document.querySelector('input').value ="";        
// todoMessage
// completed();
// deleteInputs();
// }
// completed=()=>{
//     const btns = document.querySelectorAll('.btn');
//     const inputs = document.querySelectorAll('.inputs');
//     btns.forEach((btn, index)=>{
//         btn.addEventListener('click', (eve)=>{
//             eve.target;
            
//             btn.classList.toggle('check');
//     inputs[index].classList.toggle('lineThrough');
    

    
//         });
        

//     });
    
//     };

//     deleteInputs=()=>{
//         const crosses = document.querySelectorAll('.cross');
//         const list = document.querySelectorAll('.li');
//         crosses.forEach((cross, index) => {
        
//         cross.addEventListener('click', (eve)=>{
//             eve.target;
//              list[index].classList.toggle('none');
        
//         })
//         });
//         }

       

//         lightMode=()=>{
//             document.querySelector('body').classList.toggle('lightmodeBody');
//             document.querySelector('main').classList.toggle('lightmodeMain');
//             document.querySelector('header').classList.toggle('lightmodeHeader');
//                     document.querySelector('#input').classList.toggle('lightmode');
//                     document.querySelector('.countainer').classList.toggle('lightmode');
//                     document.querySelector('.div').classList.toggle('lightmode');
//                     document.querySelector('footer').classList.toggle('footer');
//                     document.querySelectorAll(' li input').forEach(input => {
//                         input.classList.toggle('lightmodeInput');
//                     });
//                 }        
//                 // lightMode();
//                 darkMode=()=>{
//                     document.querySelector('body').classList.toggle('darkmodeBody');
//                     document.querySelector('#input').classList.toggle('darkmode');
//                     document.querySelector('.countainer').classList.toggle('darkmode');
//                     document.querySelector('.div').classList.toggle('darkmode');
//                     document.querySelector('footer').classList.toggle('footer');
//                     document.querySelectorAll(' li input').forEach(input => {
//                         input.classList.toggle('darkmodeInput');
//                     });
//                 }
//                 darkMode()
//                 lightMode();

// check.addEventListener('click', (eve)=>{
//     eve.target;
//     newtodo(); 
//     });
//     document.querySelector('#sun').classList.toggle('none');
//     document.querySelector('#btn').addEventListener('click', (eve)=>{
//         eve.target;
//         const moon = document.querySelector('#moon')
//         const sun = document.querySelector('#sun')
//         moon.classList.toggle('none');
//         sun.classList.toggle('none');

//     darkMode();

//     })   


//    // Filter tasks based on their status (all, active, completed)
// filterTasks = (filterType) => {
//     const tasks = document.querySelectorAll('.li');
//     tasks.forEach((task) => {
//         if (filterType === 'all') {
//             task.classList.remove('hidden');
//         } else if (filterType === 'active') {
//             if (!task.classList.contains('completed')) {
//                 task.classList.remove('hidden');
//             } else {
//                 task.classList.add('hidden');
//             }
//         } else if (filterType === 'completed') {
//             if (task.classList.contains('completed')) {
//                 task.classList.remove('hidden');
//             } else {
//                 task.classList.add('hidden');
//             }
//         }
//     });
// };

// // Event listeners for filter buttons
// document.querySelector('#all').addEventListener('click', () => filterTasks('all'));
// document.querySelector('#active').addEventListener('click', () => filterTasks('active'));
// document.querySelector('#completed').addEventListener('click', () => filterTasks('completed'));
