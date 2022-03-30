
/**
 * Age Calculator
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */

function ageCal(name,year) {
    
    let data  = new Date();
    let agelo = data.getFullYear() - year;
    let agest  = check_age(agelo);

    return `
    <p class="alert alert-${agest.status}">Hi ${name}, you are ${agelo} years olds and U ${agest.name}</p>
    `;

}
/**
 * Age Variation
 * @param {*} age 
 * @returns 
 */

function check_age(age) {
    
    if (age >0 && age<10) {
        
        return{
            name : 'Babu',
          status :'info',
        }
    } 
    else if (age >10 && age <18) {
        return{
             name  : 'Kishor',
            status :'success',
        }    
    }
    else if (age >18 && age <35) {
        return{
              name : 'Jobok',
            status :'primary',
        }    
    }
    else if (age >35 && age <55) {
        return{
              name : 'Mid-Age',
            status :'primary',
        }    
    }
    else if (age >55 && age <100) {
        return{
              name : 'Brithdo',
            status :'danger',
        }    
    }
    else if (age >100 && age <2000) {
        return{
              name : 'Jin/Bhot',
            status :'dark',
        }    
    }
};

