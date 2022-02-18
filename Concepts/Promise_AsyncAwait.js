// Promises async and await

const uno = () => {
    return "hey there I am One";


}

const duo = () => {

    // setTimeout(() => {

    //     return "I am Two";   // Normal method
    // }, 4000);

    return new Promise((yes, no)=>{
        setTimeout(()=>{

            yes("I am Two");         // ethod MUsing Promise
        }, 4000);

    });
};

const tres = () =>{
    return "I am three";
};

const callMe = async () => {

    let valOne = uno(); 
    console.log(valOne);

    let valTwo = await duo(); // calling func Puased until promise is settled ..
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};


callMe();