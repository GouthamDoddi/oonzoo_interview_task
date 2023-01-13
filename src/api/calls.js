import qs from 'qs';



export const registerUser = async load => {
    const {email} = load;
    const {pass} = load;
    const {admin} = load;

    // make a urlencoded post request to localhost:3001
    const data = {
      email,
      pass,
      admin
    };

    const response = await fetch('http://localhost:3001/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify(data),
    });

    console.log(response.status);
    console.log(data);

    const success = response.status === 200;

    // setAcknowledgement(success);
    console.log(success);

    return success;
  };

  export const LoginUser = async load => {
    const {email} = load;
    const {pass} = load;

    console.log('In fronend')


    // make a urlencoded post request to localhost:3001
    const data = {
      email,
      pass,
    };

    const response = await fetch('http://localhost:3001/users/logIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify(data),
    })

    console.log(response);




    return response.status == 200 
    ? [true, false] 
    : response.status == 202 ? [ true, true ]
    : [false, false];
  };


export const updateProduct = async load => {
const { _id } = load;
const {name} = load;
const {price} = load;

console.log({ _id, name, price })


// make a urlencoded post request to localhost:3001
const data = {
    _id,
name,
price
};

const response = await fetch('http://localhost:3001/products/update', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify(data),
});

    console.log(response.status);
    console.log(data);

    const success = response.status === 200;

    // setAcknowledgement(success);
    console.log(success);

    return success;
};

  export const addProduct = async (data) => {

    const response = await fetch('http://localhost:3001/products/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: qs.stringify(data),
      });
  
      console.log(response.status);
      console.log(data);
  
      const success = response.status === 200;
  
      // setAcknowledgement(success);
      console.log(success);
  
      return success;

  }

export const getAllProducts = async () => {
    const response = await fetch('http://localhost:3001/products/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(res => res);
      console.log(response);
  
      const success = response.status === 200;


  
      // setAcknowledgement(success);
      console.log(success);
  
      return response.json();
}

export const deleteSelectedRows = async () => {
    console.log("")
}
