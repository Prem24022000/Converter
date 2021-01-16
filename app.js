document.querySelector('.converter-form').addEventListener('submit', function(e){
    document.querySelector('#rupayInput').style.display = 'none';
    document.querySelector('#loading').style.display = 'block';
    setTimeout(convertIntoRupay, 2000);
    e.preventDefault();
});


function convertIntoRupay(){
    const amount = document.querySelector('.form-control');
    const rupay = document.getElementById('Rupay');
    const convert = parseFloat(amount.value) * 73.80;

    if(isFinite(convert)){
        rupay.value = convert.toFixed(2);
        document.querySelector('#rupayInput').style.display = 'block';
        document.querySelector('#loading').style.display = 'none';
    }else{
        showError('Please Enter Amount');
    }
}

function showError(task){
    document.querySelector('#rupayInput').style.display = 'none';
    document.querySelector('#loading').style.display = 'none';
    const div = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.card-header');
    div.className = 'error';
    div.appendChild(document.createTextNode(task));
    card.insertBefore(div, heading);
    setTimeout(removeError, 2000);
}

function removeError(){
    document.querySelector('.error').remove();
}