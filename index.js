const btn = document.querySelector('.add')
const form_inputs = document.querySelector('.form-inputs')
const sort_inputs = document.querySelector('.sort')
const sort_inputs_2 = document.querySelector('.sort_2')
let inputs = [{
    text: '',
    id: 1
}]
let id = 1;
const deleteItem = (id) => {
    inputs = inputs.filter((el) => el.id !==id)
    addInput()
}
const addInput = () => {
    form_inputs.innerHTML = '';
    inputs.map((input) => {
        form_inputs.innerHTML += `
        <div class="form-input">
            <input class='inp' myid=${input.id} value=${input.text}>
            <span class="delete" onclick='deleteItem(${input.id})'></span>
        </div>
        `
       const inp_values = document.querySelectorAll('.inp')
       inp_values.forEach((inp) => {
         let my_id = +inp.getAttribute('myid')
         inp.addEventListener('focusout',(e) => {
            inputs.find((element => element.id === my_id)).text = e.target.value
         })
       })
    })
}
addInput();
btn.addEventListener('click', (e) => {
    e.preventDefault();
    id++;
    inputs.push({
        text:'',
        id:id
    })
    addInput()
})
sort_inputs.addEventListener('click', () => {
    inputs = inputs.sort((a,b) => a.text > b.text ? 1 : -1);
    addInput();
    sort_inputs.classList.toggle('active')
    sort_inputs_2.classList.toggle('active')
})
sort_inputs_2.addEventListener('click', () => {
    inputs = inputs.sort((b,a) => a.text > b.text ? 1 : -1);
    addInput(); 
    sort_inputs_2.classList.toggle('active')
    sort_inputs.classList.toggle('active')    
})
